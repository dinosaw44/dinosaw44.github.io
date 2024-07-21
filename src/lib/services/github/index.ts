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