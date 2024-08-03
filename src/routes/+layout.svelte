<script lang=ts>
    import favicon from '$lib/common/assets/favicon.png'
    import DisplayModeContext from '$lib/context/display-mode'

    import '$lib/style.scss'
</script>

<svelte:head>
    <link rel=icon href={favicon} />
</svelte:head>

<style lang=scss>
    :global(html) {
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
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

<div id=banner>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 256">
        <path
            fill="var(--color-bg)"
            fill-opacity="1"
            d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,90.7C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
    </svg>

    <img src="banner.png" alt="background" />
</div>

<DisplayModeContext>
    <slot />
</DisplayModeContext>