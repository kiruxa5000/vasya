<template>
    <div class="app-wrapper">
        <TopNavbar/>
        <slot></slot>
    </div>
</template>

<script>
    import TopNavbar from "./TopNavbar";
    export default {
        name: "AppWrapper",
        components: {TopNavbar}
    }
</script>

<style scoped>
    .app-wrapper {
        background: aliceblue;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>