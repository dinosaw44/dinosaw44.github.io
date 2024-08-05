<script lang=ts>
    import { UnorderedList as List } from "@dinosaw44/ui/src/list"
    import { TagLabel } from "@dinosaw44/ui/src/tag"

    export let tags: string[]
    export let color: string = "var(--color-accent)"

    const format = (tag: string) => {
        const acronyms = [ "msw", "p2p", "pwa" ]

        if (acronyms.includes(tag)) {
            return tag.toUpperCase()
        }

        const capitalize = (match: string, group: string) => {
            return match.replace(group, group.toUpperCase())
        }

        const toPascalCase = (tag: string, pattern: RegExp) => {
            return tag.replace(pattern, capitalize)
        }

        const partials = [
            /^svelte(k)it$/,
            /^(ts)yringe$/,
            /^web(rtc)$/,
            /^([a-z])/
        ]

        return partials.reduce(toPascalCase, tag)
    }
</script>

{#if tags.length}
    <List items={tags} let:item={tag}>
        {@const label = format(tag)}
        <TagLabel {label} color={color} text=white />
    </List>
{/if}