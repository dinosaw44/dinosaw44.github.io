import { DateTime } from "luxon"
import { type Project } from "$lib/components/project"

const repos = async (user: string) => {
    const uri = `https://api.github.com/users/${user}/repos`
    const res = await fetch(uri)
    
    if (res.status !== 200)
        throw new Error((await res.json()).message)

    return await res.json() as {
        name: string,
        html_url: string,
        description?: string,
        homepage?: string,
        pushed_at: string,
        languages_url: string,
        language: string,
        topics: string[],
        has_pages: boolean,
    }[]
}

export async function listProjects(user: string): Promise<Project[]> {
    if (process.env.NODE_ENV === "development") {
        const example = (await import("./example.json")).default.map(({ updated, source, site, status, ...data }) => {
            const transform = (() => {
                switch (updated) {
                    case "<today>": return DateTime.fromJSDate(new Date()).set({ hour: 0 })
                    case "<yesterday>": return DateTime.fromJSDate(new Date()).minus({ day: 1 })
                }
            })()

            const retv: Project = { ...data, source: new URL(source), updated: transform!.toJSDate() }

            if (site)
                retv.site = new URL(site)
            
            if (status)
                retv.status = new URL(status)

            return retv
        })

        return example
    }

    const repoList = await repos(user);
    const projects = await Promise.all(repoList.map(async (repo) => {
        const langs = fetch(repo.languages_url)
            .then(response => response.json())
            .then(langs => Object.keys(langs))

        const retv: Project = {
            title: repo.name,
            description: repo.description,
            updated: new Date(repo.pushed_at),
            source: new URL(repo.html_url),
            tags: [...new Set([ repo.language, ...repo.topics, ...await langs ])],
        }

        if (repo.homepage)
            retv.site = new URL(repo.homepage)
        
        if (repo.has_pages)
            retv.status = new URL(`https://github.com/${user}/${repo.name}/actions/workflows/deploy.yaml/badge.svg`)

        return retv
    }))
    
    return projects
}