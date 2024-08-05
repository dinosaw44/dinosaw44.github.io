<script lang=ts>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as repoLinkIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as homepageLinkIcon } from "@fortawesome/free-solid-svg-icons"

    export let site: string | null
    export let repo: string
</script>

<style lang=scss>
    span {
        display: grid;
        gap: .5rem;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;

        a {
            aspect-ratio: 1 / 1;
            border: solid white 1px;
            border-radius: 2rem;
            color: inherit;
            padding: .5rem;
            width: 1rem;
            
            &:hover {
                border-color: var(--color-emphasis);
                color: var(--color-emphasis);
            }
        }
    }
</style>

<span>
    {#if site}
        {@const { href } = new URL(site)}
        <a {href} target="_blank" title="Homepage">
            <FontAwesomeIcon icon={homepageLinkIcon}/>
        </a>
    {/if}

    {#if repo}
        {@const { href } = new URL(repo)}
        <a {href} target="_blank" title="Github Repo">
            <FontAwesomeIcon icon={repoLinkIcon}/>
        </a>
    {/if}
</span>