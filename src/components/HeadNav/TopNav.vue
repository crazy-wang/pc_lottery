<template>
  <div class="top-nav">
    <div class="w1000-center h65 clearf">
      <div class="fl logo">
        <img src="../../../static/logo.png" alt="">
      </div>
      <div class="fr nav">
        <template v-for="(item, index) in routerMenu">
          <li>
            <!--<i class="iconfont" :class="item.icon"></i>-->
            <router-link :to="item.path">
              <i class="iconfont" :class="item.icon"></i>
              {{item.name}}
            </router-link>
          </li>
        </template>
        <span class="special-slider"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routerMenu: [
          {
            name: '首页',
            path: '/home',
            icon: 'icon-weibiaoti1'
          },
          {
            name: '购彩大厅',
            path: '/buyHall',
            icon: 'icon-weibiaoti-1'
          },
          {
            name: 'UU直播',
            path: '/UULive',
            icon: 'icon-02f'
          },
          {
            name: '活动中心',
            path: '/activity',
            icon: 'icon-gift'
          },
          {
            name: '手机购彩',
            path: '/mobile',
            icon: 'icon-icon'
          },
          {
            name: '帮助指南',
            path: '/helpGuide',
            icon: 'icon-bangzhuwenhao2'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-nav {
    background-color: #e4393c;
    height: 67px;
    border-top: 3px solid #f29c9e;
    .h65 {
      height: 62px;
      border-top: 2px solid #dd3639;
      .logo {
        img {
          margin-top: 8px;
        }
      }
      .nav {
        height: 62px;
        position: relative;
        li {
          position: relative;
          z-index: 5;
          /*display: inline-block;*/
          float: left;
          text-align: center;
          height: 62px;
          width: 126px;
          border-left: 1px solid #e85759;
          border-right: 1px solid #de2e31;
        }
        a {
          display: inline-block;
          height: 62px;
          width: 126px;
          font-size: 14px;
          color: #fff;
        }
        .iconfont {
          display: block;
          color: #f7c4c5;
          margin-top: 6px;
          margin-bottom: 1px;
          font-size: 18px;
        }
        .special-slider {
          display: block;
          width: 126px;
          height: 67px;
          background-color: #ed494c;
          transition: transform .6s cubic-bezier(.27,1.24,.49,1.15) .1s;
          position: absolute;
          left: 0;
          bottom: 0;
          border-top: 3px solid #fa7e00;
          box-shadow: 1px 0 5px rgba(0,0,0,.17);
        /*transform: translateX(0)*/
        }
      }
    }
  }
</style>


