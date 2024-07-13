<style lang=scss>
    $hi: color-mix(in srgb, var(--color-dark) 80%, white);

    div {
        border-color: var(--color-accent);
        width: min-content;
        
        &:hover {
            background: 
                linear-gradient(to top right, var(--color-dark), $hi) padding-box,
                linear-gradient(to top right, orange, yellow) border-box;
            color: var(--color-light);
            border: 2px solid transparent;
            border-radius: 15px;
            display: inline-block;
        }
    }
</style>

<div 
    style:border-style=solid
    style:border-radius=.75rem
    style:border-width=2px
    style:padding=1ch
>
    <slot />
</div>