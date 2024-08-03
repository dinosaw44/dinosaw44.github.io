<script lang=ts>
    import { type ComponentType } from "svelte" 
    export let pages: { [id: Lowercase<string>]: [ComponentType, unknown] }

    let scroll: number = 0
    let page: number = 0

    $: sections = Object.keys(pages) as unknown as (keyof typeof pages)[]
    $: current = sections[Math.round(scroll/page || 0)]

    let header: HTMLElement

    const template = (placeholder: HTMLElement, _: typeof header) => {
        return {
            update(target: Node) {
                target = target.cloneNode(true)
                placeholder.replaceWith(target.cloneNode(true))
            }
        }
    }
</script>

<style lang=scss>
    header {
        position: fixed;
        width: 100%;
        z-index: 1;

        $bg: var(--color-dark);
        $offset: 0%;

        &::before {
            content: "\00A0";
            background: $bg;
            position: absolute;
            width: 100%;
            height: $offset;
            z-index: -1;
        }

        &::after {
            content: "\00A0";
            background: linear-gradient($bg 25%, transparent);
            position: absolute;
            top: $offset;
            width: 100%;
            height: 150%;
            z-index: -1;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;

        @media (hover: hover) {
            scroll-snap-align: start;
        }

        :global(header) {
            position: unset;
            visibility: hidden;
        }
    }
</style>

<svelte:window bind:scrollY={scroll} bind:innerHeight={page} />

<section>
    <header bind:this={header}>
        <slot name=header pages={sections} page={current} />
    </header>

    {#each Object.entries(pages) as [ page, [PageView, data] ], index}
        <div id={page} aria-hidden={page === current ? null : true}>
            <x-placeholder use:template={header} aria-hidden />

            <PageView {data} />

            <slot name=append {page} />

            {#if $$slots.footer && index === sections.length - 1}
                <footer>
                    <slot name=footer />
                </footer>
            {/if}
        </div>
    {/each}
</section>