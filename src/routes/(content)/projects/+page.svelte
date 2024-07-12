<script lang=ts>
    import { Card as ProjectPreview } from "$lib/components/project"
    import { DateTime } from "luxon"

    export let data;

    const projects = data.projects.map(({ updated, ...props }) => {
        return {
            ...props,
            updated: DateTime.fromISO(updated),
        }
    })

    const orderByLatest = (a: typeof projects[number], b: typeof projects[number]) => {
        return b.updated.toMillis() - a.updated.toMillis()
    }
</script>

<div style:display=flex style:grid-template-columns="1fr" style:gap=5ch style:padding="20ch 0 0 20ch">
    {#each projects.sort(orderByLatest) as { name, description, source, homepage, updated, tags }}
        <ProjectPreview 
            updated={updated.toJSDate()}
            title={name}
            description={description}
            site={homepage}
            source={source}
            tags={tags}
        />
    {/each}
</div>