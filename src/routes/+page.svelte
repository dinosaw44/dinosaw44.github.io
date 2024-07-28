<script lang=ts>
    import { Contact } from '$lib/pages'
    import { SnapTo } from '$lib/components/page-view'

    import { getContext } from '$lib/context/display-mode'

    import Showcase, { Card as ShowcaseCard, Links, Timestamp, Footer } from '$lib/layout/showcase'
    import Projects, { Card as ProjectCard } from '$lib/layout/projects'

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
	import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

    export let data

    const { showcase, projects } = data

    const displayMode = getContext()
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

    #wrapper {
        padding: 4rem 4rem 0 12rem;
    }
    
    @media (max-width: 1024px) {
        #wrapper {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media (orientation: portrait) {
        #wrapper {
            padding: 0;
        }
    }
</style>

<SnapTo id=profile>

    <!--Profile & tags-->
    {#if $displayMode === 'compact'}
        <div
            style:display=flex
            style:flex=auto
            style:flex-direction=column
            style:gap=1rem
        >
            <h1 style:text-align=center style:margin=0>Profile</h1>
            <div class=component style:flex=auto />
        </div>

        <div class=component style:height=8ex />
    {:else}
        <div id=wrapper class=section style:flex=auto>
            <div
                style:display=flex
                style:flex=auto
                style:flex-direction=column
                style:gap=1rem
            >
                <div class=component style:flex=auto />
            </div>
            
            <div class=component style:width=30ch />
        </div>
    {/if}
    <!--/Profile & tags-->

    <Showcase items={showcase} let:item={project}>
        {@const { name, ...details } = project}

        <h2 slot=heading>Showcase</h2>

        <ShowcaseCard title={name}>
            {@const { description, updated, ...links } = details}
            {@const { homepage, url } = links}

            <p>{description}</p>

            <Footer>
                <Timestamp iso={updated} let:datetime={updated}>
                    Updated {updated.toRelativeCalendar()}
                </Timestamp>
                <Links {homepage} {url} />
            </Footer>
        </ShowcaseCard>
    </Showcase>

    <div 
        style:background-color=#0007
        style:border='1px solid #fffc'
        style:border-radius=1rem
        style:font-size=1.25rem
        style:padding=1rem
        style:margin='3rem auto'
        style:text-align=center
    >
        <p style:font-size=inherit>See more</p>
        <FontAwesomeIcon icon={faAnglesDown} />
    </div>
</SnapTo>

<SnapTo id=projects>
    <Projects items={projects} let:item={project}>
        {@const { name, ...details } = project}
        <ProjectCard title={name}>
            {@const { description, updated, ...links } = details}
            {@const { homepage, url } = links}

            <p>{description}</p>

            <Footer>
                <Timestamp iso={updated} let:datetime={updated}>
                    Updated {updated.toRelativeCalendar()}
                </Timestamp>
                <Links {homepage} {url} />
                <div>
                    {#each project.languages as lang}
                        <span>{lang}</span>
                    {/each}
                </div>
            </Footer>
        </ProjectCard>
    </Projects>
</SnapTo>

<SnapTo id=contact>
    <Contact />
</SnapTo>