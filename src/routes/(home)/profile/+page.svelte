<script lang=ts>
    import TagArray from "$lib/components/TagArray.svelte"
    import OverviewSection, { Avatar, DecoratedHeading } from "./overview"
    import ShowcaseSection, { ProjectCard } from "./showcase"

    export let data

    const { avatar, tags, showcase } = data
</script>

<style lang=scss>
    main {
        display: grid;
        gap: 4ch;
        margin: auto 4ch;

        @media (hover: hover) and (aspect-ratio >= 4 / 3) {
            & {
                margin: auto;
                max-width: 80vw;
            }
        }
    }
</style>

<main>
    
    <OverviewSection {avatar} {tags}>

        <Avatar slot=avatar let:src {src} />

        <svelte:fragment slot=bio let:content>
            <hgroup style:margin-bottom=1ch style:width=fit-content>
                <h1 style:line-height=2rem>Software Engineer</h1>
                <small 
                    style:display=block
                    style:padding-left=1ch
                    style:text-align=left
                >[7+ years experience]</small>
            </hgroup>

            <p style:text-align=left>{content}</p>
        </svelte:fragment>

        <svelte:fragment slot=skills let:tags>
            <DecoratedHeading type=h2 title=Skillset />
            <TagArray {tags} color="hotpink"/>
        </svelte:fragment>
    </OverviewSection>

    <ShowcaseSection items={showcase} let:item={project}>

        <h2 slot=heading>Showcase</h2>

        <ProjectCard item={project} let:item>
            <svelte:fragment slot=header let:info>
                <hgroup style:font-size=inherit>
                    <small>[{info.type}]</small>
                    <h1 style:font-size=2em>{info.name}</h1>
                </hgroup>
            </svelte:fragment>

            {#if item.description}
                <p>{item.description}</p>
            {/if}

            <svelte:fragment slot=footer let:info>
                <br>
                <div style:text-align=right>
                    <small>Updated: {info.updated}</small>
                </div>
                <hr style:margin-top=0>
                <div style:text-align=center>
                    <TagArray tags={info.tags} />
                </div>
            </svelte:fragment>
        </ProjectCard>
    </ShowcaseSection>
</main>