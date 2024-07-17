<style lang=scss>
    .component {
        border: dashed 2px;
        border-radius: .5rem;
    }

    .section {
        display: flex;
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
    <!--main-->
    <div id=wrapper class=section style:flex=auto>
        <div
            style:display=flex
            style:flex=auto
            style:flex-direction=column
            style:gap=1rem
        >
            <h1 class=component>Profile</h1>
            <div class=component style:flex=auto />
        </div>
        
        <div class=component style:width=30ch />
    </div>
    <!--/main-->
{:else}
    <div
        style:display=flex
        style:flex=auto
        style:flex-direction=column
        style:gap=1rem
    >
        <h1 style:text-align=center style:margin=0>Profile</h1>
        <div class=component style:flex=auto />
    </div>

    <div class=component style:height=8ex />
{/if}