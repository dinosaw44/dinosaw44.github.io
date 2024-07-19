<script lang=ts>
    import { Profile, Projects, Contact } from '$lib/pages'
    import { SnapTo } from '$lib/components/page-view'
    import { Showcase } from '$lib/layout/showcase'

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as repoLinkIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as homepageLinkIcon } from "@fortawesome/free-solid-svg-icons"
	import { updated } from '$app/stores';

    export let data

    const { showcase, projects } = data
</script>

<style lang=scss>
    article {
        border: solid 2px var(--color-accent);
        border-radius: 1rem;
        display: grid;
        flex: 1;
        padding: 1rem;

        &:has(i) {
            border-style: dashed;
        }

        &:not(:has(i)) {
            $hi: color-mix(in srgb, var(--color-dark) 80%, white);

            background: 
                linear-gradient(to top right, var(--color-dark), $hi) padding-box,
                linear-gradient(to top right, orange, var(--color-accent)) border-box;
            border: 2px solid transparent;
        }

        a {
            color: inherit;
            font-size: 1.5rem;

            &:hover {
                color: var(--color-emphasis);
            }
        }
    }
</style>

<SnapTo id=profile>
    <Profile />
    <Showcase items={showcase} let:item={project}>
        <h2 slot=heading>Showcase</h2>
        <article>
            {#if project}
                {@const { url, homepage, description, updated } = project}

                <h3>{project.name}</h3>

                <p>{description}</p>

                <div style:display=flex style:flex=auto style:justify-content=space-between style:margin-top=auto>
                    <small style:margin-top=auto>{updated}</small>
                    <span>
                        {#if homepage}
                            {@const { href } = new URL(homepage)}
                            <a {href} target="_blank" title="Homepage">
                                <FontAwesomeIcon icon={homepageLinkIcon}/>
                            </a>
                        {/if}

                        {#if url}
                            {@const { href } = new URL(url)}
                            <a {href} target="_blank" title="Github Repo">
                                <FontAwesomeIcon icon={repoLinkIcon}/>
                            </a>
                        {/if}
                    </span>
                </div>
            {:else}
                <i>Coming soon...</i>
            {/if}
        </article>
    </Showcase>
</SnapTo>

<SnapTo id=projects>
    <Projects />
</SnapTo>

<SnapTo id=contact>
    <Contact />
</SnapTo>