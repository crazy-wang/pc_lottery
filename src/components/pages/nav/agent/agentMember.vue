<template>
  <div class="agent-member">
    <!--表单-->
    <div class="agent-member-form">
      <el-form :model="agentForm" ref="agentForm" class="agentForm">
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">账号：</span>
          <el-input v-model="agentForm.agentUsername" placeholder="" class="item-input"></el-input>
        </el-form-item>
        <el-form-item label="" prop="" class="inline-item">
          <span class="label-msg">用户类型：</span>
          <el-select v-model="agentForm.agentOption" placeholder="全部彩票" class="item-select">
            <el-option v-for="item in agentOption" :key="item.dicCode" :label="item.nameChs" :value="item.dicCode"></el-option>
          </el-select>
        </el-form-item>
        <el-button>搜索</el-button>
      </el-form>
    </div>
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
        label="下级人数">
      </el-table-column>
      <el-table-column
        prop=""
        label="余额">
      </el-table-column>
      <el-table-column
        prop=""
        label="最后登录">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <router-link to="">1</router-link>
        <router-link to="">1</router-link>
        <router-link to="">1</router-link>
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
        totalMsg:2,
        agentForm:{
          agentUsername:'',
          agentOption:'',
        },
        agentOption:[
          {
            dicCode:'1',
            nameChs:'代理',
            value:'代理'
          },
          {
            dicCode:'2',
            nameChs:'玩家',
            value:'玩家'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
  .agent-member{
    .agent-member-form{
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 700;
      color: #000;
      text-align: left;
      background: #f8f8f8;
      border-bottom: 1px solid #e3e3e3;
      padding: 10px 10px 0 10px;
    }
    .item-input{
      width: 150px;
    }
  }
</style>
