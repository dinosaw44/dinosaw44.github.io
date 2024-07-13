import { PUBLIC_GITHUB_USERNAME } from "$env/static/public"
import { listProjects } from "$lib/services/github"

export async function load({ setHeaders }) {    
    setHeaders({
        "cache-control": "public, max-age=3600",
    })

    return {
        projects: await listProjects(PUBLIC_GITHUB_USERNAME)
    }
}