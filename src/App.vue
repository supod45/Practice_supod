<template>
  <div id="app">
    <router-link to="/">home</router-link> |
    <router-link to="/V-model">V-model</router-link> |
    <router-link to="/V-on">V-on</router-link> |
    <router-link to="/V-bind">V-bind</router-link> |
    <router-link to="/prop">prop</router-link>
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
