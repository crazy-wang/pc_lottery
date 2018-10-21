<template>
  <div class="manage-bankcard">
    <!--银行卡-->
    <router-link class="add" to="">
      立即添加银行卡
    </router-link>
    <!--提示信息-->
    <div class="user-tip">
      <span>!</span>
      <p>温馨提示：您尚未绑定银行卡，一共可以绑定5张银行卡。</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
.manage-bankcard{
  padding: 24px;
  .add{
    display: inline-block;
    width: 249px;
    height: 140px;
    box-shadow: none;
    border: 1px dashed #ddd;
    text-align: center;
    line-height: 135px;
    font-size: 14px;
    color: #4aa9db;
    text-decoration: none;
  }
}
</style>
