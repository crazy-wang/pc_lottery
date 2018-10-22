<template>
  <div class="w1200-center clearf">
    <div class="nav clearf">
      <div class="nav-list">
        <ul v-for="(itemNav,indexNav) in navList">
          <h3 class="nav-list-title">{{itemNav.navTitle}}</h3>
          <!--增加导航点击事件 @click="changeNav(item.content)-->
          <li v-for="(item,index) in itemNav.navContent" :key="indexNav-index" @click="changeNav(item.content)">
            <router-link class="nav-list-link" :to="item.link">
              <span>{{item.content}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav-content">
        <div class="user-title">{{userTitle}}</div>
        <div class="user-main">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        //可复制
        userTitle:'个人信息',
        //导航-你已经写了，不用管
        navList:[
          {
            navTitle:'账号管理',
            navContent:[
              {
                content:'个人信息',
                link:'/person'
              } , {
                content:'安全中心',
                link:'/securityCenter'
              } , {
                content:'银行卡管理',
                link:'/manageBankcard'
              }],
          },
          {
            navTitle:'投注管理',
            navContent:[
              {
                content:'投注记录',
                link:'/betRecord'
              } , {
                content:'追号记录',
                link:'/seekOrder'
              }],
          },
          {
            navTitle:'资金管理',
            navContent:[
              {
                content:'交易记录',
                link:'/billRecord'
              } , {
                content:'今日盈亏',
                link:'/PLstatement'
              }],
          },
          {
            navTitle:'代理中心',
            navContent:[
              {
                content:'代理说明',
                link:'/agentIntro'
              } , {
                content:'代理报表',
                link:'/agentReport'
              }, {
                content:'下级报表',
                link:'/lowerReport'
              }, {
                content:'下级开户',
                link:'/manageInvite'
              }, {
                content:'会员管理',
                link:'/agentMember'
              }, {
                content:'投注明细',
                link:'/agentBetRecord'
              }, {
                content:'交易明细',
                link:'/agentBillRecord'
              }],
          },
          {
            navTitle:'消息管理',
            navContent:[
              {
                content:'站内信',
                link:'/letter'
              } , {
                content:'网站公告',
                link:'/notice'
              }],
          },
        ]
      }
    },
    methods:{
      changeNav(key){
        this.userTitle = key;
      }
    }
  }
</script>

<style scoped lang="scss">
  /*右侧样式,可复制*/
  .nav-content{
    float: left;
    width: 840px;
    box-sizing: border-box;
    margin-left: 10px;
    .user-title{
      margin-bottom: 10px;
      border: 1px solid #ddd;
      line-height: 32px;
      font-weight: 700;
      font-size: 14px;
      padding-left: 10px;
      color: #050505;
      background: #fbfbfb;
    }
    .user-main{
      border: 1px solid #ddd;
      min-height: 675px;
      background: #fff;
    }
  }
  /*你那边导航样式已经有了，我这就不写了*/
  .nav{
    width: 100%;
    min-width: 1000px;
    position: relative;
    right: 200px;
    .nav-list,.nav-content{
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
    }
    .nav-list-title{
      text-align: center;
      display: block;
      height: 32px;
      margin: 0;
      line-height: 32px;
      font-size: 14px;
      color: #253647;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .nav-list-link{
      color: #666;
      font-size: 12px;
      text-decoration: none;
    }
    .nav-list{
      width: 150px;
      float: left;
      border: 1px solid #ddd;
      box-sizing: border-box;
      padding: 20px 10px;
      background: #fbfbfb;
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        padding-bottom: 5px;
        border-bottom: 1px dotted #ddd;
      }
      ul:last-child{
        border-bottom: none;
      }
      li{
        list-style: none;
        padding-left: 36px;
        line-height: 25px;
      }
      h3{
        display: block;
        height: 32px;
        margin: 0;
        line-height: 32px;
        font-size: 14px;
        color: #253647;
        font-weight: 700;
        margin-bottom: 8px;
      }
    }
  }
</style>
