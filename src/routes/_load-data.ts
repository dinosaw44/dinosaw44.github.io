import { PUBLIC_GITHUB_USERNAME } from '$env/static/public'
import { selectFilter } from '$lib/common/utils/filter'
import { getProfile } from '@util/gh-user-profile'

type Project = Awaited<ReturnType<typeof getProfile>>['projects'][number]

const showcase = selectFilter<Project, boolean>(({ showcase }) => showcase === true)

export default async function() {
    const { projects } = await getProfile(PUBLIC_GITHUB_USERNAME)
    
    return {
        showcase: projects.filter(showcase(true)),
        projects: projects.filter(showcase(false)),
        tags: new Set(projects.reduce((tags: string[], { topics, languages }) => {
            return [
                ...Object.values(languages),
                ...tags,
                ...topics,
            ] as string[]
        }, []) ?? [])
    }
}