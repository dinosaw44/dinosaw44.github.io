<style lang=scss>
    .component {
        border: dashed 2px;
        border-radius: .5rem;
    }

    .stack {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    #wrapper {
        padding: 4rem 4rem 0 12rem;
    }
    
    @media (max-width: 1024px) {
        #wrapper {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media (orientation: portrait) {
        #wrapper {
            padding: 0;
        }
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

{#if orientation === 'landscape'}
    <div id=wrapper class=stack style:flex=auto>
        <div
            style:flex=auto
            style:display=grid
            style:grid-template-columns='1fr 1fr 1fr'
            style:gap=1rem
        >
            {#each Array(3) as _}
                <div class=component />
            {/each}

            <div class=component 
                style:grid-column='1 / 3'
            />

            {#each Array(2) as _}
                <div class=component />
            {/each}

            <div class=component 
                style:grid-column='2 / 4'
            />
        </div>
    </div>
{:else}
    <h1 style:text-align=center style:margin=0>Projects</h1>
    <div
        style:flex=auto
        style:display=grid
        style:grid-auto-flow='dense'
        style:grid-template-columns='1fr 1fr'
        style:gap=1rem
    >
        {#each Array(3) as _}
            <div class=component />
        {/each}

        <div class=component 
            style:grid-column='auto / span 2'
        />

        {#each Array(2) as _}
            <div class=component />
        {/each}

        <div class=component 
            style:grid-column='auto / span 2'
        />

        <div class=component />
    </div>
{/if}