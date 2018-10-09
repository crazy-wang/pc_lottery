<template>
  <div class="mobile">
    <div class="container">
      <div class="mobileSlide layer">
        <div class="animate">
          <div class="slideTxtBox">
            <div class="bd">
              <ul>
                <li v-for="(item, index) in picArr" :class="{showAuto: presentIndex === index}">
                  <img :src="item" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mobileText">
        <h1><img src="//imagess-google.com/system/App/App.png" alt=""></h1>
        <h2>m.9077790.com</h2>
        <img src="//imagess-google.com/system/pc/mobile/finger.png" class="cutFinger">
        <div id="android" class="android" title="http://180723.facloudfa.com/index.html?m.9077790.com/AppDownload">
          <img src="data:image/png;base64,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" style="display: block;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timer: null, // 定时器
        presentIndex: 0,
        picArr: [
          '//imagess-google.com/system/pc/mobile/1-home.png',
          '//imagess-google.com/system/pc/mobile/2-activity.png',
          '//imagess-google.com/system/pc/mobile/3-find.png',
          '//imagess-google.com/system/pc/mobile/4-myaccount.png',
          '//imagess-google.com/system/pc/mobile/5-grade.png'
        ]
      }
    },
    mounted() {
      this.lunboPic()
    },
    destroyed() {
      clearTimeout(this.timer)
    },
    methods: {
      lunboPic() {
        // console.log(this.presentIndex)
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.presentIndex += 1
          if (this.presentIndex > 4) {
            this.presentIndex = 0
          }
          this.lunboPic()
        }, 3000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mobile {
    background: url(http://imagess-google.com/system/pc/mobile/bg.jpg) 50% no-repeat;
    width: 100%;
    height: 655px;
    overflow: hidden;
    user-select: none;
    .container {
      position: relative;
      height: 620px;
      padding-top: 56px;
      padding-left: 162px;
      width: 1000px;
      margin: 0 auto;
      box-sizing: border-box;
      .mobileSlide {
        position: absolute;
        width: 650px;
        height: 680px;
        right: -84px;
        top: 41px;
        box-sizing: border-box;
        .slideTxtBox {
          position: absolute;
          top: 42px;
          left: 32px;
          .bd {
            li {
              transition: all 1s ease;
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
            }
            .showAuto {
              opacity: 1;
            }
          }
        }
      }
      .mobileText {
        transition-duration: 1s;
        width: 375px;
        height: 460px;
        margin-left: -153px;
        margin-top: 32px;
        z-index: 2;
        box-sizing: border-box;
        h1 {
          position: absolute;
          left: 26px;
          /*top: 91px;*/
          top: 107px;
          overflow: hidden;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
        h2 {
          font-size: 30px;
          color: #e4393c;
          user-select: text;
          position: absolute;
          top: 213px;
          left: 10px;
          margin: 0.83em 0;
        }
        .cutFinger {
          position: absolute;
          left: 467px;
          top: 227px;
        }
        .android {
          position: absolute;
          top: 364px;
          left: 16px;
          width: 120px;
          height: 120px;
          overflow: hidden;
          background: #fff;
          border: 7px solid #fff;
          box-sizing: border-box;
        }
      }
    }
  }
</style>

