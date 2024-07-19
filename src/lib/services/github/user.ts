/* import { GITHUB_API } from '$env/static/private'
import { error } from '@sveltejs/kit'

import connect, { type User, user as key } from '$lib/services/cache'

const user = (name: string) => new URL(`${GITHUB_API}/users/${name}`)

export default async ({ name }: User) => {
    const userKey = key(name)
    const cached = await (async () => {
        const cache = connect()
        return cache.hgetall(userKey)
            .then(result => {
                cache.quit()
                return Object.keys(result).length
                    ? result
                    : false
            })
    })()

    if (cached) {
        return cached
    }

    const response = await fetch(user(name))
    
    if (response.ok) {
        const { repos_url } = await response.json()

        await (async () => {
            const cache = connect()  
            await cache.hset(`${userKey}`, ['repos_url', repos_url ])
            cache.quit()
        })()

        return { 
            repos_url,
        }
    }

    return error(404, 'Not found')
} */