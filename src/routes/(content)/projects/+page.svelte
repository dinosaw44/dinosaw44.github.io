<script lang=ts>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as githubIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as projectIcon } from "@fortawesome/free-solid-svg-icons"
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

<style lang=scss>
    a {
        color: inherit;
        font-size: 1.75rem;

        &:hover {
            color: var(--accent);
        }
    }
</style>

<div style:display=flex style:gap=5ch style:padding="20ch 0 0 20ch">
    {#each projects.sort(orderByLatest) as { name, description, source, homepage, updated }}
        {@const timeSinceUpdate = updated.toRelativeCalendar()}

        <div
            style:border="solid var(--accent) 2px"
            style:border-radius=1rem
            style:padding=1rem
            style:height=8rem
            style:width="calc(8rem * 1.6)"
            style:display=flex
            style:flex-direction=column
        >
            <p style:text-transform=capitalize style:font-size=1.5rem>{name}</p>

            {#if description}
                <i>{description}</i>
            {:else}
                <i>No description</i>
            {/if}

            <span style:flex=auto />
            
            <span style:display=flex style:gap=1ch>

                
                <small style:margin="auto auto 0 0">Updated {timeSinceUpdate}</small>

                {#if homepage}
                    <a href={homepage.href} target="_blank" title={name}>
                        <FontAwesomeIcon icon={projectIcon}/>
                    </a>
                {/if}

                <a href={source.href} target="_blank" title="Github Repo">
                    <FontAwesomeIcon icon={githubIcon}/>
                </a>
            </span>
        </div>
    {/each}
</div>