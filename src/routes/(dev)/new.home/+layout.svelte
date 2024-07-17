<script lang=ts>
    import { Nav } from '$lib/components/navigation'
</script>

<style lang=scss>
    :global(html) {
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
    }

    :global(body) {
        margin: 0;
    }

    .stack {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div :global(.wrapper) {
        scroll-snap-align: center;
    }
</style>

<div class=wrapper style:position=fixed
    style:width=100%
    style:max-width=100vw
>
    <div class=stack 
        style:flex=auto
        style:padding=1rem
    >
        <Nav />
    </div>
</div>

<div>
    <slot />
</div>