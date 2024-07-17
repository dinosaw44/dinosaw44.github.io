<script lang=ts>
    import { Profile, Projects, Contact } from '$lib/pages'
    import { SnapTo } from '$lib/components/page-view'
    import { Showcase } from '$lib/layout/showcase'

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as githubIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as projectIcon } from "@fortawesome/free-solid-svg-icons"

    export let data: { showcase: string[], projects: {[index: string]: { homepage: string, repo: string }}}

    const { showcase, projects } = data
</script>

<style lang=scss>
    article {
        border: solid 2px var(--color-accent);
        border-radius: 1rem;
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

            &:hover {
                transform: scale(1.05);
            }
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
    <Showcase
        items={showcase.map(label => ({ label }))}

        let:item={project}
        let:label={name}
    >
        <h2 slot=heading>Showcase</h2>

        <article style:display=flex>
            {#if project}
                {@const { homepage, repo } = projects[name]}

                <h3>{name}</h3>
                <div style:flex=auto style:text-align=right style:margin-top=auto>
                    {#if homepage}
                        {@const { href } = new URL(homepage)}
                        <a {href} target="_blank" title={name}>
                            <FontAwesomeIcon icon={projectIcon}/>
                        </a>
                        <span style:margin-left=1rem />
                    {/if}
                    
                    {#if repo}
                        {@const { href } = new URL(repo)}
                        <a {href} target="_blank" title="Github Repo">
                            <FontAwesomeIcon icon={githubIcon}/>
                        </a>
                    {/if}
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