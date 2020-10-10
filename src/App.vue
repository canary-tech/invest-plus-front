<template>
  <div id="app">
    <div class="dash">
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin3" data-sidebartype="full" 
          data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

          <router-view name="logged"></router-view>
          <router-view/>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

export default {
  name: 'App',
  components: {  },
  props: {
    
  }
}
</script>