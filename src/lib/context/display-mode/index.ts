import { getContext as _getContext } from 'svelte'

import {
    default as Provider,
    type DisplayMode,
    key,
} from './provider.svelte'

export default Provider

export const getContext = () => _getContext<DisplayMode>(key)