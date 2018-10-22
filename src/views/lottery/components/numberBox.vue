<template>
  <div class="numberBox clearfix">
    <div class="content">
      <div class="cardContent">
        <table>
          <tr v-for="(item, index) in lotteryList">
            <td>[{{item.type + ',' + item.detial}}]</td>
            <td>{{selectedDataToStr(item.playBoardTypeValue, item.selectedNum)}}</td>
            <td>{{item.bittingNumber}}注</td>
            <td>{{item.betMul}}倍</td>
            <td>{{item.YJFmul == 1 ? '元' : item.YJFmul == 0.1 ? '角' : '分'}}</td>
            <td>可中金额{{(19.60 * item.YJFmul).toFixed(2)}}</td>
            <td style="color: #ff9600;cursor: pointer;" @click="deleteItem ">删除</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="footerBar">
      <div class="left">
        <span>方案{{allNumAndPrice.num}}注，金额{{allNumAndPrice.price}}元</span>
      </div>
      <div class="right" @click="lotteryOrderAdd">马上投注</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import playMethods from '../../../utils/playMethods'
  import {selectedDataToStr} from '../../../utils/auth'
  import {addition} from '../../../utils/computePriceAndNumber'
  import {tagToPlayMap} from './tagToPlayMap'

  export default {
    name: 'ssc',
    components: {
    },
    data() {
      return {
        tagToPlayMap: tagToPlayMap, //映射关系
        playBoardData: [], //选中的面板数据
        tagSelectedData: [], //选中的标签
        selectedNumberData: [], //选中的号码
        selectedInfo: {},
        playBoardTypeValue: '',//页面是选择||输入
        choseType: 1,
        checkedList: [],
        betTopDetailShow: false,
        betTopDetailSelected: 1,
        arae: [
          {value: 1, label: '重庆'},
          {value: 2, label: '新疆'},
          {value: 3, label: '天津'},
          {value: 4, label: '大发'}
        ],
        areaShow: false,
        araeSelected: {value: 1, label: '重庆'},
      }
    },
    computed: {
      ...mapGetters([
        'BetFilterDataFlag',
        'PlaySortMore',
        'lotteryList'
      ]),
      allNumAndPrice() {
      	return {
      		num: addition(this.lotteryList.map(v => {return v.bittingNumber})),
      		price: addition(this.lotteryList.map(v => {return v.price}))
        }
      }
    },
    watch: {
      // 'playBoardData': function (n) {
      //   console.log(n)
      // },
      'BetFilterDataFlag': function () {
        this.tagToPlayMap = JSON.parse(sessionStorage.getItem('tagToPlayMap'))
      },
      'tagSelectedData': function (n) {
        this.selectedInfo = {}
        // console.log(n)
      },
      'selectedNumberData': {
        handler: function (n) {

        },
        deep: true
      }
    },
    methods: {
      async lotteryOrderAdd() {
        let BettingData = []
        for (let i in this.lotteryList) {
          console.log(99999)
          console.log(this.lotteryList[i])
          BettingData.push({
            lottery_code: this.lotteryList[i].area.id,
            play_detail_code: "1-A1",
            betting_number: selectedDataToStr(this.lotteryList[i].playBoardTypeValue, this.lotteryList[i].selectedNum),
            betting_count: this.lotteryList[i].bittingNumber,
            betting_money: this.lotteryList[i].price,
            betting_point: "7.50%",
            betting_model: 1,
            betting_issuseNo: this.lotteryList[i].period,
            graduation_count: 1
          })
        }
        console.log(BettingData)
        let params = {
          data: {
            BettingData: BettingData
          },
          source: 1
        }
        let content = ''
        this.lotteryList.forEach(v => {
          content += `<div>${v.type}${v.detial}:  ${selectedDataToStr(v.playBoardTypeValue, v.selectedNum)}</div>`
        })
        console.log(JSON.stringify(params))
        this.$msgbox({
          title: '投注确认',
          message: '<div>' +
          '<div>' + this.lotteryList[0].area.title + this.lotteryList[0].period + '期</div>' +
          '<div>投注金额：<span style="color: red">' + this.allNumAndPrice.price + '元</span></div>' +
          '<div>投注内容：' + content + '</div>' +
          '</div>',
	        dangerouslyUseHTMLString: true
        }).then(async () => {
          let res = await this.axios.post('v1/Lottery/Order/Add', params)
          if (res.data.code == 200) {
            this.$alert(res.data.message);
            
            
            
            
            
            
            
            
            
            
            
            // this.resetSelectData()
          }
        }).catch(() => {

        });

      },
      clearNum() {
        this.$store.commit('resetLotteryList')
      },
      selectedDataToStr(type, value) {
        return selectedDataToStr(type, value)
      },
      deleteItem(index) {
        this.$store.commit('deleteLotteryListItem')
      },
      tagSelected(data) {
        this.tagSelectedData = data
      },
      choseItem(item, index) {
        item.checked = !item.checked
        this.checkedList = this.choseList.filter(item => {
          return item.checked == true
        })
      },
      selectArea(item) {
        this.araeSelected = item
        this.areaShow = false
        this.$router.push({params: {id: item.value}})
      },
      selectedDetTopDetail(item) {
        this.betTopDetailSelected = item.value
        this.choseList = eval(`this.choseList${item.value}`)
        this.betTopDetailShow = false
      },
      selectedNumberDataMethod(data) {
        let type = this.tagSelectedData[0]
        let details = this.tagSelectedData[2]
        this.selectedInfo = playMethods(type, details, data)
        // console.log(playMethods(type, details, data))
        selectedDataToStr(this.playBoardTypeValue, this.selectedInfo.selectedNum)
      },
      playBoardType(data) {
        this.playBoardTypeValue = data
      }
    },
    mounted() {
      sessionStorage.setItem('tagToPlayMap', JSON.stringify(tagToPlayMap))
      this.choseList = eval(`this.choseList1`)
      this.arae.forEach(i => {
        if (i.value == this.$route.params.id) {
          this.araeSelected = i
        }
      })
      console.log(this.lotteryList)
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .numberBox {
    width: 100%;
  }

  .content {
    .cardContent {
      border: 1px solid #ddd;
      margin: 15px;
      padding: 10px;
      height: 188px;
      overflow-y: auto;
      margin-top: 40px;
      background: #fff;
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      tr {
          background: #f4f4f4;
          td {
            padding: 5px 10px;
          }
        }
      }
      .numBox {
        margin: px2rem(20px) 0;
        li {
          position: relative;
          margin-top: px2rem(20px);
          border-bottom: 1px dashed #ccc;
          div {
            display: block;
            color: #dc3b40;
            font-size: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 90%;
            height: 1.4em;
          }
          span {
            font-size: 18px;
            color: #666;
            line-height: 1.2em;
            width: 90%;
            display: block;
            margin-bottom: px2rem(20px);
          }
          a {
            font-size: .9em;
            display: block;
            position: absolute;
            right: 0;
            top: 1.1em;
            background: #dc3b40;
            width: 1.2em;
            height: 1.2em;
            border-radius: 50%;
            &:before {
              content: "";
              display: block;
              width: .75em;
              height: .1em;
              background: #fff;
              margin-top: .55em;
              margin-left: .225em;
              border-radius: .1em;
            }
          }
        }

      }
      .moreOption {
        .clear {
          width: 100%;
          padding: 0;
          text-align: center;
          font-size: px2rem(30px);
          margin: px2rem(10px) 0;
          color: #666;
        }
      }
    }
  }

  .checked {
    color: #f4c829;
    border-color: #f4c829 !important;
  }
  .footerBar {
    bottom: 0;
    width: 100%;
    .left {
      padding: 10px;
      text-align: center;
      font-size: 16px
    }
    .right {
      display: block;
      margin: 0 auto;
      line-height: 44px;
      font-size: 20px;
      border-radius: 5px;
      width: 150px;
      text-align: center;
      background: #ea6a31;
      color: #fff;
      margin-bottom: 40px;
      cursor: pointer;
    }
  }
</style>

