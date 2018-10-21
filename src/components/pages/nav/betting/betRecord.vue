<template>
  <div class="bet-record">
    <ul class="main-title-top">
      <li class="title">今日概况</li>
      <li class="">投注金额：<span class="money">{{bettingMoney}}</span>元</li>
      <li class="">中奖金额：<span class="money">{{winMoney}}</span>元</li>
      <li class="">盈利：<span class="money">{{profitMoney}}</span>元</li>
    </ul>
    <!--表单-->
    <div>
      <el-form :model="betForm" ref="betForm" class="betForm">
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">彩种：</span>
          <el-select v-model="betForm.betOption" placeholder="全部彩票" class="item-select">
            <el-option v-for="item in betOption" :key="item.dicCode" :label="item.nameChs" :value="item.dicCode"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">时间：</span>
          <el-radio-group v-model="betForm.betTime" class="item-radio">
            <el-radio label="今天"></el-radio>
            <el-radio label="昨天"></el-radio>
            <el-radio label="七天"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">类型：</span>
          <el-radio-group v-model="betForm.betStyle" class="item-radio">
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
      style="width: 100%; font-size:12px">
      <el-table-column
        prop=""
        label="彩种">
      </el-table-column>
      <el-table-column
        prop=""
        label="期号">
      </el-table-column>
      <el-table-column
        prop=""
        label="投注内容">
      </el-table-column>
      <el-table-column
        prop=""
        label="开奖号码">
      </el-table-column>
      <el-table-column
        prop=""
        label="开奖号码">
      </el-table-column>
      <el-table-column
        prop=""
        label="奖金状态">
      </el-table-column>
      <el-table-column
        prop=""
        label="投注时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作项">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bettingMoney:'0.00',
      winMoney:'0.00',
      profitMoney:'0.00',
      tableData:[],
      betForm:{
        betOption:'',
        betTime:'',
        betStyle:''
      },
      betOption:[
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
.bet-record{
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
