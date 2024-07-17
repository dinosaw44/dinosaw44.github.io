<script lang=ts context=module>
    let exists = false
</script>

<script lang=ts>
    const visibility = exists
        ? 'hidden'
        : (exists = true, null)
</script>


<style lang=scss>
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
    }
</style>

<div class=section
    style:justify-content=space-between
    style:visibility={visibility}
>
    <nav class=component>
        <a href='#profile'>Profile</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
    </nav>
    <span class=component style:aspect-ratio='1/1'/>
</div>