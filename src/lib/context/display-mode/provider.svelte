<script lang=ts context=module>
    import { derived, writable } from 'svelte/store'
    import { setContext } from 'svelte'
    
    import breakpoints from './_breakpoints.module.scss'

    const width = writable(innerWidth), height = writable(innerHeight)
    const orientation = derived([width, height], ([$width, $height]) => {
        return $width > $height
            ? 'landscape'
            : 'portrait'
    })
    
    const large = parseInt(breakpoints.large)

    const mode = derived([orientation, width], ([$orientation, $width]) => {
        switch (true) {
            case $orientation === 'portrait':
                return 'compact'
            case $width > large:
                return 'sparse'
            default:
                return 'dense'
        }
    })

    export type DisplayMode = typeof mode
    export const key = Symbol('layout:mode')
</script>

<script lang=ts>
    setContext(key, mode)
</script>

<svelte:window
    bind:innerWidth={$width}
    bind:innerHeight={$height}
/>

<slot />