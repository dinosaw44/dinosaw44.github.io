<script lang=ts>
    import { PUBLIC_GITHUB_USERNAME } from '$env/static/public'
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
    import { faGithub as githubIcon } from '@fortawesome/free-brands-svg-icons'
</script>

<style lang=scss>
    a:hover {
        color: var(--color-emphasis) !important;
    }
</style>

<a href={`https://github.com/${PUBLIC_GITHUB_USERNAME}`} title="Github Profile" target="_blank"
    style:color=white
    style:font-size=2rem
>
    <FontAwesomeIcon icon={githubIcon}/>
</a>