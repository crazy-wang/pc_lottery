import router from './router'
import store from './store'
import {setActivePage,getToken} from './utils/auth'

router.beforeEach((to, from, next) => {
  if (to.fullPath == '/home') {
    store.commit('resetLotteryList')
  }
  if(getToken()) {
    next()
  } else {
    if(to.meta.needLogin) {
      router.replace('/login')
    } else {
      next()
    }
  }
})
