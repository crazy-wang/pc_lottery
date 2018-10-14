<template>
  <div class="selectNumber clearfix">
    <div class="title">
      <span>{{titleName}}</span>
      <i></i>
    </div>
    <div class="numberContent">
      <div class="number" v-for="item in numberData" :class="{'number-active': item.checked == true}" @click="checkItem(item)">{{item.label}}</div>
    </div>
    <div class="buyNumberFilter">
      <a href="javascript:;" @click="selectAll()">全</a>
      <a href="javascript:;" @click="selectBig()">大</a>
      <a href="javascript:;" @click="selectLittle()">小</a>
      <a href="javascript:;" @click="selectOdd()">奇</a>
      <a href="javascript:;" @click="selectEven()">偶</a>
      <a href="javascript:;" @click="selectClear()">清</a>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {

    }
  },
	props: {
		titleName: {
			default: '万位'
    },
		numberData: {
			type: Array
    },
    single: {
		  default: false
    }
  },
  methods: {
	  checkItem(item) {
	    if (this.single) {
        this.numberData.forEach(item => {
          item.checked = false
        })
      }
	  	item.checked = !item.checked
      let checkedData = this.numberData.filter(item => {
      	return item.checked == true
      })
      let emitData = {titleName: this.titleName, data: checkedData}
      this.$emit('input', emitData)
    },
    changeEmit() {
	    let checkedData = this.numberData.filter(item => {
		    return item.checked == true
	    })
	    let emitData = {titleName: this.titleName, data: checkedData}
	    this.$emit('input', emitData)
    },
    selectAll() {
      // console.log(item.mulActive)
      this.numberData.map(i => i.checked = true)
      this.changeEmit()
      // forEach没有返回值，没有创建新数组，也不会改变元素组，只是让每个元素都去执行一次回调函数
      // item.mulActive.forEach(i => {
      //   i = true
      //   console.log('forEach没有返回值，你赋值个毛线')
      //   console.log(i)
      // })
      // console.log(item.mulActive)
    },
    selectBig() {
      this.numberData.forEach((v, i) => {
        i < 5 ? v.checked = false : v.checked = true
      })
      this.changeEmit()
    },
    selectLittle() {
      this.numberData.forEach((v, i) => {
        i >= 5 ? v.checked = false : v.checked = true
      })
      this.changeEmit()
    },
    // 奇数
    selectOdd() {
      this.numberData.forEach((v, i) => {
        i % 2 === 0 ? v.checked = false : v.checked = true
      })
      this.changeEmit()
    },
    // 偶数
    selectEven() {
      this.numberData.forEach((v, i) => {
        i % 2 != 0 ? v.checked = false : v.checked = true
      })
      this.changeEmit()
    },
    selectClear() {
      this.numberData.map(i => i.checked = false)
      this.changeEmit()
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .selectNumber {
    position: absolute;
    z-index: 0;
    padding: px2rem(20px) 0;
  }

  @include onebottompx('.selectNumber')

  .title {
    width: 65px;
    display: inline-block;
    margin-right: 25px;
    span {
      font-size: 14px;
      text-align: center;
      width: 100%;
      display: block;
      text-align: center;
      color: #fff;
      background: #455467;
      /*border: 1px solid #e3decf;*/
      border-radius: .3em;
      position: relative;
      z-index: 2;
      margin-top: 10px;
      padding: .2em .5em;
    }
    i {
      position: absolute;
      display: block;
      left: 65px;
      top: 24px;
      border-top: 5px solid transparent;
      border-left: 5px solid #455467;
      border-bottom: 5px solid transparent;
    }
  }

  .numberContent {
    /*float: right;*/
    /*width: 100%;*/
    min-width: 500px;
    display: inline-block;
    .number {
      display: inline-block;
      width: 38px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      color: #000;
      background: #faf9f6;
      border-radius: 50%;
      border: 1px solid #bfbfbf;
      font-size: 18px;
      margin: 3px 5px;
      cursor: pointer;
      background: linear-gradient(180deg,#fff 0,#f1efef);
      box-shadow: 0 1px 3px #d4d4d4, inset 0 -1px 5px #fff;
      &:hover {
        background: linear-gradient(180deg,#d64b15 30%,#ea6a31);
        color: #fff;
      }
    }
  }
  .buyNumberFilter {
    padding: 0;
    width: 82px;
    margin-left: 4px;
    display: inline-block;
    vertical-align: top;
    a {
      width: 21px;
      height: 21px;
      display: block;
      float: left;
      color: #666;
      font-size: 12px;
      border-radius: 2px;
      margin: 2px 3px;
      border: 1px solid #c1c6d2;
      line-height: 18px;
      box-shadow: inset 0 -1px 5px #fff;
      text-align: center;
      background: linear-gradient(180deg, #fff 0, #f1efef);
      box-sizing: border-box;
      &:hover {
        background: linear-gradient(180deg, #d64b15 30%, #ea6a31);
        border: 1px solid #d24c10;
        color: #fff;
        text-decoration: blink;
        box-shadow: inherit;
      }
    }
  }

  .number-active {
    background: linear-gradient(180deg,#d64b15 30%,#ea6a31) !important;
    color: #fff !important;
    border: 1px solid #d24c10 !important;
  }
</style>
