<template>
  <div class="head-nav">
    <top-info />
    <top-nav />
  </div>
</template>

<script>
  import TopInfo from './TopInfo'
  import TopNav from './TopNav'
  export default {
    name: 'HeadNav',
    components: {
      TopInfo,
      TopNav
    }
  }
</script>

<style lang="scss" scoped>

</style>
