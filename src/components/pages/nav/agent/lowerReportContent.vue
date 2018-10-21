<template>
  <div class="bet-record">
    <!--表单-->
    <el-table
      :data="tableData"
      class="table-title"
      style="width: 100%">
      <el-table-column
        prop=""
        label="账号">
      </el-table-column>
      <el-table-column
        prop=""
        label="用户类型">
      </el-table-column>
      <el-table-column
        prop=""
        label="投注金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="中奖金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="返点金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="活动礼金">
      </el-table-column>
      <el-table-column
        prop=""
        label="投注人数">
      </el-table-column>
      <el-table-column
        prop=""
        label="盈利">
      </el-table-column>
    </el-table>
    <!--总条数-->
    <div class="total-msg-info">共 <span class="total-msg">{{totalMsg}}</span> 条记录</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        totalMsg:0
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
</style>
