<script lang=ts generics="T">
    import Empty from './card/card.base.svelte'
    export let items: T[]
</script>

<style lang=scss>
    $mode: (
        sparse: 
            (min-width: 1200) and
            (orientation: landscape),
        dense: 
            (min-width: 768) or
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
            
            @include media(compact) {
                text-align: center;
                writing-mode: horizontal-tb;
            }
        }

        span {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(4, 1fr);

            @include media(compact) {
                display: flex;
                flex-direction: column;
            }
        }
    }

    article:has(i) {
        background: none;
        border: solid var(--color-accent) 2px;
        border-style: dashed !important;
    }
</style>

<section>
    <slot name=heading />
    <span>
        {#each items as item}
            <slot {item} />
        {/each}

        {#each Array.from({ length: 4 - items.length }) as _}
            <Empty />
        {/each}
    </span>
</section>