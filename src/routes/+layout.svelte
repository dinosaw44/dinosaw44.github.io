<script lang=ts>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons"
    
    import "../style.scss"
</script>

<style lang=scss>
    header {
        padding: 3ch;
    }

    nav {
        display: flex;
        justify-content: right;

        a {
            color: inherit;
            text-decoration: none;
        }
    }
</style>

<header>
    <nav style:font-size="1.75rem">
        <a href="https://github.com/dinosaw44" title="Github Repo"><FontAwesomeIcon icon={githubIcon}/></a>
    </nav>
</header>

<slot />