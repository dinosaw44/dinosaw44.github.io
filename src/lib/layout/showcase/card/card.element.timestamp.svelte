<script lang=ts>
    import { DateTime } from 'luxon'
    export let iso: string
</script>

<small style:margin-top=auto>
    <slot datetime={DateTime.fromISO(iso)} />
</small>