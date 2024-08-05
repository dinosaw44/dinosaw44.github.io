<script lang=ts>
    import { DateTime } from 'luxon'

    export let timestamp: string
    export let links: { [k: string]: string | null }

    $: a = Object.entries(links).reduce((links, [key, href]) => {
        return href === null ? links : [ ...links, {
            href,
            title: key === 'repo' ? "Github Repo" : "Homepage"
        }]
    }, [])

    
</script>

<footer>
    <slot {updated} links={a} />
</footer>