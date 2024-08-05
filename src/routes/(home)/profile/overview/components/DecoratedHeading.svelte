<script lang=ts>
    export let type: `h${1|2|3|4|5|6}`
    export let title: string
</script>

<style lang=scss>

    @each $level in 1 2 3 4 5 6 {
        h#{$level} {
            @extend %headings !optional;
        }
    }

    %headings {
         
        @media (orientation: landscape) {
            margin-bottom: 1rem;
        }

        &::before, &::after {
            color: var(--color-accent);
        }

        &::before {
            content: "<" / "";
        }

        &::after {
            content: " />" / "";
        }
    }
</style>

<svelte:element this={type}>{title}</svelte:element>