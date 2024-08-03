import { redirect } from "@sveltejs/kit"

export function load({ url: { origin, pathname } }: { url: URL }) {
    if (process.env.NODE_ENV === 'production') {
        const id = pathname.replace('/', '#')
        const location = new URL(id, origin)

        redirect(302, location)
    }
}