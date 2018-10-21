<template>
  <div class="notice">
    <!--总条数-->
    <div class="total-msg-info">共 <span class="total-msg">{{totalMsg}}</span> 条记录</div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        totalMsg:2,
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
</style>
