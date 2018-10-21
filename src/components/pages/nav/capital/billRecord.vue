<template>
  <div class="bill-record-order">
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
            <el-radio label="账户明细"></el-radio>
            <el-radio label="充值记录"></el-radio>
            <el-radio label="提现记录"></el-radio>
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
      <p>温馨提示：交易记录最多只保留7天。</p>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
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

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
  .seek-order{
  .main-title-top{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    margin-bottom: 10px;
    width: 100%;
    font-size: 14px;
    color: #000;
    line-height: 50px;
    background: #f8f8f8;
  }
  li{
    text-align: center;
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block;
    width: 25%;
  }
  li:nth-child(1){
    width: 20%;
    font-weight: 700;
  }
  .money{
    color: #e4393c;
  }
  }
</style>
