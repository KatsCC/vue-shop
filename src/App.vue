<template>
  <div id="app" class="drawer">
    <input type="checkbox" id="side-menu" class="drawer-toggle" />

    <section class="drawer-content">
      <NavigationBar />

      <section class="main pt-16">
        <router-view :key="$route.params.id" />
      </section>

      <SiteFooter />
    </section>

    <SideDrawer />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./views/NavigationBar.vue";
import SiteFooter from "./views/SiteFooter.vue";
import SideDrawer from "./components/common/SideDrawer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
