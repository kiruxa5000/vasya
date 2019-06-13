<template>
    <div>
        <AppWrapper>
        <h1>НННadssaa-s</h1>
        <router-view></router-view>
        </AppWrapper>
    </div>
</template>

<script>
    // import HelloWorld from './HelloWorld.vue'
    import AppWrapper from "./AppWrapper";

    export default {
        name: 'app',
        components: {AppWrapper},
        // components: {
        //     HelloWorld
        // }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
