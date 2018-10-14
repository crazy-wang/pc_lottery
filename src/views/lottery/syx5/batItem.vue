<template>
  <div class="demo1">
    <div class="row-item" v-for="(item1, index1) in propsData" :key="index1">
      <el-row>
        <el-col :span="7">
          <div class="col-item">
            <span>[{{item1.play}}]</span>
            <!--<span>[{{item1.play.join(',')}}]</span>-->
            <div style="display: inline-block">
              <span v-for="(item2, index2) in item1.selectedNumArr">
                {{item2.join(' ')}}
                <i v-show="index2 !== item1.selectedNumArr.length-1">,</i>
              </span>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="col-item">
            <span>{{item1.num}}</span>
            <span>注</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="col-item">
            <span>{{item1.bnum}}</span>
            <span>倍</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="col-item">
            <span>{{item1.flag}}</span>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="col-item">
            <span>可中金额</span>
            <span>{{item1.total}}</span>
            <span>{{item1.flag}}</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="col-item">
            <a href="javascript:;" class="del" @click="delRowData(index1)">删除</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .demo1 {
    .row-item {
      background-color: #f4f4f4;
      margin-bottom: 5px;
      .del {
        color: #f33;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        // 父传过来的数据
        // propsData: [
        //   {
        //     play: ['中国', '美国', '加油'],
        //     selectedNumArr: [
        //       ['01', '08'],
        //       ['03'],
        //       ['05']
        //     ],
        //     num: 2,
        //     bnum: 2,
        //     total: 1930.5,
        //     flag: '好'
        //   },
        //   {
        //     play: ['中国', '美国', '加油'],
        //     selectedNumArr: [
        //       ['04'],
        //       ['03', '04', '09'],
        //       ['05']
        //     ],
        //     num: 1,
        //     bnum: 1,
        //     total: 193,
        //     flag: '好'
        //   },
        //   {
        //     play: ['中国', '美国', '加油'],
        //     selectedNumArr: [
        //       ['01', '08'],
        //       ['03'],
        //       ['05']
        //     ],
        //     num: 2,
        //     bnum: 2,
        //     total: 1930.5,
        //     flag: '好'
        //   }
        // ]
      }
    },
    props: {
      propsData: Array
    },
    methods: {
      delRowData(params) {
        // console.log(params)
        this.$emit('delPropsData', params)
      }
    },
  }
</script>
