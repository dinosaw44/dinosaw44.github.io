type Repo = {
    name: string,
    html_url: string,
    description?: string,
    homepage?: string,
    updated_at: string,
    languages_url: string,
    language: string
}

export async function load() {
    const response = await fetch("https://api.github.com/users/dinosaw44/repos")
    const repos = await response.json() as Repo[]
    const projects = await Promise.all(repos.map(async (repo: Repo) => {
        const langs = fetch(repo.languages_url)
            .then(response => response.json())
            .then(langs => Object.keys(langs))

        const name = repo.name.replaceAll('-', ' ')
        const description = repo.description
        const source = new URL(repo.html_url)
        const homepage = repo.homepage ? new URL(repo.homepage) : undefined
        const updated = repo.updated_at
        const tags = [...new Set([repo.language, ...await langs])]

        return {
            name,
            description,
            source,
            homepage,
            updated,
            tags,
        }
    }))

    return {
        projects: projects.filter(({ source }) => !source.pathname.endsWith("github.io"))
    }
}