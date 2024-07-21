import * as cache from '$lib/services/cache'

export const showcase = cache.showcase

type Project = {
    name: string,
    description?: string,
    url: string,
    homepage?: string,
    updated: string,
}


export default async () => {
    const repos = []

    for await (const repo of cache.repos)
        repos.push(repo)
    
    if (repos.length === 0)
        repos.push(...cache.repos.write([{name:'one', url: 'https://test.com'}]))

    return repos as Project[]
}