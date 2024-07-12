export { default as Card } from "./Card.svelte"

export type Project = {
    title: string,
    description?: string,
    updated: Date,
    source: URL,
    site?: URL,
    tags: string[],
}