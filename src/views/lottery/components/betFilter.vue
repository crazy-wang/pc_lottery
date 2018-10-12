<template>
  <div class="betFilter">
    <span class="tag_mainplay_item" :class="{active: item.checked}" v-for="item in tagMainData" @click="checkedData(item)">
      {{item.label}}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      tagMainData: {
        type: Array
      }
    },
    methods: {
      checkedData(item) {
      	if(item) {
		      this.tagMainData.forEach(item => {
			      item.checked = false
		      })
		      item.checked = !item.checked
	      }
	      this.$store.commit('resetBetFilterData')
//        let emitData = this.tagMainData.filter( item => {
//          return item.checked == true
//        })
//        this.$emit('input', emitData)
      }
    },
    watch: {
	    'tagMainData': {
		    handler:function(n,oldval){
			    let emitData = this.tagMainData.filter( item => {
				    return item.checked == true
			    })
			    this.$emit('change', emitData)
		    },
		    deep:true
	    }
    },
    mounted() {
//	    this.checkedData()
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .betFilter {
    text-align: left;
    width: 739px;
    height: 52px;
    box-sizing: border-box;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
    background-color: #f2f4f7;
    border-top: 1px solid #ddd;
    .curr, span:hover {
      background-color: #ff9726;
      color: #fff;
    }
    span {
      display: inline;
      padding: 4px 5px;
      line-height: 30px;
      border-radius: 3px;
      cursor: pointer;
      text-align: center;
      color: #555;
      font-size: 14px;
      margin-right: 13px;
      margin-bottom: 5px;
    }
  }
  .active {
    background: #ff9726 !important;
    border: 1px solid #ff9726 !important;
    color: #fff !important;
  }
</style>
