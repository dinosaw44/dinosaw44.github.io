import { browser } from "$app/environment"
import loadData from "./_load-data"

export async function load() {
    if (browser && process.env.NODE_ENV === 'development')
        return 

    return await loadData()
}