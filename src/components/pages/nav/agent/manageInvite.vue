<template>
  <div class="manage-invite">
    <el-tabs type="border-card">
      <el-tab-pane label="下级开户">
        <div class="manage-invite-lable">
          <span class="label-msg">开户类型：</span>
          <el-radio-group v-model="inviteStyle" class="item-radio">
            <el-radio label="1">代理</el-radio>
            <el-radio label="2">玩家</el-radio>
          </el-radio-group>
          <p class="label-msg">返点设置：请先为下级设置返点。
            <router-link class="invite-link" to="">点击查看返点赔率表</router-link>
          </p>
        </div>
        <div class="manage-invite-main">
          <div v-for="(item,index) in itemList" :key="index">
            <span class="invite-label">{{item.lable}}</span>
            <!--<span class="invite-label">{{item.value}}</span>-->
            <input type="number" :max="item.max" class="manage-invite-input" v-model="item.number">
            <span class="">({{item.msg}})</span>
          </div>
        </div>
        <div class="submit-btn-wrap">
          <el-button class="submitBtn" @click="submitCode">生成邀请码</el-button>
          <p class="tips">※ 温馨提示：
            <br> 1、不同的返点赔率不同，返点越高赔率越高。
            <br> 2、代理可获得的佣金等于代理自身返点与下级返点的差值，如代理自身返点6，下级返点4，代理可获得下级投注金额的2%，即下级下注100元，代理可获得2元。
            <br> 3、下级返点值设得越低，下级的赔率就越低，建议给下级设置的返点不要过低。
          </p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="邀请码管理">
        <div class="">
          <span class="label-msg">开户类型：</span>
          <el-radio-group v-model="inviteStyle2" class="item-radio">
            <el-radio label="1">代理</el-radio>
            <el-radio label="2">玩家</el-radio>
          </el-radio-group>
          <!--邀請碼表單-->
          <el-table
            :data="tableData"
            class="table-title"
            style="width: 100%;box-sizing: border-box">
            <el-table-column
              prop="code"
              label="邀请码">
            </el-table-column>
            <!--<el-table-column-->
              <!--prop=""-->
              <!--label="注册链接">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop=""-->
              <!--label="备注">-->
            <!--</el-table-column>-->
            <el-table-column
              prop="createtime"
              label="生成时间">
            </el-table-column>
            <el-table-column
              label="状态">
              <template slot-scope="scope">
                注册（{{ scope.row.count }}）
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作"
              width="200">
              <template slot-scope="scope">
                <el-button size="mini">详情</el-button>|
                <el-button size="mini">刪除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!--总条数-->
          <div class="total-msg-info">共 <span class="total-msg">{{tableData.length || 0}}</span> 条记录</div>
          <!--提示信息-->
          <div class="user-tip">
            <span>!</span>
            <p>温馨提示：“邀请码” 与 “注册链接” 功能一致，可以使用邀请码，也可以使用注册链接。</p>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  data(){
    return{
      inviteStyle:'1',
      inviteStyle2:'1',
      tableData:[],
      totalMsg:0,
      itemList:[],
    }
  },
  methods: {
	  async submitCode() {
	  	let code = {}
	  	this.itemList.forEach((v, i) => {
	  		code[v.value] = v.number
      })
	  	let params = {
	  		type: this.inviteStyle,
        ...code
      }
	  	let res = await this.axios.post('/v1/Agent/ManageInvite',params)
      console.log(res)
		  this.$alert(res.data.message, '提示', {
			  confirmButtonText: '确定',
			  type: 'success',
			  center: true
		  })
    },
    async getAgentManagelCode() {
	  	let res = await this.axios.get('/v1/Agent/ManagelCode')
      this.tableData = res.data.data
    },
    async getMyAgent() {
	  	let res = await this.axios.get('/v1/Agent/GetMy')
      let data = res.data.data
      this.itemList = [
		      {
			      lable:'时时彩',
			      value: 'ssc',
			      number: '',
			      msg:`自身返点${data.ssc}，可为下级设置返点范围0.0-8.0`,
            max: 8
		      },
		      {
			      lable:'快3',
			      value: 'k3',
			      number: '',
			      msg:`自身返点${data.k3}，可为下级设置返点范围0.0-7.5`,
            max: 7.5
		      },
		      {
			      lable:'11选5',
			      value: 'syx5',
			      number: '',
			      msg:`自身返点${data.syx5}，可为下级设置返点范围0.0-7.5`,
			      max: 7.5
		      },
		      {
			      lable:'PK10',
			      value: 'pk10',
			      number: '',
			      msg:`自身返点${data.pk10}，可为下级设置返点范围0.0-8.0`,
			      max: 8
		      }
	      ]
    }
  },
	mounted() {
		this.getMyAgent()
		this.getAgentManagelCode()
	}
}
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/main-common.scss";
  .manage-invite{
    width: 100%;
    span{
      color:#666;
      font-size:12px;
    }
    .invite-label{
      display: inline-block;
      width: 130px;
      font-size: 20px;
      text-align: left;
      padding-right: 22px;
    }
    .invite-link{
      color: #e4393c;
      font-weight: 400;
    }
    .label-msg{
      color: #333;
      font-size: 12px;
      font-weight: 700;
    }
  }
  .manage-invite-lable{
    border-bottom: 1px solid #e3e3e3;
  }
  .manage-invite-main{
    margin-top: 20px;
    padding: 10px 50px;
    .invite-label{
      line-height: 40px;
    }
    .manage-invite-input{
      width: 100px;
      margin-right: 10px;
    }
  }
  .submitBtn{
    display: inline-block;
    line-height: 30px;
    color: #fff;
    height: 30px;
    padding: 0 15px;
    border-radius: 3px;
    font-size: 14px;
    min-width: 55px;
    text-align: center;
    cursor: pointer;
    background: #2e4158;
    margin: 10px 0;
    margin-left: 200px;
  }
  .tips{
    box-sizing: border-box;
    border: 1px solid #f8e2b9;
    background: #fffdeb;
    color: #f46e00;
    padding: 0 10px;
    line-height: 24px;
    margin: 10px;
    font-size: 12px;
  }

</style>
