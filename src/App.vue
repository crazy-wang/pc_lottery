<template>
  <div id="app">
    <head-nav></head-nav>
    <div class="main-content">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeadNav from './components/HeadNav'
  import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    HeadNav,
    Footer
  }
}
</script>

<style lang="scss">
  @import "./styles/index";
  #app {
    background-color: #e6e6e6;
    /*background-color: #fff;*/
  }
</style>
