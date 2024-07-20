<style lang=scss>
    .component {
        border: dashed 2px;
        border-radius: .5rem;
    }

    .section {
        display: flex;
        gap: 1rem;
    }

    .stack {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<script lang=ts>
    let width: number = 0,
        height: number = 0

    $: orientation = width > height
        ? 'landscape'
        : 'portrait'
</script>

<svelte:window
    bind:innerWidth={width}
    bind:innerHeight={height}
/>

{#if orientation == 'landscape'}
    <div class=section style:flex=auto
        style:padding='4rem 12rem'
        style:padding-bottom=0
    >
        <div class=stack style:flex=auto>
            <div class=component
                style:flex=auto
                style:margin='0 8rem'
            />
        </div>
    </div>
{:else}
<div class=stack style:flex=auto>
    <h1 style:text-align=center style:margin=0>Contact</h1>
    <div class=component
        style:flex=auto
        style:margin=1rem
        style:margin-top=0
    />
</div>
{/if}