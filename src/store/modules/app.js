const app = {
  state: {
	  PlaySortMore: false,
	  BetFilterDataFlag: true,
	  headerTitle: '',
    hideHeader: true,
  },
  mutations: {
	  showPlaySortMore: (state, data) => {
      state.PlaySortMore = data
    },
	  resetBetFilterData: (state) => {
	  	state.BetFilterDataFlag = !state.BetFilterDataFlag
	  },
	  setHeaderTitle: (state, data) => {
	  	state.headerTitle = data
	  },
    hideHeader: (state, data) => {
      state.hideHeader = data
    }
  },
  actions: {

  }
}

export default app
