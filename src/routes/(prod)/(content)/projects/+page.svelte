<script lang=ts>
    import { Card as ProjectPreview, type Project } from "$lib/components/project"
    import { DateTime } from "luxon"

    const outHomeSite = ({ title }: Project) => !title.endsWith(".github.io")

    const byLastUpdated = (
        { updated: a }: Project,
        { updated: b}: Project,
    ) => b.getTime() - a.getTime()

    const fromKebabCase = ({ title, ...info }: Project) => Object.assign(info, {
        title: title.replaceAll("-", " ")
    })

    const toRelativeTime = ({ updated, ...info }: Project) => Object.assign(info, {
        updated: DateTime.fromJSDate(updated).toRelativeCalendar()
    })

    export let data
    
    const projects = data.projects
        .filter(outHomeSite)
        .map(fromKebabCase)
        .sort(byLastUpdated)
        .map(toRelativeTime)
</script>

<div style:display=flex style:grid-template-columns="1fr" style:gap=5ch style:padding="20ch 0 0 20ch">
    {#each projects as info}
        <ProjectPreview {info} />
    {/each}
</div>