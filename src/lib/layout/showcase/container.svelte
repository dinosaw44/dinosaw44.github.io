<script lang=ts generics="T">
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

    :global([slot=heading]) {
        writing-mode: sideways-lr;
        
        @include media(compact) {
            writing-mode: horizontal-tb;
        }
    }

    section {
        display: flex;

        @include media(compact) {
            flex-direction: column;
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
</style>

<section>
    <slot name=heading />
    <span>
        {#each Array.from({ ...items, length: 4 }) as item}
            <slot {item} />
        {/each}
    </span>
</section>