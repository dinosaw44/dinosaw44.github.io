<style lang=scss>
    .banner {
        bottom: 0;
        opacity: 20%;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
</style>

<main style:background-color="var(--dark)" >
    <img class="banner" src="banner.png" alt="" />
    <slot />
</main>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
        fill="var(--dark)"
        fill-opacity="1"
        d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,90.7C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    />
</svg>