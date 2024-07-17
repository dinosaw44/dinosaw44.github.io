<script lang=ts>
    import { PUBLIC_GITHUB_USERNAME } from '$env/static/public'
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
    import { faGithub as githubIcon } from '@fortawesome/free-brands-svg-icons'

    import '$lib/style.scss'

    let scroll: number = 0
    let page: number = 0

    $: current = Math.round(scroll/page || 0)
    
</script>

<style lang=scss>
    :global(html) {
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
    }

    :global(body) {
        margin: 0;
    }

    @media (orientation: landscape) {
        :global(h1) {
            display: none;
        }
    }

    @media (orientation: portrait) {
        :global(h1) {
            visibility: hidden;
        }
    }

    .stack {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .component {
        border: dashed 2px;
        border-radius: .5rem;
    }

    .section {
        display: flex;
        gap: 1rem;
    }

    nav {
        padding: .5rem;
        font-size: inherit;
        
        &[role=main] {
            display: flex;
            align-items: end;
        }

        a {
            color: inherit;
            font-size: inherit;
            padding: 1rem .25rem;
            padding-bottom: 0;
            text-decoration: none;

            $emphasis: var(--color-emphasis);

            &[aria-current=page] {
                color: $emphasis;
            }

            &:hover {
                color: $emphasis;
                text-decoration: underline;
            }
        }
    }
    
    #banner {
        bottom: 0;
        max-width: 100vw;
        position: fixed;
        z-index: -1;

        img {
            opacity: 20%;
            width: 100%;
        }

        svg {
            position: absolute;
            z-index: 1;
        }
    }
</style>

<svelte:window bind:scrollY={scroll} bind:innerHeight={page} />

<header style:font-size=1.5rem>
    <div class=wrapper style:position=fixed
        style:width=100%
        style:max-width=100vw
    >
        <div class=stack 
            style:flex=auto
            style:padding=1rem
        >
            <div class=section
                style:justify-content=space-between
            >
            <nav role=main>
                {#each [ 'profile', 'projects', 'contact' ] as page, i}
                    {@const label = page[0].toUpperCase() + page.slice(1)}
                    <a 
                        href='#{page}'
                        aria-current={i === current ? 'page' : null}
                        on:click|preventDefault={({ currentTarget }) => {
                            const id = new URL(currentTarget.href).hash.replace('#', '')
                            window.scrollTo({
                                top: document.getElementById(id)?.offsetTop,
                            })
                        }}
                    >{label}</a>
                {/each}
            </nav>

            <nav style:display=flex style:font-size=150%>
                <span style:aspect-ratio='1/1' style:margin=auto style:text-align=center>
                    <a href={`https://github.com/${PUBLIC_GITHUB_USERNAME}`} title="Github Profile" target="_blank">
                        <FontAwesomeIcon icon={githubIcon}/>
                    </a>
                </span>
            </nav>
        </div>
        </div>
    </div>
</header>

<!--background-->
<div id=banner>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
            fill="var(--color-bg)"
            fill-opacity="1"
            d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,90.7C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
    </svg>

    <img src="banner.png" alt="background" />
</div>
<!--/background-->

<slot />