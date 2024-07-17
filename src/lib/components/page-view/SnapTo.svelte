<script lang=ts>
    import { Nav } from '$lib/components/navigation'

    export let id: string
</script>

<style lang=scss>
    .stack {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    section {
        scroll-snap-align: center;
    }
</style>

<section {id}
    style:display=flex
    style:flex-direction=column
    style:min-height=100dvh
>
    <div class=stack 
        style:flex=auto
        style:padding=1rem
    >
        <slot />
    </div>
</section>