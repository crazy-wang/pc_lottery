<template>
  <div class="agent-record">
    <!--搜索-->
    <el-form :model="recordForm" ref="recordForm" class="recordForm">
      <el-form-item label="" prop="" class="inline-item">
        <el-input v-model="recordForm.recordSearch" placeholder="下级报表查询"></el-input>
      </el-form-item>
      <el-button>搜索</el-button>
    </el-form>

    <!--内容-->
    <ul>
      <li v-for="(item,index) in record" :key="index" class="agent-record-li">
        <span class="money">{{item.money}}</span>
        <span class="title">{{item.title}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in record" :key="index" class="agent-record-li">
        <span class="money">{{item.money}}</span>
        <span class="title">{{item.title}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in record" :key="index" class="agent-record-li">
        <span class="money">{{item.money}}</span>
        <span class="title">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      recordForm:{
        recordSearch:''
      },
      record:[
        {
          money:'￥200',
          title:'投注金额'
        },
        {
          money:'￥100',
          title:'投注金额'
        },
        {
          money:'￥200',
          title:'投注金额'
        },
        {
          money:'￥200',
          title:'投注金额'
        },
        {
          money:'￥200',
          title:'投注金额'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
  @import "../../../../assets/css/agent-record.scss";
</style>
