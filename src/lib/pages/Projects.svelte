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
</style>

<div class=stack style:flex=auto
    style:padding='4rem 12rem'
    style:padding-bottom=0
    >
    <h1 class=component>Projects</h1>
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