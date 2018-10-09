<template>
  <div class="index">
    <div class="bat-item" v-for="(item, index) in batPropsData">
      <span>[{{item.play}}] {{item.value}}</span>
      <span>总共{{item.number}}注</span>
      <span>每注 <input type="text" v-model="item.perPrice" @blur="computedBonus(item, index)">元</span>
      <span>可中金额 <i class="red">{{item.bonus.toFixed(2)}}</i>元</span>
      <span @click="removeCurrentItem(index)">删除</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bat-item {
    background-color: #f4f4f4;
    margin-bottom: 10px;
    span {
      display: inline-block;
      width: 23%;
      padding: 5px 10px;
      box-sizing: border-box;
      i {
        color: #f33;
      }
      &:nth-child(2) {
        width: 15%;
      }
      &:nth-child(3) {
        width: 25%;
      }
      &:last-child {
        width: 10%;
        color: #ff9600;
        cursor: pointer;
      }
      input {
        width: 70px;
        height: 23px;
        padding: 4px 5px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        margin: 0 2px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        perPrice: '',
        // batPropsData: [
        //   {
        //     play: '和值',
        //     value: 3,
        //     number: 1,
        //     odds: 189,
        //     perPrice: '',
        //     bonus: 0.00,
        //   },
        //   {
        //     play: '和值',
        //     value: 3,
        //     number: 1,
        //     odds: 189,
        //     perPrice: '',
        //     bonus: 0.00,
        //   },
        //   {
        //     play: '和值',
        //     value: 3,
        //     number: 1,
        //     odds: 189,
        //     perPrice: '',
        //     bonus: 0.00,
        //   },
        // ]
      }
    },
    props: [
      'batPropsData'
    ],
    methods: {
      // 计算奖金
      computedBonus(item, index) {
        // console.log('当前item数据')
        // console.log(item)
        let odds = item.odds
        let perPrice = item.perPrice
        this.batPropsData[index].bonus = odds * perPrice
      },
      // 删除
      removeCurrentItem(index) {
        // console.log(index)
        // console.log(this.batPropsData[index])
        // console.log(this.batPropsData[index].value)
        console.log(this.batPropsData[index].selected)
        this.batPropsData[index].selected = !this.batPropsData[index].selected
        console.log(this.batPropsData[index].selected)
        this.$emit('clearActiveClass', this.batPropsData[index].value)
        this.batPropsData.splice(index, 1)
      }
    },
  }
</script>
