<script lang=ts>
    import { UnorderedList as List } from "@dinosaw44/ui/components/svelte/list"
    import { TagLabel } from "@dinosaw44/ui/components/svelte/tag"

    export let tags: string[] = []
</script>

{#if tags.length}
    <List items={tags} let:item={label}>
        <span style:display=inline-block style:margin=".25rem 0">
            <TagLabel {label} />
        </span>
    </List>
{/if}