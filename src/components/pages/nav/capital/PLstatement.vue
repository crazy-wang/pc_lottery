<template>
  <div class="pl-statement">
    <div class="pl-statement-top">
      <div class="balance float-l">
        <span class="big-money">{{totalMoney}}</span>
        <p class="balance-msg">
          <span class="statement-msg"><i></i>余额</span>
          <span class="float-r">
            <router-link class="statement-btn" to="">充值</router-link>
            <router-link class="statement-btn" to="">提现</router-link>
            <router-link class="statement-btn" to="">交易记录</router-link>
          </span>
        </p>
      </div>
      <div class="plTotal float-l">
        <i class="iconfont"></i>
        <div class="balance-msg-second">
          <p class="statement-msg">盈亏总额（元）</p>
          <p class="big-money">{{winMoney}}</p>
        </div>
      </div>
      <div class="calculate float-l">
        <i class="iconfont"></i>
        <div class="balance-msg-second">
          <p class="statement-msg">盈亏计算公式</p>
          <p class="statement-import">中奖-投注+活动+返点</p>
        </div>
      </div>
    </div>
    <ul class="pl-statement-list">
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
        totalMoney:'548684.34',
        winMoney:'0.00',
        record:[
          {
            money:'0.00',
            title:'投注金额'
          },
          {
            money:'0.00',
            title:'投注金额'
          },
          {
            money:'0.00',
            title:'投注金额'
          },
          {
            money:'0.00',
            title:'投注金额'
          },
          {
            money:'0.00',
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
  .pl-statement{
    .balance,.plTotal,.calculate{
      box-sizing: border-box;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
    .pl-statement-top{
      padding: 15px;
      overflow: hidden;
    }
    .balance{
      width: 282px;
      height: 90px;
    }
    .plTotal,.calculate{
      margin-left: 15px;
      width: 239px;
      height: 90px;
    }
    .big-money{
      font-size: 30px;
      color: #e4393c;
      font-family: arial;
    }
    .balance-msg{
      margin: 10px 0;
    }
    .balance-msg-second{
      p{
        margin: 5px;
        padding-left: 75px;
      }
    }
    .statement-msg{
      font-size: 12px;
      color: #666;
    }
    .statement-import{
      font-size: 12px;
      margin-left: 10px;
      color: #e4393c;
      display: block;
      margin-top: 18px;
    }
    .statement-btn{
      color: #666;
      font-size: 12px;
      border-radius: 4px;
      border: 1px solid #ddd;
      margin: 0 3px;
      padding: 2px 10px;
      text-decoration: none;
    }
    .pl-statement-list{
      clear: both;
      margin-top: 0;
    }
    .iconfont{
      box-sizing: border-box;
      color: #fff;
      background: #fb4046;
      padding: 16px;
      font-size: 28px;
      display: block;
      height: 60px;
      width: 60px;
      border-radius: 4px;
      line-height: 28px;
      float: left;
    }
  }
</style>
