<script lang=ts>
    import { type Project } from "$lib/components/project"

    import Card from "$lib/ui/card"
    import Tag from "$lib/ui/tag"

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as githubIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as projectIcon } from "@fortawesome/free-solid-svg-icons"

    export let info: Omit<Project, "updated"> & { updated: string | null }

    const decorated = (tag: typeof info.tags[number]) => {
        const colors: Record<string, `#${string}`> = {
            "Svelte": "#f00",
            "TypeScript": "#07c",
            "JavaScript": "#fc0",
            "SCSS": "#faf",
            "React": "#077",
            "Next": "#aaa",
            "PWA": "#7a0",
            "WebRTC": "#fa0",
            "Dexie": "#d4c",
            "Tailwind": "#4cf",
        }

        const label = (tag[0].toUpperCase() + tag.slice(1))
            .replace(/(Pwa|rtc)/, s => s.toUpperCase())

        return {
            label,
            color: colors[label] ?? "#fff",
        }
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

<Card>
    <article style:display=flex style:flex-direction=column style:height=100%>
        <hgroup>
            <div style:display=flex style:gap=1ch style:align-items=center>
                {#if info.status}
                    <img src={info.status.href} alt="Status Badge"/>
                {/if}
                <small style:line-height=20px style:margin-left=auto style:white-space=nowrap>Updated {info.updated}</small>
            </div>
            <hr />
            <h1>{info.title}</h1>
        </hgroup>

        <span style:flex=auto>
            {#if info.description}
                <p style:padding-left=1rem>{info.description}</p>
            {:else}
                <p style:text-align=center>
                    <i>No description</i>
                </p>
            {/if}
        </span>

        <span style:margin="3rem 1rem 0" style:text-align=right>
            {#if info.site}
                <a href={info.site.href} target="_blank" title={info.title}>
                    <FontAwesomeIcon icon={projectIcon}/>
                </a>
                <span style:margin-left=1rem />
            {/if}
            
            <a href={info.source.href} target="_blank" title="Github Repo">
                <FontAwesomeIcon icon={githubIcon}/>
            </a>
        </span>

        <span>
            {#if info.tags.length}
                <hr />
                <footer style:display=flex style:gap=1ch style:justify-content=center>
                    {#each info.tags.map(decorated) as { label, color }}
                        <Tag {label} {color} />
                    {/each}
                </footer>
            {/if}
        </span>
    </article>
</Card>