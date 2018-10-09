<template>
  <div class="index w1000-center">
    <div class="lotteryHead clearf">
      <div class="winnerListCon">
        <h3 class="color">风云榜</h3>
        <div class="winnerListSlide" @mouseover="clearTimer2" @mouseout="startTimer2">
          <div class="bd">
            <ul class="winnerList" style="transition: all 0.3s linear 0s" :style="{top: topNumPx}">
              <li v-for="(item, idnex) in rankingLists">
                <img :src="item.url" alt="">
                <p class="color">
                  {{item.info}}
                  <br>
                  喜中
                  <span>{{item.num}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="cardBox"></div>
      </div>
      <div class="lotterySlider defaultImg">
        <div class="slideBox" @mouseover="clearTimer" @mouseout="startTimer">
          <div class="hd">
            <ul>
              <li :class="{on: presentIndex === 0}"></li>
              <li :class="{on: presentIndex === 1}"></li>
            </ul>
          </div>
          <div class="bd">
            <div class="tempWrap">
              <div class="tempWrap" style="overflow: hidden; position: relative; width: 800px;">
                <ul style="width: 1600px; position: relative; overflow: hidden; transition: left 0.5s" :style="{left: leftNum}">
                  <li style="float: left; width: 800px;">
                    <img src="//imagess-google.com/system/pc/lottery/banner1.png?8c9c" alt="">
                  </li>
                  <li style="float: left; width: 800px;">
                    <img src="//imagess-google.com/system/pc/lottery/banner2.png?8c9c" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lotteryLine clearf">
      <i></i>
      <em></em>
    </div>
    <div class="lotteryContent slideTabBox">
      <ul class="lotteryNav hd clearf">
        <li v-for="(item, index) in lotteryNavs" :class="{on: presentNavIndex === index}" @click="toggleNav(index)">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
      <div class="bd">
        <ul class="lotteryList clearf">
          <li v-for="(item, index) in lotteryDetials" class="ClickShade">
            <a href="javascript:;">
              <i class="iconfont" :class="item.iconPic"></i>
              <div class="lotteryDetail">
                <h4>{{item.name}}</h4>
                <em>{{item.time}}</em>
              </div>
            </a>
            <div class="lotteryNow">
              <a href="javascript:;" class="now MustLogin" @click="jumpRouter(item.url)">立即投注</a>
              <a class="help">
                <i class="iconfont icon-wenhao" @click="jumpPlayIntroduce(index)"></i>
                <span class="helpTip">
                  <em>玩法说明</em>
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .index {
    margin-top: 15px;
    .lotteryHead {
      width: 100%;
      height: 238px;
      .lotterySlider {
        float: left;
        width: 80%;
        height: 100%;
        overflow: hidden;
        .slideBox {
          position: relative;
          top: 220px;
          .hd {
            box-sizing: border-box;
            text-align: right;
            padding-right: 20px;
            position: absolute;
            display: block;
            z-index: 10;
            bottom: 15px;
            width: 100%;
            li {
              width: 9px;
              height: 9px;
              border-radius: 50%;
              margin-left: 5px;
              background-color: #999;
              cursor: pointer;
              display: inline-block;
            }
            .on {
              background-color: #fff;
            }
          }
        }
      }
      .defaultImg {
        background: url(http://images.app2jsknas.com/system/pc/lottery/banner1.png?8c9c) 50% no-repeat!important;
        background-color: #f3f3f3!important;
        background-size: cover;
      }
      .winnerListCon {
        float: right;
        width: 20%;
        overflow: hidden;
        height: 100%;
        background-color: #515860;
        box-sizing: border-box;
        h3 {
          font-size: 20px;
          text-align: center;
          line-height: 45px;
          border-bottom: 1px solid #777d84;
          font-weight: 100;
        }
        .color {
          color: #fff;
        }
        .winnerListSlide {
          box-sizing: content-box;
          .bd {
            overflow: hidden;
            height: 180px;
            .winnerList {
              overflow: hidden;
              cursor: pointer;
              height: 1440px;
              position: relative;
              li {
                padding: 15px 5px 5px 8px;
                height: 40px;
                img {
                  height: 36px;
                  width: 36px;
                  border-radius: 50%;
                  float: left;
                  margin-top: 2px;
                  margin-right: 9px;
                  transition: .5s;
                }
                .color {
                  color: #fff;
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
    .lotteryLine {
      width: 100%;
      height: 15px;
      background: linear-gradient(180deg,#7a7a7a 0,#c3c4c3);
      i {
        display: block;
        float: left;
        border-right: 20px solid Transparent;
        border-top: 15px solid #e6e6e6;
      }
      em {
        display: inline-block;
        border-left: 20px solid transparent;
        border-top: 15px solid #e6e6e6;
        float: right;
      }
    }
    .lotteryContent {
      background-color: #fff;
      .lotteryNav {
        height: 40px;
        background-color: #455467;
        padding-left: 10px;
        overflow: hidden;
        li {
          float: left;
          line-height: 40px;
          &+li {
            a {
              border-left: 1px solid #74808f;
            }
          }
          a {
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            display: inline-block;
            margin: 7px 0 10px;
            width: 100px;
            text-align: center;
          }
        }
        .on {
          background-color: #fff;
          border-radius: 5px 5px 0 0;
          margin-top: 3px;
          height: 37px;
          a {
            color: #333;
            border-color: #fff;
            margin-top: 10px;
          }
        }
      }
      .lotteryList {
        padding: 8px;
        width: 100%!important;
        li {
          position: relative;
          float: left;
          width: 226px;
          height: 100px;
          box-sizing: border-box;
          border: 1px solid #e3e3e3;
          box-shadow: 1px 1px 1px #8a8a8a;
          padding:16px 20px;
          transition: .3s;
          margin: 10px;
          &:hover {
            .lotteryNow {
              display: block;
            }
          }
          i {
            font-size: 60px;
            line-height: 66px;
            width: 60px;
            display: inline-block;
          }
          // 彩票颜色
          .icon-xuan {
            color: #218ddd;
          }
          .icon-kuaisan {
            color: #e41404;
          }
          .icon-pk {
            color: #f22751;
          }
          .icon-shishicai {
            color: #f96e00;
          }
          .lotteryDetail {
            float: right;
            width: 124px;
            margin-top: 8px;
            h4 {
              text-align: center;
              font-size: 18px;
              color: #516073;
              font-weight: 100;
            }
            em {
              display: block;
              text-align: center;
              color: #777;
              font-size: 14px;
              margin: 6px 0;
            }
          }
        }
        .lotteryNow {
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(81,96,115,.9);
          width: 100%;
          height: 100%;
          text-align: center;
          display: none;
          z-index: 3;
          .now {
            border: 1px solid #dfdfdf;
            color: #dfdfdf;
            font-size: 14px;
            padding: 2px 21px;
            margin-top: 33px;
            display: inline-block;
            &:hover {
              background-color: #bd2004;
              color: #fff;
              border: 1px solid #f33;
            }
          }
          .help {
            position: absolute;
            bottom: 5px;
            right: 6px;
            border-radius: 50%;
            height: 22px;
            width: 22px;
            &:hover {
              .helpTip {
                display: block;
              }
            }
            i {
              transform: translateX(-19px) translateY(13px);
              display: block;
              color: #dfdfdf;
              font-size: 25px;
              line-height: 0;
              width: 60px;
              cursor: pointer;
            }
          }
          .helpTip {
            position: absolute;
            color: #fff;
            right: 40px;
            display: none;
            &:after {
              content: '';
              display: block;
              border: 6px dashed transparent;
              border-left-color: #bd2004;
              top: 5px;
              right: -11px;
              position: absolute;
              width: 0;
              height: 0;
            }
            em {
              padding: 0 6px;
              display: block;
              width: 64px;
              height: 22px;
              box-shadow: 1px 1px 3px rgba(0,0,0,.3);
              line-height: 22px;
              background-color: #bd2004;
              border-radius: 3px;
              box-sizing: border-box;
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
        presentIndex: 0, //控制轮播图和焦点
        leftNum: 0, //轮播图偏移距离
        topNumPx: '0px', // 右侧风云榜ul顶部距离
        topNum: 0, // 配合topNumPx
        rankingLists: [
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
        ],
        timer: null,
        timer2: null,
        lotteryNavs: ['热门', '全部', '快3', '时时彩', '快乐彩', '11选5', '低频彩'], // 导航
        presentNavIndex: 0, //当前导航
        lotteryDetials: [
            {
              iconPic: 'icon-kuaisan',
              name: '江苏快3',
              time: '全天84期',
              url: '/lottery/k3/0'
            },
            {
              iconPic: 'icon-kuaisan',
              name: '北京快3',
              time: '全天90期',
              url: '/lottery/k3/1'
            },
            {
              iconPic: 'icon-kuaisan',
              name: '湖北快3',
              time: '全天87期',
              url: '/lottery/k3/2'
            },
            {
              iconPic: 'icon-shishicai',
              name: '大发时时彩',
              time: '全天84期',
              url: '/lottery/ssc/3'
            },
            {
              iconPic: 'icon-pk',
              name: '北京PK10',
              time: '全天84期',
              url: '/lottery/pk10/0'
            },
          ],// 导航详情
        lotteryDetialAll: [
          [
            {
              iconPic: 'icon-kuaisan',
              name: '江苏快3',
              time: '全天84期',
              url: '/lottery/k3/0'
            },
            {
              iconPic: 'icon-kuaisan',
              name: '北京快3',
              time: '全天90期',
              url: '/lottery/k3/1'
            },
            {
              iconPic: 'icon-kuaisan',
              name: '湖北快3',
              time: '全天87期',
              url: '/lottery/k3/3'
            },
            {
              iconPic: 'icon-shishicai',
              name: '大发时时彩',
              time: '全天84期',
              url: '/lottery/k3/3'
            },
            {
              iconPic: 'icon-pk',
              name: '北京PK10',
              time: '全天84期',
              url: '/lottery/pk10/0'
            },
          ],
          [
            {
              iconPic: 'icon-shishicai',
              name: '重庆时时彩',
              time: '全天84期',
              url: '/lottery/ssc/0'
            },
            {
              iconPic: 'icon-shishicai',
              name: '新疆时时彩',
              time: '全天90期',
              url: '/lottery/ssc/1'
            },
            {
              iconPic: 'icon-shishicai',
              name: '天津时时彩',
              time: '全天87期',
              url: '/lottery/ssc/2'
            },
            {
              iconPic: 'icon-shishicai',
              name: '大发时时彩',
              time: '全天84期',
              url: '/lottery/ssc/3'
            },
          ],
          [
            {
              iconPic: 'icon-kuaisan',
              name: '江苏快3',
              time: '全天84期',
              url: '/lottery/k3/0'
            },
            {
              iconPic: 'icon-kuaisan',
              name: '北京快3',
              time: '全天90期',
              url: '/lottery/k3/1'
            },
            {
              iconPic: 'icon-kuaisan',
              name: '湖北快3',
              time: '全天87期',
              url: '/lottery/k3/3'
            },
          ],
          [
            {
              iconPic: 'icon-shishicai',
              name: '重庆时时彩',
              time: '全天84期',
              url: '/lottery/ssc/0'
            },
            {
              iconPic: 'icon-shishicai',
              name: '新疆时时彩',
              time: '全天90期',
              url: '/lottery/ssc/1'
            },
            {
              iconPic: 'icon-shishicai',
              name: '天津时时彩',
              time: '全天87期',
              url: '/lottery/ssc/2'
            },
            {
              iconPic: 'icon-shishicai',
              name: '大发时时彩',
              time: '全天84期',
              url: '/lottery/ssc/3'
            },
          ],
          [
            {
              iconPic: 'icon-shishicai',
              name: '重庆时时彩',
              time: '全天84期',
              url: '/lottery/ssc/0'
            },
            {
              iconPic: 'icon-shishicai',
              name: '新疆时时彩',
              time: '全天90期',
              url: '/lottery/ssc/1'
            },
            {
              iconPic: 'icon-shishicai',
              name: '天津时时彩',
              time: '全天87期',
              url: '/lottery/ssc/2'
            },
            {
              iconPic: 'icon-shishicai',
              name: '大发时时彩',
              time: '全天84期',
              url: '/lottery/ssc/3'
            },
          ],
          [
            {
              iconPic: 'icon-xuan',
              name: '广东11选5',
              time: '全天84期',
              url: '/lottery/syx5/0'
            },
            {
              iconPic: 'icon-xuan',
              name: '上海11选5',
              time: '全天90期',
              url: '/lottery/syx5/1'
            },
            {
              iconPic: 'icon-xuan',
              name: '山东11选5',
              time: '全天87期',
              url: '/lottery/syx5/2'
            },
            {
              iconPic: 'icon-xuan',
              name: '江西11选5',
              time: '全天84期',
              url: '/lottery/syx5/3'
            },
          ],
          [
            {
              iconPic: 'icon-shishicai',
              name: '重庆时时彩',
              time: '全天84期',
              url: '/lottery/ssc/0'
            },
            {
              iconPic: 'icon-shishicai',
              name: '新疆时时彩',
              time: '全天90期',
              url: '/lottery/ssc/1'
            },
            {
              iconPic: 'icon-shishicai',
              name: '天津时时彩',
              time: '全天87期',
              url: '/lottery/ssc/2'
            },
            {
              iconPic: 'icon-shishicai',
              name: '大发时时彩',
              time: '全天84期',
              url: '/lottery/ssc/3'
            },
          ]
        ]
      }
    },
    methods: {
      jumpRouter(url) {
        console.log(url)
        this.$router.push({path: `${url}`})
      },
      // 轮播图片
      lunboPic() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.presentIndex = this.presentIndex === 0 ? 1 : 0 // 保证轮播图焦点切换
          this.leftNum = this.leftNum === 0 ? '-800px' : 0 // 保证轮播图切换
          this.lunboPic() //回调定时器
        }, 3000)
      },
      // 轮播信息
      lunboInfo() {
        clearTimeout(this.timer2)
        this.timer2 = setTimeout(() => {
          if (this.topNum === -1200) {
            this.topNum = 0
          }
          this.topNum = this.topNum - 60
          this.topNumPx = this.topNum + 'px'
          this.lunboInfo() //回调定时器
        }, 2000)
      },
      // 清除轮播信息定时器
      clearTimer2() {
        clearTimeout(this.timer2)
      },
      // 清除轮播图片定时器
      clearTimer() {
        clearTimeout(this.timer)
      },
      // 开始轮播信息定时器
      startTimer2() {
        this.lunboInfo()
      },
      // 开始轮播图片定时器
      startTimer() {
        this.lunboPic()
      },
      toggleNav(index) {
        if (index === this.presentNavIndex) {
          return
        } else {
          this.presentNavIndex = index
          this.lotteryDetials = this.lotteryDetialAll[index]
        }
      },
      jumpPlayIntroduce() {
        const {href} = this.$router.resolve({
          name: 'howtoplay',
        })
        console.log(href)
        window.open(href, '_blank')
      }
    },
    mounted() {
      this.lunboPic()
      this.lunboInfo()
    },
    destroyed() {
      clearTimeout(this.timer)
      clearTimeout(this.timer2)
    }
  }
</script>
