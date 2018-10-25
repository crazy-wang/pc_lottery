<template>
  <div class="head-nav">
    <top-info :hideHeader="!hideHeader" />
    <top-nav v-if="!hideHeader" />
  </div>
</template>

<script>
  import TopInfo from './TopInfo'
  import TopNav from './TopNav'
  import {mapGetters} from 'vuex'
  export default {
    name: 'HeadNav',
    components: {
      TopInfo,
      TopNav
    },
    computed: {
      ...mapGetters(['hideHeader'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
