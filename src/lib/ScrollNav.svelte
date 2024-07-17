<script lang=ts>
    export let ids: string[]
</script>

<style lang=scss>
    div {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100dvh;
        width: 100%;
    }

    nav {
        position: fixed;
        padding: 4rem;
    }

    ul {
        display: contents;
        list-style: none;
    }
</style>

<div style:background-color=lightgreen>
    <nav style:background-color=lightblue>
        <ul>
            <li>
                {#each ids as id}
                    <a href={`#${id}`}>
                        {id}
                    </a>
                {/each}
            </li>
        </ul>
    </nav>
    <slot />
</div>