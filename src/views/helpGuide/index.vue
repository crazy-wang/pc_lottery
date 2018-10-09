<template>
  <div class="index w1000-center">
    <div class="side-bar">
      <h2>Help</h2>
      <ul class="help-menu">
        <li v-for="(item, index) in sideBarMenus">
          <span :class="{'height-light': index === presentIndex}" @click="handleHelp(index)">{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <h4 class="title">{{presentTitle}}</h4>
      <div class="main">
        <p v-for="(item, index) in containerDetials">
          {{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sideBarMenus: ['如何注册', '如何购彩', '如何充值', '如何提现', '手机如何购彩', '在线客服时间', '什么是安全密码', '每日提现次数', '如何绑定银行卡', '账户安全', '什么是可提取金额'],
        containerDetials: ['点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面',
        '按照提示，填写注册信息，即可完成注册；'],
        containerDatas: [
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面1',
            '按照提示，填写注册信息，即可完成注册1；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面2',
            '按照提示，填写注册信息，即可完成注册2；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面3',
            '按照提示，填写注册信息，即可完成注册3；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面4',
            '按照提示，填写注册信息，即可完成注册4；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面5',
            '按照提示，填写注册信息，即可完成注册5；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面6',
            '按照提示，填写注册信息，即可完成注册6；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面7',
            '按照提示，填写注册信息，即可完成注册7；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面8',
            '按照提示，填写注册信息，即可完成注册8；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面9',
            '按照提示，填写注册信息，即可完成注册9；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面10',
            '按照提示，填写注册信息，即可完成注册10；'
          ],
          [
            '点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面11',
            '按照提示，填写注册信息，即可完成注册11；'
          ]
        ],
        presentIndex: 0,
        presentTitle: '如何注册'
      }
    },
    methods: {
      handleHelp(index) {
        if (index !== this.presentIndex) {
          // switch (index) {
          //   case 0:
          //     // ...
          //         break;
          //   case 1:
          // }
          this.presentIndex = index
          this.containerDetials = this.containerDatas[index]
          this.presentTitle = this.sideBarMenus[index]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    padding-top: 15px;
    .side-bar {
      background-color: #fff;
      width: 200px;
      float: left;
      min-height: 500px;
      h2 {
        background-color: #e4393c;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        font-weight: 100;
      }
      li {
        border-top: 1px solid #eff0f1;
        line-height: 35px;
        font-size: 14px;
        span {
          display: block;
          padding-left: 25px;
          cursor: pointer;
        }
        .height-light {
          color: #e4393c;
          border-left: 3px solid;
        }
      }
    }
    .container {
      width: 780px;
      float: left;
      background-color: #fff;
      min-height: 500px;
      margin-left: 20px;
      padding: 30px;
      box-sizing: border-box;
      h4 {
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #fce1e6;
        color: #333;
      }
      .main {
        margin-top: 5px;
        p {
          font-size: 14px;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
