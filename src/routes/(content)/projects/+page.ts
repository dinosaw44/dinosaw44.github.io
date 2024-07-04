type Repo = {
    name: string,
    html_url: string,
    description?: string,
    homepage?: string,
}

export async function load() {
    const response = await fetch("https://api.github.com/users/dinosaw44/repos")
    const repos = await response.json() as Repo[]

    const projects = repos.map((repo: Repo) => {
        const name = repo.name.replaceAll('-', ' ')
        const description = repo.description
        const source = new URL(repo.html_url)
        const homepage = repo.homepage ? new URL(repo.homepage) : undefined

        return {
            name,
            description,
            source,
            homepage,
        }
    })

    return {
        projects: projects.filter(({ source }) => !source.pathname.endsWith("github.io"))
    }
}