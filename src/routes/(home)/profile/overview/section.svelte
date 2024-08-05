<script lang=ts>
    import content from './content.md?raw'

    export let avatar: string | undefined
    export let tags: string[] = []
</script>

<style lang=scss>
    div {
        display: contents;
        text-align: center;

        @media (hover: hover) and (aspect-ratio >= 4 / 3) {
            & { 
                margin: auto;
                width: 80%;
            }
        }

        @media (orientation: landscape) {
            & { display: flex; }

            section:first-of-type {
                display: flex;
                text-align: left;

                span {
                    padding: 3rem;
                }
            }
        }
    }
</style>

<div>
    <section>
        <slot name=avatar src={avatar ?? ""} />
        <span>
            <slot name=bio {content} />
        </span>
    </section>

    <section>
        <slot name=skills {tags} />
    </section>
</div>