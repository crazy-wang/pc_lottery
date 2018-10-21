<template>
  <div class="agent-record">
    <el-tabs type="border-card">
      <el-tab-pane label="今天">
        <agent-record-content></agent-record-content>
      </el-tab-pane>
      <el-tab-pane label="昨天">
        <agent-record-content></agent-record-content>
      </el-tab-pane>
      <el-tab-pane label="本月">
        <agent-record-content></agent-record-content>
      </el-tab-pane>
      <el-tab-pane label="上月">
        <agent-record-content></agent-record-content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import agentRecordContent from'./agentRecordContent'
  export default {
    components: { agentRecordContent },
    data(){
      return{

      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
</style>
