import { PUBLIC_GITHUB_USERNAME } from "$env/static/public"
import { listProjects } from "$lib/services/github"

export async function load() {    
    return {
        projects: await listProjects(PUBLIC_GITHUB_USERNAME)
    }
}