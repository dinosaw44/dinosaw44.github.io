import repos, { showcase } from './repos'

export const projects = async () => {
    const selected = await showcase()
    return [...(await repos())].map(({ name, ...info }) => ({
        name, ...info,
        showcase: selected.includes(name),
    }))
}