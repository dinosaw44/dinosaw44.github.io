<script lang=ts context=module>
    import { DateTime } from "luxon"

    const updated = (isoDate: string) => DateTime.fromISO(isoDate)
    const relative = (date: Date) => updated(date.toISOString()).toRelativeCalendar()
</script>

<script lang=ts>
    import Card from "$lib/ui/card"
    import Tag from "$lib/ui/tag"

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faCodeBranch as githubIcon } from "@fortawesome/free-solid-svg-icons"
    import { faLayerGroup as projectIcon } from "@fortawesome/free-solid-svg-icons"

    export let updated: Date
    export let title: string
    export let description: string | null = null
    export let site: URL | null = null
    export let source: URL
    export let tags: string[] = []

    const decorated = (tag: typeof tags[number]) => {
        const colors: Record<string, `#${string}`> = {
            "Svelte": "#f00",
            "TypeScript": "#07a",
            "JavaScript": "#fc0",
            "React": "#077",
            "PWA": "#7a0",
            "WebRTC": "#fa0",
        }

        return {
            label: tag,
            color: colors[tag] ?? "#fff",
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
            <small>Updated {relative(updated)}</small>
            <hr />
            <h1>{title}</h1>
        </hgroup>

        <span style:flex=auto>
            {#if description}
                <p style:padding-left=1rem>{description}</p>
            {:else}
                <p style:text-align=center>
                    <i>No description</i>
                </p>
            {/if}
        </span>

        <span style:margin="3rem 1rem 0" style:text-align=right>
            {#if site}
                <a href={site.href} target="_blank" {title}>
                    <FontAwesomeIcon icon={projectIcon}/>
                </a>
                <span style:margin-left=1rem />
            {/if}
            
            <a href={source.href} target="_blank" title="Github Repo">
                <FontAwesomeIcon icon={githubIcon}/>
            </a>
        </span>

        <span>
            {#if tags.length}
                <hr />
                <footer style:display=flex style:gap=1ch>
                    {#each tags.map(decorated) as { label, color }}
                        <Tag {label} {color} />
                    {/each}
                </footer>
            {/if}
        </span>
    </article>
</Card>