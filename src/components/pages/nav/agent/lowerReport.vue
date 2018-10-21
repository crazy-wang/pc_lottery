<template>
  <div class="lower-report">
    <el-tabs type="border-card">
      <el-tab-pane label="今天">
        <lower-report-content></lower-report-content>
      </el-tab-pane>
      <el-tab-pane label="昨天">
        <lower-report-content></lower-report-content>
      </el-tab-pane>
      <el-tab-pane label="本月">
        <lower-report-content></lower-report-content>
      </el-tab-pane>
      <el-tab-pane label="上个月">
        <lower-report-content></lower-report-content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import lowerReportContent from'./lowerReportContent'
  export default {
    components: { lowerReportContent },
    data(){
      return{

      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
</style>
