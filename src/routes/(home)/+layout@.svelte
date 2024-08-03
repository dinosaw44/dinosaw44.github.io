<script lang=ts>
    import { NavBar } from "$lib/components/page"
</script>

<style lang=scss>
    section {
        display: flex;
        flex-direction: column;
        height: 100dvh;
    }
</style>

<section>
    
    <header>
        <NavBar main={[ "profile", "projects" ]} />
    </header>

    <slot />
</section>