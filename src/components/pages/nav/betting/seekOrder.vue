<template>
  <div class="seek-order">
    <!--表单-->
    <div>
      <el-form :model="seekForm" ref="seekForm" class="seekForm betForm">
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">彩种：</span>
          <el-select v-model="seekForm.seekOption" placeholder="全部彩票" class="item-select">
            <el-option v-for="item in seekOption" :key="item.dicCode" :label="item.nameChs" :value="item.dicCode"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">时间：</span>
          <el-radio-group v-model="seekForm.seekTime" class="item-radio">
            <el-radio label="今天"></el-radio>
            <el-radio label="昨天"></el-radio>
            <el-radio label="七天"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">类型：</span>
          <el-radio-group v-model="seekForm.seekStyle" class="item-radio">
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
        label="彩种">
      </el-table-column>
      <el-table-column
        prop=""
        label="起始期号">
      </el-table-column>
      <el-table-column
        prop=""
        label="已追/总期数">
      </el-table-column>
      <el-table-column
        prop=""
        label="已投/总金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="奖金状态">
      </el-table-column>
      <el-table-column
        prop=""
        label="追号时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作项">
      </el-table-column>
    </el-table>
    <!--总条数-->
    <div class="total-msg-info">共 <span class="total-msg">{{totalMsg}}</span> 条记录</div>
    <!--提示信息-->
    <div class="user-tip">
      <span>!</span>
      <p>温馨提示：投注记录最多只保留7天。</p>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        totalMsg:0,
        tableData:[],
        seekForm:{
          seekOption:'',
          seekTime:'',
          seekStyle:''
        },
        seekOption:[
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
