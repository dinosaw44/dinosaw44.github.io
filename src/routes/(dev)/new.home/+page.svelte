<script lang=ts>
    import { Profile, Projects, Contact } from '$lib/pages'
    import { SnapTo } from '$lib/components/page-view'
    import Showcase, { Card, Links, Timestamp, Footer } from '$lib/layout/showcase'

    export let data

    const { showcase, projects } = data
</script>

<SnapTo id=profile>

    <Profile />

    <Showcase items={showcase} let:item={project}>
        {@const { name, ...details } = project}

        <h2 slot=heading>Showcase</h2>

        <Card title={name}>
            {@const { description, updated, ...links } = details}
            {@const { homepage, url } = links}

            <p>{description}</p>

            <Footer>
                <Timestamp iso={updated} let:datetime={updated}>
                    Updated {updated.toRelativeCalendar()}
                </Timestamp>
                <Links {homepage} {url} />
            </Footer>
        </Card>
    </Showcase>
</SnapTo>

<SnapTo id=projects>
    <Projects />
</SnapTo>

<SnapTo id=contact>
    <Contact />
</SnapTo>