<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home', params: {home: 'home'} }"><img src="@/assets/homeicon.svg" width="30" height="30" class="d-inline-block align-center mx-2" alt="" loading="lazy">Home</router-link>
    <router-link :to="{ name: 'categories', params: {categories: 'categories'} }">Categories</router-link>
    <router-link :to="{ name: 'login', params: {login: 'login'} }">Log in</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: {
      home: String
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:link, a:visited {
  color: #000;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
