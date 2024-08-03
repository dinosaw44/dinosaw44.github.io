<script lang=ts>
    import Showcase, { Card as ShowcaseCard, Links, Timestamp, Footer } from '$lib/layout/showcase'

    import Avatar from '$lib/components/Avatar.svelte'
    import TagArray from '$lib/components/TagArray.svelte'

    import { getContext } from '$lib/context/display-mode'

    import overview from './docs/overview.md?raw'

    const displayMode = getContext()

    export let data

    const { avatar, tags, showcase } = data
</script>

<style lang=scss>
    main {
        display: grid;
        gap: 4ch;
        margin: auto 4ch;

        #overview {
            display: flex;
            margin: auto;

            hgroup {
                padding: 6ch;
            }

            @media (orientation: portrait) {
                & {
                    display: contents;

                    span {
                        margin: auto;
                    }

                    hgroup {
                        padding: unset;
                    }

                    h2 {
                        text-align: center;
                    }
                }
            }
        }

        @media (hover: hover) and (min-aspect-ratio: 4 / 3) {
            & {
                margin: auto;
                max-width: 80vw;
            }

            & #overview {
                width: 80%;
            }
        }
    }

    #skills h2 {
        &::before, &::after {
            color: var(--color-accent);
        }

        &::before {
            content: "<" / "";
        }

        &::after {
            content: " />" / "";
        }
    }
</style>

<main>
    <section id=overview>

        <span>
            <Avatar src={avatar} />
        </span>

        <hgroup>
            <h2>Software Engineer</h2>
            <p>{overview}</p>
        </hgroup>

        <section id=skills style:text-align=center>
            <h2>Skillset</h2>
            <br />
            <TagArray {tags} color="hotpink"/>
        </section>
    </section>

    <Showcase items={showcase ?? []} let:item={project}>
        {@const { name, ...details } = project}

        <h2 slot=heading style:text-align=center>Showcase</h2>

        <ShowcaseCard title={name}>
            {@const { description, updated, ...links } = details}
            {@const { site, repo } = links}

            <svelte:fragment slot=post>
                {@const tags = [...Object.keys(project.languages), ...project.topics]}

                {#if $displayMode !== 'compact'}
                    <span style:text-align=center>
                        <hr>
                        <TagArray {tags} />
                    </span>
                {/if}
            </svelte:fragment>

            <p>{description}</p>

            <Footer>
                <Timestamp iso={updated} let:datetime={updated}>
                    Updated {updated.toRelativeCalendar()}
                </Timestamp>
                <Links {site} {repo} />
            </Footer>
        </ShowcaseCard>
    </Showcase>
</main>