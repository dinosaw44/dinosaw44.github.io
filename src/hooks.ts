export function reroute({ url }) {
    if (process.env.NODE_ENV === 'development') {
        return '/new.home' + url.pathname
    }
}