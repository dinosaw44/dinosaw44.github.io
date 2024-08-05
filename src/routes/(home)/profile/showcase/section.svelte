<script lang=ts generics="T">
    import Empty from '$lib/layout/showcase/card/card.base.svelte'
    export let items: T[] = []
</script>

<style lang=scss>
    $mode: (
        sparse: 
            (min-width: 1200) and
            (orientation: landscape),
        dense: 
            (min-width: 768) and
            (orientation: landscape),
        compact:
            (orientation: portrait),
    );

    @mixin media($breakpoints) {
        $conditions : ();
        @each $breakpoint in $breakpoints {
            $conditions: append(
                $conditions,
                #{inspect(map-get($mode, $breakpoint))},
                comma
            );
        }

        @media #{$conditions} {
            @content;
        }
    }

    section {
        display: flex;

        @include media(sparse) {
            margin: auto;
        }

        @include media(compact) {
            flex-direction: column;
        }

        & :global([slot=heading]) {

            writing-mode: sideways-lr;

            @supports not (writing-mode: sideways-lr) {
                transform: rotate(180deg);
                writing-mode: vertical-lr;
            }
            
            @include media(compact) {
                text-align: center;
                writing-mode: horizontal-tb;
            }
        }

        #items {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(4, 1fr);

            @include media(compact) {
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>

<section>

    <span style:display=contents style:text-align=center>
        <slot name=heading />
    </span>
    
    <span id=items>
        {#each items as item}
            <slot {item} />
        {/each}

        {#each Array.from({ length: 4 - items.length }) as _}
            <Empty />
        {/each}
    </span>
</section>