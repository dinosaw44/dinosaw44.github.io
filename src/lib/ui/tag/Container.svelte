<script lang=ts>
    export let label: string
    export let color: `#${string}`
</script>

<style lang=scss>
    @mixin rounded {
        border-radius: 2ch;
        padding: .1ch 1ch;
    }

    span {
        display: inline-block;
        @include rounded;

        font-weight: 100;
    }
</style>

<span 
    style:background-color={`${color}${color.length === 4 ? 3 : 33}`}
    style:border={`solid 1px ${color}`}
>
    <p style:color={color}>{label}</p>
</span>