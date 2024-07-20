<style lang=scss>
    article {
        &:empty {
            background: none;
            border: solid var(--color-accent) 2px;
            border-radius: 1rem;
            border-style: dashed;
            padding: 1rem;

            &::after {
                content: "Coming soon...";
                font-style: italic;
            }
        }
        
        $hi: color-mix(in srgb, var(--color-dark) 80%, white);

        background: 
            linear-gradient(to top right, var(--color-dark), $hi) padding-box,
            linear-gradient(to top right, orange, var(--color-accent)) border-box;
        border: 2px solid transparent;
        border-radius: 1rem;
        display: grid;
        flex: 1;
        padding: 1rem;

        font-size: inherit;
    }
</style>

<article>
    <slot />
</article>