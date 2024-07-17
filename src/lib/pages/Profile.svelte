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

<div class=section style:flex=auto
    style:padding='4rem 4rem 0 12rem'
>
    <div class=stack style:flex=auto >
        <h1 class=component>Profile</h1>
        <div class=component style:flex=auto />
    </div>
        <div class=component style:width=30ch />
    </div>

    <div class=section
        style:padding='0 6rem 0 6.75rem'
    >
    <h2 style:writing-mode=sideways-lr>Showcase</h2>
    <div
        style:flex=auto
        style:display=flex
        style:gap=1rem
    >
        {#each Array(4) as _}
            <div
                style:border='dashed 2px'
                style:border-radius=1rem
                style:flex=auto
            />
        {/each}
    </div>
</div>