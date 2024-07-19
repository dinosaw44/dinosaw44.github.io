/* import connect, { type User, repos as key } from '$lib/services/cache'

import user from './user'

type Repo = {
    name: string,
}

export const repo = async ({ name: user }: User, { name: repo }: Repo) => {
    const cache = connect()

    const cached = await cache.get(`user:${user}:repos:${repo}`)
}

export default async ({ name }: User) => {
    const cache = connect()

    const cached = await cache.lrange(key({ name }), 0, -1)
    
    if (cached.length) {
        return await cached.map(async repo => await repo({name}, {name: repo}))
    }
    
    const { repos_url } = await user({ name })

    cache.quit()
    return []
} */