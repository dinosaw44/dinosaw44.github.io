/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        projects: [
            { repo: new URL("https://github.com/dinosaw44/offline-webapp"), url: new URL("https://dinosaw44.github.io/offline-webapp") },
        ]
    }
}