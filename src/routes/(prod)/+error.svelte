<script>
	import { page } from '$app/stores'
</script>

<hgroup
	style:display=inline-block
	style:margin-left=4rem
	style:text-align=center
>
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</hgroup>