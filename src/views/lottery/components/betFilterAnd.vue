<template>
  <div class="betFilterAnd">
    <div class="followPlaylist clearfix" v-for="item in followPlaylistData">
      <div class="title">
        <span>{{item.titleName}}</span>
      </div>
      <div class="numberContent">
        <div class="number" v-for="itemChild in item.data" :class="{'active': itemChild.checked == true}" @click="checkItem(item, itemChild)">{{itemChild.label}}</div>
      </div>
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
      followPlaylistData: {
        type: Array
      }
    },
    methods: {
      checkItem(item, itemChild) {
      	this.followPlaylistData.forEach(item => {
      		item.data.forEach(j => {
      			j.checked = false
          })
        })
        itemChild.checked = !itemChild.checked
        this.$store.commit('showPlaySortMore', false)
//        let checkedData = item.data.filter(i => {
//          return i.checked == true
//        })
//        if(checkedData) {
//          checkedData.push({titleName: item.titleName})
//        }
//        this.$emit('input', checkedData)
      }
    },
    watch: {
	    'followPlaylistData': {
		    handler:function(n,oldval){
			    let checkedData = []
			    this.followPlaylistData.forEach(i => {
				    i.data.forEach(j => {
					    if (j.checked == true) {
						    checkedData = [j]
						    checkedData.push({titleName: i.titleName})
					    }
				    })
			    })
			    this.$emit('input', checkedData)
		    },
		    deep:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .betFilterAnd {
    background: #fff;
  }
  .betFilterAnd {
    padding: 10px 15px;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    li {
      margin: 4px 0;
    }
    span {
      vertical-align: top;
      display: inline-block;
      font-weight: 700;
      color: #555;
      width: 64px;
      position: relative;
      margin-left: 22px;
      &:before {
        content: '';
        display: block;
        width: 1px;
        height: 54px;
        background-color: #e7e7e8;
        position: absolute;
        top: -8px;
        left: -16px;
      }
      &:after {
        content: '';
        display: block;
        width: 11px;
        height: 11px;
        background-color: #fff;
        border: 1px solid #e7e7e8;
        border-radius: 50%;
        position: absolute;
        top: 7px;
        left: -21px;
      }
    }
    .numberContent {
      display: inline-block;
      max-width: 620px;
      .number {
        display: inline-block;
        color: #555;
        margin-right: 15px;
        padding: 1px 5px;
        border-radius: 3px;
        user-select: none;
        cursor: pointer;
      }
      .number:hover {
        background-color: #ff9726;
        color: #fff!important;
      }
    }
  }

  .title {
    float: left;
    span {
      width: 70px;
      display: block;
      color: #666;
    }
  }
  .active {
    background-color: #ff9726;
    color: #fff!important;
  }
</style>
