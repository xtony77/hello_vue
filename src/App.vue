<template>
    <div id="app">
        <div
            class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">demo</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <router-link class="p-2 text-dark" to="/">Home</router-link>
            </nav>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Hello Vue',
            titleTemplate: '%s - xtony77',
            htmlAttrs: {
                lang: 'tw',
                amp: true
            },
            meta: [
                { name: 'author', content: 'xtony77' },
                { name: 'copyright', content: 'xtony77' },
                { name: 'description', content: 'Hello Vue - xtony77' },
            ]
        }
    }
</script>