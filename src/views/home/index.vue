<template>
  <div class="index w1000-center clearf">
    <div class="wrapL">
      <div class="rowR myCol">
        <ul class="subnav">
          <li v-for="(item, index) in wrapLMenus">
            <a class="MustLogin" @click="jumpLottery(index)">
              <i class="iconfont icon-kuaisan"></i>
              <span class="sortName">{{item.name}}</span>
              <span class="des">{{item.time}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapC">
      <div class="banner defaultImg">
        <div class="slideBox">
          <div class="hd">
            <ul>
              <li :class="{on: currentIndex === 0}"></li>
              <li :class="{on: currentIndex === 1}"></li>
              <li :class="{on: currentIndex === 2}"></li>
              <li :class="{on: currentIndex === 3}"></li>
            </ul>
          </div>
          <div class="bd">
            <div class="tempWrap">
              <div class="tempWrap" style="overflow: hidden; position: relative; width: 488px;">
                <ul style="width: 1952px; position: relative; overflow: hidden; transition: left 0.5s"
                    :style="{left: leftNumPx}">
                  <li style="float: left; width: 488px;" v-for="item in bannerDatas">
                    <a :href="item.router">
                      <img :src="item.imgUrl" alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="autoTab">
        <div class="slideTxtBox">
          <div class="hd">
            <ul class="clearf">
              <li v-for="(item, index) in autoTabName" :class="{on: autoTabIndex === index}" @click="toggleNav(index)">{{item}}</li>
            </ul>
          </div>
          <div class="bd">
            <ul :class="{block: autoTabIndex === 0}">
              <li class="jsk3">
                <div class="dice">
                  <span style="background-position: 0 -61px;"></span>
                  <i>+</i>
                  <span style="background-position: 0 -183px;"></span>
                  <i>+</i>
                  <span style="background-position: 0 -244px;"></span>
                  <i>=</i>
                  <em>11</em>
                </div>
              </li>
              <li class="text">
                <p>
                  <span>
                    当前期：第
                    <i>20180731076</i>
                    期
                  </span>
                  <span>
                    开奖号码：
                    <i>2,4,5</i>
                  </span>
                  <span>
                    和值：
                    <i>11</i>
                  </span>
                  <span>
                    形态：
                    <a href="">大</a>
                    <a href="">单</a>
                  </span>
                </p>
              </li>
            </ul>
            <ul :class="{block: autoTabIndex === 1}">
              <li class="cqssc clearf">
                <div class="number">
                  <em>8</em>
                  <em>5</em>
                  <em>7</em>
                  <em>5</em>
                  <em>5</em>
                </div>
                <a href="javascript:;" class="mainColorBtn MustLogin">立即投注</a>
              </li>
              <li class="text">
                <p>
                  <span>
                    当前期：第
                    <i>20180804023</i>
                    期
                  </span>
                  <span>
                    开奖号码：
                    <i>8,5,7,5,5</i>
                  </span>
                </p>
              </li>
            </ul>
            <ul :class="{block: autoTabIndex === 2}">
              <li class="cqssc clearf">
                <div class="number">
                  <em>8</em>
                  <em>5</em>
                  <em>7</em>
                  <em>5</em>
                  <em>5</em>
                </div>
                <a href="javascript:;" class="mainColorBtn MustLogin">立即投注</a>
              </li>
              <li class="text">
                <p>
                  <span>
                    当前期：第
                    <i>20180804023</i>
                    期
                  </span>
                  <span>
                    开奖号码：
                    <i>8,5,7,5,5</i>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapR">
      <div class="logined">
        <h3>
          <i class="iconfont icon-ren"></i>
          <b>cds0715</b>
        </h3>
        <a class="loginOut">
          <em>退出</em>
          <i class="iconfont icon-guanbi"></i>
        </a>
      </div>
      <div class="slide">
        <h6>昨日盈利榜</h6>
        <table class="yestodayWinning" style="position: relative;">
          <tr v-for="(item, index) in profitList">
            <td>
              <img :src="item.profilePhoto" alt="">
              <p>
                账号昵称：
                <span>{{item.nickname}}</span>
                <br>
                昨日盈利：
                <i>{{item.num}}</i>
              </p>
            </td>
            <td class="tt">
              <span>{{index + 1}}</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="winningList">
        <h6>中奖信息</h6>
        <div class="winnerListSlide" style="box-sizing: content-box">
          <div class="bd">
            <ul class="winnerList" style="cursor: pointer; position: relative; transition: all 0.3s linear" :style="{top: winnerInfoNumPx}">
              <li v-for="(item, index) in winnerInfo">
                <img :src="item.url" alt="">
                <p>
                  {{item.name}}
                  <br>
                  喜中
                  <span> {{item.money}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .index {
    padding-top: 15px;
    .wrapL {
      width: 232px;
      background-color: #fffdf3;
      border: 1px solid #e6c9a0;
      border-top: 3px solid #edc9a0;
      float: left;
      height: 468px;
      box-sizing: border-box;
      .subnav {
        li {
          height: 46px;
          line-height: 46px;
          border-bottom: 1px dashed #ddd;
          padding: 0 8px;
          box-sizing: border-box;
          cursor: pointer;
          &:last-child {
            border: none;
          }
          &:hover {
            background-color: #fff9dd;
            i {
              transform: rotate(360deg);
              -webkit-transition: -webkit-transform 1s linear;
              transition: transform 0.3s linear;
            }
          }
          a {
            display: block;
            height: 100%;
            i {
              font-size: 36px;
              margin: 0 5px;
              width: 38px;
              height: 38px;
              display: inline-block;
              color: #e41404;
              &:before {
                font-size: 40px;
                transform: translate(1px, -1px);
                /*text-shadow: 0 4px 5px rgba(228,20,4,.42);*/
              }
            }
            .sortName, .des {
              margin-right: 5px;
              margin-bottom: 10px;
              vertical-align: top;
              font-size: 14px;
              color: #333;
              font-weight: 700;
            }
            .des {
              color: #999;
              font-size: 12px;
              font-weight: 100;
            }
          }
        }
      }
    }
    .wrapC {
      width: 488px;
      margin-left: 13px;
      float: left;
      .banner {
        height: 251px;
        overflow: hidden;
        background: #eee;
      }
      .defaultImg {
        background: url(http://images.app2jsknas.com/90cp/pc/banner/banner1.png?023d) 50% no-repeat !important;
        background-color: #f3f3f3 !important;
      }
      .slideBox {
        position: relative;
        top: 240px;
        .hd {
          position: absolute;
          display: block;
          z-index: 10;
          bottom: 15px;
          width: 100%;
          text-align: center;
          li {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: #999;
            cursor: pointer;
            display: inline-block;
            margin-left: 5px;
            &:first-child {
              margin-left: 0;
            }
          }
          .on {
            background-color: #fff;
          }
        }
        .bd {
        }
      }
      .autoTab {
        height: 204px;
        margin-top: 13px;
        border: 1px solid #d7e2f7;
        box-sizing: border-box;
        background-color: #fff;
        .hd {
          li {
            width: 33.3333%;
            text-align: center;
            line-height: 30px;
            background-color: #edf7ff;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #d7e2f7;
            box-sizing: border-box;
            cursor: pointer;
            float: left;
            & + li {
              border-left: 1px solid #d7e2f7;
            }
          }
          .on {
            border-top: 2px solid #e4393c;
            background-color: #fff;
            margin-top: -1px;
            border-bottom: none;
          }
        }
        .bd {
          text-align: center;
          overflow: hidden;
          ul {
            display: none;
          }
          .block {
            display: block;
          }
          .dice {
            margin-top: 32px;
            span {
              display: inline-block;
              background: url(http://imagess-google.com/system/pc/k3/open_num.png);
              width: 60px;
              height: 60px;
              vertical-align: middle;
            }
            i {
              font-size: 25px;
              vertical-align: middle;
              color: #999;
              margin: 10px;

            }
            em {
              font-size: 25px;
              color: #333;
              vertical-align: middle;
              margin: 3px;
            }
          }
          .text {
            margin-top: 20px;
            p {
              text-align: center;
            }
            span {
              margin-right: 14px;
              &:last-child {
                margin: 0;
              }
            }
            i {
              color: #f33;
              margin: 0 3px;
            }
            a {
              display: inline-block;
              width: 18px;
              height: 18px;
              line-height: 18px;
              color: #fff;
              background: #ff9726;
              border-radius: 2px;
              margin-right: 6px;
              & + a {
                background: #5691d7;
              }
            }
          }
          .cqssc {
            .a, .number, img {
              float: left;
            }
            .number {
              padding-top: 45px;
              padding-left: 40px;
              em {
                border: 1px solid #b13032;
                background: linear-gradient(180deg,#e46062 2%,#c72c2e);
                font-size: 30px;
                color: #fff;
                border-radius: 30px;
                width: 41px;
                height: 41px;
                display: inline-block;
                line-height: 41px;
                text-align: center;
                font-weight: 100;
                margin: 0 5px;
              }
            }
            a {
              margin-top: 51px!important;
              margin-left: 32px!important;
            }
            .mainColorBtn {
              display: inline-block;
              line-height: 30px;
              color: #fff!important;
              padding: 0 15px;
              border-radius: 3px;
              font-size: 14px;
              min-width: 55px;
              text-align: center;
              cursor: pointer;
              background: #e4393c;
              margin: 10px 0;
            }
          }
        }
      }
    }
    .wrapR {
      float: left;
      width: 252px;
      height: 472px;
      margin-left: 13px;
      .logined {
        padding: 0 15px;
        height: 44px;
        background-color: #fffdf3;
        border-radius: 2px;
        border: 1px solid #ebd4b3;
        border-top: 3px solid #ebd4b3;
        position: relative;
        box-sizing: border-box;
        h3 {
          line-height: 26px;
          text-align: center;
          margin: 7px;
          i {
            color: #e4393c;
            font-size: 16px;
          }
          b {
            color: #36c;
          }
        }
        .loginOut {
          width: 45px;
          height: 15px;
          display: inline-block;
          cursor: pointer;
          border: none;
          position: absolute;
          z-index: 2;
          top: 6px;
          right: 10px;
          line-height: 15px;
          padding-left: 5px;
          border-radius: 2px;
          &:hover {
            background-color: #ccc;
          }
          em {
            color: #fffdf3;
          }
          i {
            font-size: 8px;
          }
        }
      }
      .slide {
        border: 1px solid #dce1e5;
        margin-top: 13px;
        background-color: #fff;
        h6 {
          padding: 0 8px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }
        .yestodayWinning {
          margin: 5px 0;
          height: 152px;
          border-collapse: collapse;
          border-spacing: 0;
          tr {
            &:first-child {
              .tt {
                span {
                  background: radial-gradient(circle at 25px 25px, #c12f33, #ca9293);
                  color: #fff;
                  border-radius: 50%;
                  text-align: center;
                  line-height: 25px;
                }
              }
            }
            height: 50px;
            vertical-align: top;
            border-bottom: 1px dashed #ccc;
            &:last-child {
              border-bottom: none;
              .tt {
                span {
                  background: radial-gradient(circle at 25px 25px,#c57532,#f8a968);
                }
              }
            }
            td {
              text-align: left;
              padding: 7px 15px;
              padding-right: 12px;
              border-right: none;
              &:first-child {
                width: 280px;
              }
              img {
                height: 36px;
                width: 36px;
                float: left;
                border-radius: 50%;
                margin-right: 9px;
                transition: .5s;
              }
              p {
                margin-top: 0;
                line-height: 1.7;
                height: 36px;
                i {
                  color: #f33;
                }
              }
              &:nth-child(2) {
                color: #cc0a2f;
                width: 40px;
                text-align: center;
                span {
                  display: inline-block;
                  width: 25px;
                  height: 25px;
                  margin: 0 auto;
                  color: #555;
                }
              }
            }
          }
          .tt {
            &:nth-child(2) {
              span {
                background: radial-gradient(circle at 25px 25px, #2b82cc, #53b0fe);
                color: #fff;
                border-radius: 50%;
                text-align: center;
                line-height: 25px;
              }
            }
          }
        }
      }
      .winningList {
        margin-top: 13px;
        border: 1px solid #dce1e5;
        height: 204px;
        overflow: hidden;
        box-sizing: border-box;
        background-color: #fff;
        h6 {
          padding: 0 8px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }
        .bd {
          overflow: hidden;
          .winnerList {
            margin-top: -7px!important;
            li {
              padding: 6px 15px;
              height: 40px;
              img {
                height: 36px;
                width: 36px;
                float: left;
                border-radius: 50%;
                margin-top: 2px;
                margin-right: 9px;
                transition: .5s;
              }
              p {
                float: left;
                line-height: 1.7;
                span {
                  color: #f63745;
                  margin: 0 5px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        wrapLMenus: [
          {
            name: '江苏快3',
            time: '全天82期',
            id: 1
          },
          {
            name: '北京快3',
            time: '全天89期',
            di: 2
          },
          {
            name: '湖北快3',
            time: '全天78期',
          },
          {
            name: '甘肃快3',
            time: '全天82期',
          },
          {
            name: '安徽快3',
            time: '全天82期',
          },
          {
            name: '广西快3',
            time: '全天82期',
          },
          {
            name: '河北快3',
            time: '全天82期',
          },
          {
            name: '上海快3',
            time: '全天82期',
          },
          {
            name: '大发快3',
            time: '全天82期',
          },
          {
            name: '贵州快3',
            time: '全天82期',
          },
        ],
        currentIndex: 0, // 焦点图当前索引
        autoTabIndex: 0,
        bannerDatas: [
          {
            router: 'http://www.90hongbao.com/',
            imgUrl: '//imagess-google.com/90cp/pc/banner/banner1.png?20c0',
          },
          {
            router: '/activity',
            imgUrl: '//imagess-google.com/90cp/pc/banner/banner2.png?20c0',
          },
          {
            router: '/mobile',
            imgUrl: '//imagess-google.com/90cp/pc/banner/banner3.png?20c0',
          },
          {
            router: '/activity',
            imgUrl: '//imagess-google.com/90cp/pc/banner/banner4.png?20c0',
          }
        ],
        autoTabName: ['江苏快3', '重庆时时彩', '上海11选5'],
        profitList: [
          {
            profilePhoto: '//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg',
            nickname: '大发',
            num: 1550789
          },
          {
            profilePhoto: '//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg',
            nickname: '大发',
            num: 1550789
          },
          {
            profilePhoto: '//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg',
            nickname: '大发',
            num: 1550789
          }
        ],
        winnerInfoNumPx: '15px', // 中奖信息top值
        winnerInfoNum: 15, // 中奖信息top值
        winnerInfo: [
          {
            url: '//imagess-google.com/system/common/headimg/5f6d71880b2ad1e0.jpg',
            name: '大石头',
            money: '￥21.77'
          },
          {
            url: '//imagess-google.com/system/common/headimg/5f6d71880b2ad1e0.jpg',
            name: '大石头',
            money: '￥21.77'
          },
          {
            url: '//imagess-google.com/system/common/headimg/5f6d71880b2ad1e0.jpg',
            name: '大石头',
            money: '￥21.77'
          },
          {
            url: '//imagess-google.com/system/common/headimg/5f6d71880b2ad1e0.jpg',
            name: '大石头',
            money: '￥21.77'
          },
          {
            url: '//imagess-google.com/system/common/headimg/5f6d71880b2ad1e0.jpg',
            name: '大石头',
            money: '￥21.77'
          },
          {
            url: '//imagess-google.com/system/common/headimg/5f6d71880b2ad1e0.jpg',
            name: '大石头',
            money: '￥21.77'
          },
        ],
        leftNumPx: '0px',
        leftNum: 0,
        timer: null,
        timer2: null
      }
    },
    mounted() {
      this.lunboPic()
      this.lunboInfo()
    },
    destroyed() {
      clearTimeout(this.timer)
      clearTimeout(this.timer2)
    },
    methods: {
      lunboPic() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          if(this.currentIndex < 3) {
            this.currentIndex += 1
            this.leftNum -= 488
            this.leftNumPx = this.leftNum + 'px'
          } else {
            this.currentIndex = 0
            this.leftNum = 0
            this.leftNumPx = '0px'
          }
          this.lunboPic() //回调定时器
        }, 3000)
      },
      lunboInfo() {
        clearTimeout(this.timer2)
        this.timer2 = setTimeout(() => {
          if(this.winnerInfoNum > -1025) {
            this.winnerInfoNum -= 52
            this.winnerInfoNumPx = this.winnerInfoNum + 'px'
          } else {
            this.leftNum = 15
            this.leftNumPx = '15px'
          }
          this.lunboInfo() //回调定时器
        }, 3000)
      },
      toggleNav(index) {
        if(index === this.autoTabIndex) {
          return
        } else {
          this.autoTabIndex = index
        }
      },
      jumpLottery(index) {
        this.$router.push({path: `/lottery/k3/${index}`})
      }
    }
  }
</script>
