<template>
  <div class="agent-bill-record">
    <!--搜索-->
    <div class="todayView">
      <el-form :model="recordForm" ref="recordForm" class="recordForm">
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">账号：</span>
          <el-input class="input-item" v-model="recordForm.recordSearch" placeholder="下级交易查询"></el-input>
        </el-form-item>
        <el-button>搜索</el-button>
      </el-form>
    </div>
    <!--表单-->
    <div>
      <el-form :model="billRecordForm" ref="billRecordForm" class="billRecordForm betForm">
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">摘要：</span>
          <el-select v-model="billRecordForm.billRecordOption" placeholder="全部彩票" class="item-select">
            <el-option v-for="item in billRecordOption" :key="item.dicCode" :label="item.nameChs" :value="item.dicCode"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">时间：</span>
          <el-radio-group v-model="billRecordForm.billRecordTime" class="item-radio">
            <el-radio label="今天"></el-radio>
            <el-radio label="昨天"></el-radio>
            <el-radio label="七天"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">状态：</span>
          <el-radio-group v-model="billRecordForm.billRecordStyle" class="item-radio">
            <el-radio label="全部"></el-radio>
            <el-radio label="已中奖"></el-radio>
            <el-radio label="未中奖"></el-radio>
            <el-radio label="等待开奖"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <!--表单-->
    <el-table
      :data="tableData"
      class="table-title"
      style="width: 100%">
      <el-table-column
        prop=""
        label="流水号">
      </el-table-column>
      <el-table-column
        prop=""
        label="时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="摘要">
      </el-table-column>
      <el-table-column
        prop=""
        label="收入金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="支出金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="可用余额">
      </el-table-column>
      <el-table-column
        prop=""
        label="备注">
      </el-table-column>
    </el-table>
    <!--总条数-->
    <div class="total-msg-info">共 <span class="total-msg">{{totalMsg}}</span> 条记录</div>
    <!--提示信息-->
    <div class="user-tip">
      <span>!</span>
      <p>温馨提示：交易明细最多只保留7天。</p>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        recordForm:{
          recordSearch:''
        },
        totalMsg:0,
        tableData:[],
        billRecordForm:{
          billRecordOption:'',
          billRecordTime:'',
          billRecordStyle:''
        },
        billRecordOption:[
          {
            dicCode:'1',
            nameChs:'福彩3D',
            value:'福彩3D'
          },
          {
            dicCode:'2',
            nameChs:'福彩2D',
            value:'福彩2D'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="sss">
  @import "../../../../assets/css/main-common.scss";
  .agent-bill-record{
    .recordForm{
      .input-item{
        width: 150px;
      }
      .label-msg{
        font-weight: 700;
      }
    }
    .todayView{
       width: 100%;
       font-size: 14px;
       color: #000;
       line-height: 50px;
       background: #f8f8f8;
       margin-bottom: 10px;
     }
  }
</style>
