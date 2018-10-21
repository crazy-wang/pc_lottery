<template>
  <div class="letter">
    <!--总条数-->
    <div class="total-msg-info">共 <span class="total-msg">{{totalMsg}}</span> 条记录</div>
    <!--提示信息-->
    <div class="user-tip">
      <span>!</span>
      <p>温馨提示：系统将自动清空5天前的用户消息记录。</p>
    </div>
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
