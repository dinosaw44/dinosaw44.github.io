<style lang=scss>
    $hi: color-mix(in srgb, var(--dark) 80%, white);

    div {
        border-color: var(--accent);
        width: min-content;
        
        &:hover {
            background: 
                linear-gradient(to top right, var(--dark), $hi) padding-box,
                linear-gradient(to top right, orange, yellow) border-box;
            color: var(--light);
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