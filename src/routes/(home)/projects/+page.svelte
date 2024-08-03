<script lang=ts>
    import TagArray from '$lib/components/TagArray.svelte'

    import Projects, { Card as ProjectCard } from '$lib/layout/projects'
    import { Links, Timestamp, Footer } from '$lib/layout/showcase'
    
    import { getContext } from '$lib/context/display-mode'

    export let data

    const { showcase, projects, tags } = data

    const displayMode = getContext()
</script>

<style lang=scss>
    main {
        padding: 4ch 4ch 0;
    }
</style>

<main>
    <Projects items={projects} let:item={project}>
        {@const { name, ...details } = project}
        
        <ProjectCard title={name}>
            {@const { description, updated, ...links } = details}
            {@const { site, repo } = links}

            <svelte:fragment slot=pre>
                {@const tags = [...Object.keys(project.languages), ...project.topics]}

                {#if $displayMode !== 'compact'}
                    <span>
                        <TagArray tags={tags} />
                        <hr>
                    </span>
                {/if}
            </svelte:fragment>

            <p>{description}</p>

            <Footer>
                <Timestamp iso={updated} let:datetime={updated}>
                    Updated {updated.toRelativeCalendar()}
                </Timestamp>
                <Links {site} {repo} />
            </Footer>
        </ProjectCard>
    </Projects>
</main>