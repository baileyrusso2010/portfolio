<template>
    <v-app style="background-color: #f5f0e1">
        <v-main>
            <router-view> </router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},
    data: () => ({
        drawer: false,
    }),
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}

html,
body {
    background-color: #f5f0e1;
}
</style>
