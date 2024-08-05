<script lang=ts>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { UnorderedList as List } from "@dinosaw44/ui/src/list"

    import { page as current } from "$app/stores"
    import { faGithub as profileLinkIcon} from "@fortawesome/free-brands-svg-icons"

    type Link = Lowercase<string>

    export let main: Link[]
    export let page: Link = $current.url.pathname as Lowercase<string>
</script>

<style lang=scss>
    div, nav {
        display: flex;
    }

    div {
        justify-content: space-between;
        padding: 1ch 2ch;
    }

    a {
        color: inherit;
        font-size: 2rem;
        text-decoration: none;
        text-transform: capitalize;

        &[aria-current] {
            color: var(--color-accent);
        }

        @media (hover: hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }
</style>

<div>
    <nav role=main style:gap=2ch>
        <List items={main} let:item={href}>
            {@const label = href.replaceAll(/^\W+/g, '')}
            <a on:click {href} aria-current={href === page ? 'page' : null}>{label}</a>
        </List>
    </nav>

    <nav>
        <a href=https://github.com/dinosaw44 title="Github Profile" target="_blank">
            <FontAwesomeIcon icon={profileLinkIcon}/>
        </a>
    </nav>
</div>