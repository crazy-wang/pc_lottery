const getters = {
	PlaySortMore: state => state.app.PlaySortMore,
	BetFilterDataFlag: state => state.app.BetFilterDataFlag,
	headerTitle: state => state.app.headerTitle,
  lotteryList: state => state.lottery.lotteryList,
  userInfo: state => state.user.userInfo,
  hideHeader: state => state.app.hideHeader
}

export default getters
