<template>
  <div class="active w1000-center">
    <template v-for="(item, index) in activateDatas">
      <div class="floor clearf" :class="{show: presentIndex === index}" @click="showDetial(index)">
        <div class="showDetail clearf">
          <img :src="item.url" class="ImgLI floorTitleImg defaultImg">
          <div class="floorRright">
            <h2>{{item.title}}</h2>
            <p>{{item.info}}</p>
            <a href="javascript:;">
              查看详情
              <i></i>
            </a>
          </div>
        </div>
        <div class="floorDetail" v-show="presentIndex === index">
          <div class="activityCon">
            <p v-if="index === 6" style="text-align: center">
              <span style="color: #f00; background-color: #ff0;font-size: 14px!important;font-weight: bold">
                <a href="http://www.90hongbao.com">点击进入抢红包活动</a>
              </span>
            </p>
            <template v-for="(item2, index2) in item.children" v-else>
              <img :src="item2" style="width: 100%;">
            </template>
          </div>
        </div>
      </div>
      <div class="floorLine"></div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .active {
    margin-top: 15px;
    background: #eee;
    box-sizing: border-box;
    .floor {
      background: #fff;
      box-shadow: 0 4px 8px #c7c7c7;
      padding: 15px;
      .showDetail {
        cursor: pointer;
      }
      .floorDetail {
        margin-top: 15px!important;
        border-top: 2px dashed #e6e6e6;
        overflow: hidden;
        width: 970px!important;
        clear: both;
      }
      .floorTitleImg {
        float: left;
        width: 680px;
        height: 170px;
      }
      .floorRright {
        float: left;
        width: 290px;
        padding: 0 15px;
        box-sizing: border-box;
        h2 {
          font-size: 28px;
          font-weight: 100;
          margin: 0;
          color: #e4393c;
          line-height: 30px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
        }
        p {
          font-size: 14px;
          margin: 14px 0 ;
          padding: 12px 0;
          height: 72px;
          box-sizing: border-box;
        }
        a {
          font-size: 18px;
          display: block;
          line-height: 40px;
          width: 120px;
          background-color: #e4393c;
          color: #fff;
          border-radius: 4px;
          text-align: center;
          padding-right: 18px;
          box-sizing: border-box;
          i {
            position: absolute;
            margin-top: 15px;
            margin-left: 8px;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #f09394;
            transition: .1s;
          }
        }
      }
    }
    .show {
      a {
        i {
          transform: rotate(180deg);
        }
      }
    }
    .defaultImg {
      background: url(http://imagess-google.com/system/common/other/notPicture.png) 50% no-repeat!important;
      background-size: cover;
      background-color: #f3f3f3!important;
    }
    .floorLine {
      background: url(http://imagess-google.com/system/pc/activity/activityShaw.png) no-repeat;
      width: 100%;
      height: 15px;
      padding: 0 3px;
      margin-left: -3px;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        presentIndex: null,
        activateDatas: [
          {
            url: '//imagess-google.com/system/pc/activity/20160924084334202069.png?a82f',
            title: '晋级奖励',
            info: '会员每晋升一个等级，都能获得奖励，最高可达38888元！',
            children: ['../../../static/part1.png']
          },
          {
            url: '//imagess-google.com/system/pc/activity/20160924082726681336.png?a82f',
            title: '每日加奖',
            info: '每日加奖是根据会员昨日投注金额进行加奖，奖金无上限！',
            children: ['../../../static/part2.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180530025946219668.png?1ed8',
            title: '微信解除限额',
            info: '微信解除限额',
            children: ['../../../static/part3.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180406020819374830.png?1ed8',
            title: '银行卡入款彩金',
            info: '银行卡入款彩金',
            children: ['../../../static/part4-1.png', '../../../static/part4-2.png', '../../../static/part4-3.png', '../../../static/part4-4.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180331043311927387.png?1ed8',
            title: '广招代理，月赚百万',
            info: '全新代理模式，实时结算',
            children: ['../../../static/part5-1.png', '../../../static/part5-2.png', '../../../static/part5-3.png','../../../static/part5-4.png', '../../../static/part5-5.png', '../../../static/part5-6.png','../../../static/part5-7.png', '../../../static/part5-8.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180317071425432021.png?1ed8',
            title: '推荐好友',
            info: '90彩票平台老会员每推荐一位好友注册充值，您将获得￥28元彩金！ 查看详情',
            children: ['../../../static/part6.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180323043612230323.png?1ed8',
            title: '90彩票抢红包',
            info: '天天红包雨，最高8888元，还在等什么',
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180406021138675753.png?1ed8',
            title: '微信转账银行卡',
            info: '凡是使用微信转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！',
            children: ['../../../static/part8.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180705102113244649.png?1ed8',
            title: '支付宝转账银行卡',
            info: '凡是使用支付宝转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！',
            children: ['../../../static/part9.png']
          },
          {
            url: '//imagess-google.com/90cp/pc/activity/20180705101923370706.png?1ed8',
            title: '神秘彩金，不期而遇',
            info: '90彩票平台将不定期派送神秘彩金给平台的会员',
            children: ['../../../static/part10.png']
          },
        ]
      }
    },
    methods: {
      showDetial(index) {
        if (this.presentIndex === null) {
          this.presentIndex = index
        } else if (this.presentIndex === index){
          this.presentIndex = null
        } else if (this.presentIndex !== index) {
          this.presentIndex = index
        }
      }
    }
  }
</script>
