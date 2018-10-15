<template>
  <div class="index registerPage">
    <h3 class="reg_tit">用户注册</h3>
    <p class="reg_small">陈冠希都已经注册了，赶紧加入吧！注册后系统将随机分配一张个性的头像</p>
    <ul class="submitContent regMain">
      <li>
        <span>邀请码：</span>
        <input type="text" class="userInput" placeholder="请输入8位数字邀请码" v-model="InviteCode">
      </li>
      <li>
        <span>账 号：</span>
        <input type="text" class="userInput" v-model="userName">
      </li>
      <li>
        <span>密 码：</span>
        <input type="password" class="userInput" v-model="pwd">
      </li>
      <li style="margin-top: 23px;">
        <span></span>
        <a href="javascript:;" class="mainColorBtn ClickShade" style="margin-right: 10px;" @click="register">注 册</a>
        <a href="javascript:;" class="mainColorBtn ClickShade" style="background-color: rgb(113, 112, 116)">重 置</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {setToken, getToken} from '../utils/auth'
  export default {
    data() {
      return {
        InviteCode: '',
        userName: '',
        pwd: ''
      }
    },
    methods: {
      async register() {
        // let params = {
        //   name: 'admin',
        //   pwd: '123'
        // }
        let params = {
          name: this.userName,
          pwd: this.pwd
        }
        let res = await this.axios.post('v1/login', params)
        console.log(res)
        if (res.data.code === 200) {
          let resData = res.data.data
          console.log('登录成功并存token')
          setToken(resData.token)
          this.$router.push({path: '/index'})
          // alert(2)
          // console.log(getToken())
        } else {
          this.$message.error('用户名或密码错误')
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .registerPage {
    width: 870px;
    min-height: 480px;
    margin: 30px auto;
    padding-top: 20px;
    border: 1px solid #e1e1e2;
    font-size: 14px;
    background: url(http://imagess-google.com/system/pc/login/loginBg.png) no-repeat 450px 220px #fff;
    a {
      color: #ff2c55;
    }
    h3 {
      font-size: 24px;
      color: #ff2c55;
      margin-bottom: 5px;
      margin-left: 30px;
    }
    p {
      margin-left: 30px;
      color: #646464;
      margin-bottom: 10px;
      margin-top: 0;
      height: 24px;
    }
    .regMain {
      margin: 0 30px;
      border-top: 1px dashed #e0e3e6;
      padding: 50px 0;
      font-size: 0;
    }
    .submitContent {
      li {
        color: #000;
        line-height: 36px;
        margin-bottom: 4px;
        &>span {
          color: #333;
          padding-right: 5px;
          margin-top: 0!important;
          display: inline-block;
          width: 144px;
          text-align: right;
          font-size: 12px;
        }
        .userInput {
          line-height: 20px;
          box-sizing: border-box;
        }
        input {
          font-size: 12px;
          height: 36px;
          width: 280px;
          border: 1px solid #e7e8e8;
          padding: 5px 5px 5px 10px;
          margin: 0;
          vertical-align: top;
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #fff inset;
          -webkit-text-fill-color: #333;
        }
        i {
          right: 15px;
        }
        .verifyRight {
          color: #71b83d;
          i {
            color: #71b83d!important;
          }
        }
        .verifyRight, .verifyWrong {
          font-style: inherit;
          margin-left: 8px;
          line-height: 35px;
          font-size: 14px;
          i {
            font-family: iconfont;
            padding: 0 5px;
            font-size: 14px;
          }
        }
        .mainColorBtn {
          width: 130px;
          line-height: 36px;
          display: inline-block;
          color: #fff!important;
          padding: 0 15px;
          border-radius: 3px;
          font-size: 14px;
          margin-right: 10px;
          min-width: 55px;
          text-align: center;
          cursor: pointer;
          background-color: #e4393c;
          margin: 10px 0;
        }
        .forgetPwd {
          font-size: 12px;
          text-decoration: underline;
          margin-left: 40px;
        }
      }
    }
  }
</style>
