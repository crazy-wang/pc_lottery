<template>
  <div class="security-center">
    <div class="safe-top">
      <div class="star">
        <i class="iconfont curr">@</i>
        <i class="iconfont curr">@</i>
        <i class="iconfont curr">@</i>
        <i class="iconfont curr">@</i>
        <i class="iconfont curr">@</i>
      </div>
      <div class="text">
        <strong class="safe-info">{{safeInfo}}</strong>
        <p class="login-token">上次登录：
          <span class="login-time">{{loginTime}}</span>
          <span class="login-city">{{loginCity}}</span>
          | 不是我登录？
          <router-link class="change-password" to="">修改密码</router-link></p>
      </div>
    </div>
    <!--内容-->
    <ul class="security-content">
      <li class="security-content-li" v-for="(item,index) in safeContent" :key="index">
        <div>
          <i class="security-content-icon"></i>
        </div>
        <div class="security-info">
          <p :class="securityContentTitle[index]?'security-content-title':'security-content-title-none'">{{item.title}}</p>
          <p class="security-content-info">{{item.content}}</p>
        </div>
        <div class="float-r">
          <span class="security-btn" v-for="itemlink in item.btnLink">
            <router-link class="security-link" :to="itemlink.link">{{itemlink.title}}</router-link>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        safeInfo:'您的账号安全级别为中，可以通过完善安全信息提高级别。',
        loginTime:'2018-10-18 12:44:55',
        loginCity:'北京,北京',
        securityContentTitle:[true,false,true,false,true],
        safeContent:[
          {
            title:'登录密码',
            content:'建议您使用字母和数字的组合、混合大小写、在组合中加入下划线等符号。',
            btnLink: [
              {
                title:'修改密码',
                link:''
              }
            ]
          },
          {
            title:'已设置安全密码',
            content:'安全密码用于提现、绑定银行卡等操作，可保障资金安全。',
            btnLink: [
              {
                title:'修改安全密码',
                link:''
              },
              {
                title:'找回安全密码',
                link:''
              }
            ]
          },
          {
            title:'未绑定密保手机:',
            content:'密保手机可以增加账户安全性，快速找回帐号密码。',
            btnLink: [
              {
                title:'绑定密保手机',
                link:''
              }
            ]
          },
          {
            title:'已设置密保问题:',
            content:'密保问题可以增加账户安全性，快速找回帐号密码。',
            btnLink: [
              {
                title:'修改密保手机',
                link:''
              }
            ]
          },
          {
            title:'未绑定密保邮箱:',
            content:'绑定邮箱可以增加账户安全性，快速找回帐号密码。',
            btnLink: [
              {
                title:'绑定密保邮箱',
                link:''
              }
            ]
          },
          ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .security-center{
    padding: 30px;
    .safe-top{
      border-bottom: 1px dotted #ddd;
      margin-bottom: 10px;
    }
    .star{
      height: 28px;
    }
    .text{
      padding: 10px 0;
    }
    .safe-info{
      font-weight: 400;
      font-size: 16px;
      color: #f06701;
    }
    .login-time,.login-city{
      margin: 0 4px;
    }
    .change-password{
      color: #009000;
      text-decoration: none;
    }
    /*主体*/
    .security-content{
      padding: 0;
      .security-content-li{
        box-sizing: border-box;
        list-style: none;
        padding: 0 15px;
        border: 1px solid #ddd;
        overflow: hidden;
        width: 100%;
        height: 52px;
        margin-bottom: 10px;
        display: table;
        border-radius: 6px;
      }
      .security-content-icon{
        display: block;
        width: 50px;
        height: 50px;
        padding: 5px;
        background: #2e4158;
        float: left;
        text-align: center;
        border-radius: 5px;
        line-height: 40px;
        color: #fff;
        font-size: 28px;
        text-shadow: 2px 2px 2px #333;
        padding-top: 3px;
        margin-top: 15px;
        box-sizing: border-box;
      }
      .security-info{
        display: inline-block;
        margin-top: 15px;
        margin-left: 15px;
      }
      .security-content-title{
        padding: 0;
        margin: 0;
        font-weight: bolder;
        font-size: 14px;
        color: #253647;
      }
      .security-btn{
        width: 160px;
        height: 80px;
        margin-top: -15px;
        display: table-cell;
        vertical-align: middle;
        .security-link{
          box-sizing: border-box;
          background: #f8f8f8;
          border: 1px solid #ccc;
          display: block;
          width: 150px;
          height: 30px;
          line-height: 30px;
          border-radius: 4px;
          box-shadow: 2px 2px 2px #ccc;
          text-align: center;
          font-size: 16px;
          color: #666;
          text-decoration: none;
        }
      }
    }
    /*共同style*/
    .login-token,.security-content-info{
      margin: 0;
      padding: 0;
      color: #666;
      font-size: 12px;
      padding-top: 10px;
    }
    .float-r{
      float: right;
    }
    /*交互样式*/
    .security-content-title-none{
      padding: 0;
      margin: 0;
      font-weight: bolder;
      font-size: 14px;
      color: #908b8b;
    }
  }
</style>
