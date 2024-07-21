<script lang=ts generics="T">
    import { getContext } from '$lib/context/display-mode'

    export let items: T[] = []

    const displayMode = getContext()
    const columns = $displayMode === 'compact' ? 2 : 3
</script>

<style lang=scss>
    section {
        display: grid;
        gap: 1rem;
        grid-auto-flow: dense;
        grid-auto-rows: 1fr;
    }

    div {
        &:empty {
            background: none;
            border: solid white 2px;
            border-radius: 1rem;
            border-style: dashed;
            padding: 1rem;

            &::after {
                content: "Coming soon...";
                font-style: italic;
            }
        }
    }
</style>

<div style:padding-top=4rem>
    <section style:grid-template-columns='repeat({columns}, 1fr)'>
        {#each items as item}
            <slot {item} />
        {/each}

        <div style:height=12rem/>
        <div style:grid-column='span 2' />
        <div style:grid-column='span 2' />
        <div />
    </section>
</div>