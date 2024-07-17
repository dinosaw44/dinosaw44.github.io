<script lang=ts>
    import { Profile, Projects, Contact } from '$lib/pages'
    import { SnapTo } from '$lib/components/page-view'
</script>

<SnapTo id=profile>
    <Profile />
</SnapTo>

<SnapTo id=projects>
    <Projects />
</SnapTo>

<SnapTo id=contact>
    <Contact />
</SnapTo>