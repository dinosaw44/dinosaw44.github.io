<script lang=ts>
    import favicon from '$lib/common/assets/favicon.png'
    import SiteNav from '$lib/common/components/SiteNav.svelte'
    
    import GithubLink from '$lib/components/GithubLink.svelte'

    import "../../style.scss"

    let nav: SiteNav

    $: current = nav?.current
</script>

<svelte:head>
    <link rel=icon href={favicon} />
    <title>{$current ?? ""}</title>
</svelte:head>

<header 
    style:--color-emphasis=var(--color-accent)
    style:background-color=var(--color-dark)
    style:display=flex
    style:font-size=1.75rem
    style:padding=3ch
>
    <SiteNav bind:this={nav} pathnames={[ "/", "/projects" ]} />

    <span style:flex=auto />

    <nav>
        <ul>
            <li style:list-style=none>
                <GithubLink />
            </li>
        </ul>
    </nav>
</header>

<slot />