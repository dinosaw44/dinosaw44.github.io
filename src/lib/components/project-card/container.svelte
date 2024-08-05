<script lang=ts>
    import { DateTime } from "luxon"
    import Card from "$lib/layout/showcase/card/card.base.svelte"
    
    export let item: {
        name: string,
        description?: string | null,
        updated: string,
        languages: {[k: string]: number},
        topics: string[],
        repo: string,
    }

    $: [ type, id ] = item.name.split(/\.(.*)/)
    $: updated = (() => {
        const datetime = DateTime.fromISO(item.updated)
        const diff = Math.abs(datetime.diffNow('days').get('days'))
        const unit = (() => {
            switch (true) {
                case diff > 27: return (console.log('w'), 'months')
                case diff > 6: return (console.log('w'), 'weeks')
                case diff > 1: return (console.log('d'), 'days')
            }
        })()

        return datetime.toRelativeCalendar({
            unit: unit
        })
    })()

    $: tags = (() => {
        const langs = Object.keys(item.languages)
        return [ ...langs, ...item.topics ]
    })()

    const toTitleCase = (text: string) => {
        return text.replaceAll('-', ' ')
    }
</script>

<style lang=scss>
    span:empty::before {
        content: "No description...";
        font-style: italic;
        padding-left: 1ch;
    }
</style>

<a href={item.repo} target="_blank"
    style:color=inherit
    style:text-decoration=none
>
    <Card>
        {#if $$slots.header}
            <header>
                <slot name=header info={{ type, name: toTitleCase(id)}} />
            </header>
        {/if}

        <span>
            <slot item={item} />
        </span>

        {#if $$slots.footer}
            <footer>
                <slot name=footer info={{ updated, tags }} />
            </footer>
        {/if}
    </Card>
</a>