import { selectFilter } from '$lib/common/utils/filter'
import { projects } from '$lib/data'

const showcase = selectFilter(({
    showcase,
}: { showcase: boolean}) => {
    return showcase
})

export async function load() {
    return {
        showcase: [...await projects()].filter(showcase(true)),
        projects: [...await projects()].filter(showcase(false)),
    }
}