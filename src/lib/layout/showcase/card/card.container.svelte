<script lang=ts>
    import Card from './card.base.svelte'
    export let title: string
</script>

<style lang=scss>
    h1 {
        font-size: 1.5em;
    }
</style>

<Card>
    <h1>{title}</h1>
    <slot />
</Card>