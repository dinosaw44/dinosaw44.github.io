<script lang=ts>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as githubIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as projectIcon } from "@fortawesome/free-solid-svg-icons"

    export let data;
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
    {#each data.projects as { name, description, source, homepage }}
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
        
        <span style:display=flex style:gap=1ch style:justify-content=right>
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