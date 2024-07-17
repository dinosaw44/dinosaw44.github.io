import { REDIS_URI } from '$env/static/private'
import { Redis } from 'ioredis'

const redis = new Redis(String(REDIS_URI))

export async function load() {
    const cached = await redis.lrange('showcase', 0, -1)

    return {
        showcase: cached ?? [],
        projects: { 
            'dinosaw44.github.io': { 
                repo: 'https://github.com/dinosaw44/dinosaw44.github.io'
            },
        }
    }
}