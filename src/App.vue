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

</style>

<script>

export default {
  name: 'App',
  components: {  },
  props: {
    
  }
}
</script>