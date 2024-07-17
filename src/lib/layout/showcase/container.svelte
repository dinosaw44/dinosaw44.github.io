<script lang=ts>
    export let items: { label: string }[]
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
        @include media(compact) {
            flex-direction: column;
        }
    }
</style>

<section 
    style:display=flex
    style:gap=1rem
>
    <slot name=heading />

    {#each Array.from({ ...items, length: 4 }) as item}
        <slot {item} label={item?.label} />
    {/each}
</section>