<script lang=ts>
    import { page } from "$app/stores";
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
        font-size: 1.75rem;

        a {
            color: inherit;
            text-decoration: none;

            &[aria-current=page] {
                color: var(--accent);
            }
        }

        ul, li {
            display: contents;
        }

        li {
            list-style: none;

            a {
                padding: 1rem;
                padding-bottom: 0;
                text-transform: capitalize;
                font-size: 1.5rem;

                &:hover {
                    color: var(--accent);
                    text-decoration: underline;
                }
            }
        }
    }
</style>

<header style:background-color="var(--dark)">
    <nav>
        <ul>
            {#each [ "/projects" ] as pathname}
                {@const current =  $page.url.pathname === pathname  ? 'page' : null}
                {@const label = pathname
                    .replace(/^\/+/, '')
                    .replaceAll(/[\/-]/g, ' ')
                }
                <li>
                    <a href={pathname} aria-current={current}>{label}</a>
                </li>
            {/each}
        </ul>
        <span style:flex=auto />
        <a href="https://github.com/dinosaw44" title="Github Repo">
            <FontAwesomeIcon icon={githubIcon}/>
        </a>
    </nav>
</header>

<slot />