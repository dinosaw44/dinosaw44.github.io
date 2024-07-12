import { DateTime } from "luxon"
import { type Project } from "$lib/components/project"

const repos = async (user: string) => {
    const uri = `https://api.github.com/users/${user}/repos`
    const res = await fetch(uri)

    return await res.json() as {
        name: string,
        html_url: string,
        description?: string,
        homepage?: string,
        updated_at: string,
        languages_url: string,
        language: string,
    }[]
}

export async function listProjects(user: string): Promise<Project[]> {
    if (process.env.NODE_ENV === "development") {
        const example = (await import("./example.json")).default.map(({ updated, source, site, ...data }) => {
            const transform = (() => {
                switch (updated) {
                    case "<today>": return DateTime.fromJSDate(new Date()).set({ hour: 0 })
                    case "<yesterday>": return DateTime.fromJSDate(new Date()).minus({ day: 1 })
                }
            })()

            const retv = { ...data, source: new URL(source), updated: transform!.toJSDate() }

            return site
                ? { ...retv, site: new URL(site) }
                : retv
        })

        return example
    }

    const r = await repos(user)
    const projects = await Promise.all(r.map(async (repo) => {
        const langs = fetch(repo.languages_url)
            .then(response => response.json())
            .then(langs => Object.keys(langs))

        const retv = {
            title: repo.name,
            description: repo.description,
            updated: new Date(repo.updated_at),
            source: new URL(repo.html_url),
            tags: [...new Set([ repo.language, ...await langs ])],
        }

        return repo.homepage
            ? { ...retv, site: new URL(repo.homepage) }
            : retv
    }))

    return projects
}