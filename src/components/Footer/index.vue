<template>
  <div class="footer">
    <div class="ftadCon">
      <div class="container">
        <ul class="ftad fix">
          <li>
            <a id="dafaClout" href="http://dafacloud.net" target="_blank"></a>
            <p>
              技术支持
              <i class="support-i">Technical support</i>
            </p>
            <div class="technicalSupport fix">
              <div class="technicalSupport-box">
                <img data-v-25745cf4="" src="http://imagess-google.com/test/../system/common/other/dafayun.png" alt="大发云">
                <p>
                  大发云
                  <br>
                  彩票系统平台
                </p>
                <i></i>
              </div>
              <div class="technicalSupport-box uulive">
                <img data-v-25745cf4="" src="http://imagess-google.com/test/../system/common/other/uulive.png" alt="UU直播">
                <p>
                  UU直播
                  <br>
                  彩票直播平台
                </p>
                <i></i>
              </div>
            </div>
          </li>
          <li>
            <p>
              服务体验
              <i>Service experience</i>
            </p>
            <ul class="serviceExperience">
              <li>
                昨日充值平均时间
                <p class="footBar">
                  <span style="width: 2.54902%;"></span>
                </p>
                <em>0'26</em>
                <i>秒</i>
              </li>
              <li>
                昨日提现平均时间
                <p class="footBar">
                  <span style="width: 96.8627%;"></span>
                </p>
                <em>16'28</em>
                <i>秒</i>
              </li>
            </ul>
          </li>
          <li>
            <p>
              充值方式
              <i>Recharge method</i>
            </p>
            <div class="rechargeMethod">
              <i class="wechat"></i><i class="alipay"></i><i class="cup"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container _about aboutText">
      <p class="fix">
        <a href="">关于我们</a>
        |
        <a href="">联系我们</a>
        |
        <a href="">商务合作</a>
        |
        <a href="">法律声明</a>
        |
        <a href="">隐私声明</a>
      </p>
      <p class="copyright">
        Copyright ©
        <span class="siteName">90彩票</span>
        Reserved | 18+
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    position: relative;
    top: 10px;
    margin-top: 10px;
    width: 100%;
    overflow: hidden;
    background: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 10px;
    .ftadCon {
      height: 160px;
      background-color: #f8f8f8;
      border: 1px solid #dce1e5;
      border-left: none;
      border-right: none;
      .ftad {
        background-color: #f8f8f8;
        background-size: 998px;
        padding: 20px 0;
        &>li {
          float: left;
          padding-left: 25px;
          height: 118px;
          &:first-child {
            width: 368px;
            padding-left: 0;
          }
          p {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
            i {
              font-size: 14px;
              margin-left: 10px;
              font-weight: 100;
              color: #b8b8b8;
            }
          }
          .technicalSupport {
            margin: 32px 0;
            position: relative;
            .technicalSupport-box {
              float: left;
              width: 184px;
            }
            img {
              float: left;
              width: 70px;
              height: 47px;
            }
            i {
              background: -webkit-linear-gradient(left,hsla(0,0%,97%,0),hsla(0,0%,97%,.66) 50%,hsla(0,0%,97%,0));
              position: absolute;
              overflow: hidden;
              width: 40px;
              height: 100px;
              transform: rotate(17deg);
              left: -45px;
              top: -10px;
            }
            .uulive {
              img {
                width: 68px;
                height: 63px;
                display: inline-block;
                transform:translateY(-10px);
              }
            }
            p {
              float: left;
              font-size: 14px!important;
              font-weight: 400!important;
              margin: 0 15px!important;
              line-height: 1.9;
            }
          }
          &:nth-child(2) {
            /*width: 368px;*/
            width: 342px;
          }
          &+li {
            border-left: 1px solid #ebebeb;
          }
          .serviceExperience {
            padding-top: 18px;
            li {
              line-height: 30px;
              .footBar {
                background-color: #e6e6e6;
                width: 120px;
                height: 15px;
                border-radius: 15px;
                position: relative;
                display: inline-block;
                vertical-align: sub;
                margin-left: 5px!important;
                overflow: hidden;
                span {
                  background-color: #fd5757;
                  position: absolute;
                  height: 15px;
                  border-radius: 15px 0 0 15px;
                }
              }
            }
            li:nth-child(2) {
              span {
                background-color: #4aa9db;
                color: #fff;
              }
            }
            em {
              font-size: 26px;
              margin-left: 5px;
            }
            i {
              clor: #a6a6a6;
              margn-left: 5px;
            }
          }
        }
        li:nth-child(3) {
          /*width: 264px;*/
          width: 238px;
          .rechargeMethod {
            margin: 30px 0;
            i {
              display: inline-block;
              background: url(http://imagess-google.com/system/common/other/rechargeMethod.png) no-repeat!important;
              height: 50px;
              width: 72px;
              margin-right: 11px;
            }
            .alipay {
              background-position: 0 -50px!important;
            }
            .cup {
              background-position: 0 -100px!important;
              margin-right: 0;
            }
          }
        }
      }
    }
    .container {
      height: 100px;
      width: 1000px;
      margin: 0 auto;
      box-sizing: border-box;
      /*p {*/
        /*color: #999;*/
        /*margin: 10px 5px;*/
        /*text-align: center;*/
        /*a {*/
          /*color: #333;*/
          /*padding: 0 10px;*/
          /*line-height: 1.4;*/
          /*margin: 5px 0;*/
          /*&:first-child {*/
            /*padding-left: 0;*/
          /*}*/
        /*}*/
      /*}*/
    }
    .aboutText {
      padding: 10px 0 20px;
    }
    &>div {
      &>p {
        color: #999;
        margin: 10px 5px;
        text-align: center;
        a {
          color: #333;
          padding: 0 10px;
          line-height: 1.4;
          margin: 5px 0;
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
</style>
