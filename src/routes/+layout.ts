import { browser } from "$app/environment"
import loadData from "$lib/testing/load-data"

export const ssr = false

export async function load() {
    if (browser && process.env.NODE_ENV === 'development')
        return

    return await loadData()
}