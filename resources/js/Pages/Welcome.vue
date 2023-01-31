<template>
    <h1>{{ title }}</h1>
    Link desta página: <Link :href="route('welcome')">Home</Link>
</template>

<script>
import { Link } from '@inertiajs/vue3' 
export default {
    components: {
        Link
    },
    props: ["title"]
}
</script>

<style>

</style>