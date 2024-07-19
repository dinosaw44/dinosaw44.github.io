import { REDIS_URI } from '$env/static/private'
import { Redis } from 'ioredis'

const { href } = new URL(REDIS_URI)
const client = new Redis(href)

export const showcase = async () => {
    return await client.lrange('showcase', 0, -1)
}

export const repos = new class {

    async *[Symbol.asyncIterator]() {
        for (const name of await client.lrange('repos', 0, -1)) {
            yield { name, ...await client.hgetall(`repo:${name}`) }
        }
    }

    write(repos: { name: string, [key: string]: string}[]) {
        client.set('repos', repos.map(({ name }) => name))
        
        for (const { name, ...info } of repos) {
            client.hmset(`repo:${name}`, info)
        }

        return repos
    }
}