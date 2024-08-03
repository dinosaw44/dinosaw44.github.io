<script lang=ts>
    import PageSlider, { NavBar } from "$lib/components/page/index"

    import ProfilePage from './profile/+page.svelte'
    import ProjectPage from './projects/+page.svelte'
    
    export let data

    const { 
        avatar,
        projects,
        showcase,
        tags,
    } = data

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
	import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
	
    const toId = (key: string) => {
        return `#${key.toLowerCase()}` as Lowercase<string>
    }

    const scrollTo = (event: MouseEvent) => { 
        event.preventDefault()

        const target = event.target as HTMLAnchorElement
        const id = new URL(target.href).hash.replace('#', '')

        window.scrollTo({
            top: document.getElementById(id)?.offsetTop,
        })
    }

    import { writable, derived } from "svelte/store"

    const width = writable(innerWidth), height = writable(innerHeight)
    const isLandscape = derived([width, height], ([$width, $height]) => {
        return $width > $height
    })
</script>

<svelte:window
    bind:innerWidth={$width}
    bind:innerHeight={$height}
/>

<PageSlider pages={{
    profile: [ProfilePage, { avatar, showcase, tags}],
    projects: [ProjectPage, { projects }],
}}>
    <svelte:fragment let:pages let:page slot=header>
        <NavBar main={pages.map(toId)} page={toId(page)} on:click={scrollTo} />
    </svelte:fragment>

    <div slot=append let:page>
        {#if page === 'profile' && $isLandscape}
            <div
                style:border-radius=1rem
                style:margin='0 auto 3rem'
            >
                <a href=#projects on:click={scrollTo} 
                    style:all=inherit
                    style:background-color=#0007
                    style:border='1px solid #fffc'
                    style:font-size=1.25rem
                    style:padding=1rem
                    style:cursor=pointer
                    style:text-align=center
                    style:width=7rem
                >
                    <p style:font-size=inherit>See more</p>
                    <FontAwesomeIcon icon={faAnglesDown} />
                </a>
            </div>
        {/if}
    </div>
</PageSlider>