import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import BuyHall from '@/views/buyHall'
import Activity from '@/views/activity'
import Mobile from '@/views/mobile'
import HelpGuide from '@/views/helpGuide'
import UULive from '@/views/uuLive'
import K3 from '@/views/lottery/k3/index1.vue'
import Syx5 from '@/views/lottery/syx5/index1.vue'
import Ssc from '@/views/lottery/ssc/index1.vue'
import Pk10 from '@/views/lottery/pk10/index1.vue'
import Howtoplay from '@/views/howtoplay/index'
import Login from '@/views/login'
import Register from '@/views/register'
import PersonInfo from '@/views/personalCenter/personInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/buyHall',
      name: 'buyHall',
      component: BuyHall
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/helpGuide',
      name: 'helpGuide',
      component: HelpGuide
    },
    {
      path: '/UULive',
      name: 'uuLive',
      component: UULive
    },
    {
      path: '/lottery',
      component: K3,
      children: [
        {
          path: 'k3/:id',
          component: K3,
          meta: {needLogin: true, hideHeader: true}
        }
      ]
    },
    // {
    //   path: '/lottery/k3/:id',
    //   component: K3
    // }
    {
      path: '/lottery',
      component: Syx5,
      children: [
        {
          path: 'syxw/:id',
          component: Syx5,
          meta: {needLogin: true, hideHeader: true}
        }
      ]
    },
    {
      path: '/lottery',
      component: Ssc,
      children: [
        {
          path: 'ssc/:id',
          component: Ssc,
          meta: {needLogin: true, hideHeader: true}
        }
      ]
    },
    {
      path: '/lottery',
      component: Pk10,
      children: [
        {
          path: 'pk10/:id',
          component: Pk10,
          meta: {needLogin: true, hideHeader: true}
        }
      ]
    },
    // {
    //   path: '/ssc',
    //   component: Ssc,
    //   children: [
    //     {
    //       path: 'ssc/:id',
    //       component: Ssc
    //     }
    //   ]
    // },
    {
      path: '/howtoplay',
      name: 'howtoplay',
      component: Howtoplay
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/personInfo',
      name: 'PersonInfo',
      component: PersonInfo
    },
    {
      path: '/main',
      name: 'main',
      component: ()=> import('@/components/pages/nav/nav'),
      children:[
        {
          path: '/person',
          name: 'person',
          component: ()=> import('@/components/pages/nav/person/personInfo'),
        },
        {
          path: '/securityCenter',
          name: 'securityCenter',
          component: ()=> import('@/components/pages/nav/account/securityCenter'),
        },
        {
          path: '/manageBankcard',
          name: 'manageBankcard',
          component: ()=> import('@/components/pages/nav/account/manageBankcard'),
        },
        {
          path: '/agentIntro',
          name: 'agentIntro',
          component: ()=> import('@/components/pages/nav/agent/agentIntro'),
        },
        {
          path: '/agentReport',
          name: 'agentReport',
          component: ()=> import('@/components/pages/nav/agent/agentReport'),
        },
        {
          path: '/lowerReport',
          name: 'lowerReport',
          component: ()=> import('@/components/pages/nav/agent/lowerReport'),
        },
        {
          path: '/manageInvite',
          name: 'manageInvite',
          component: ()=> import('@/components/pages/nav/agent/manageInvite'),
        },
        {
          path: '/agentMember',
          name: 'agentMember',
          component: ()=> import('@/components/pages/nav/agent/agentMember'),
        },
        {
          path: '/agentBetRecord',
          name: 'agentBetRecord',
          component: ()=> import('@/components/pages/nav/agent/agentBetRecord'),
        },
        {
          path: '/agentBillRecord',
          name: 'agentBillRecord',
          component: ()=> import('@/components/pages/nav/agent/agentBillRecord'),
        },
        {
          path: '/betRecord',
          name: 'betRecord',
          component: ()=> import('@/components/pages/nav/betting/betRecord'),
        },
        {
          path: '/seekOrder',
          name: 'seekOrder',
          component: ()=> import('@/components/pages/nav/betting/seekOrder'),
        },
        {
          path: '/billRecord',
          name: 'billRecord',
          component: ()=> import('@/components/pages/nav/capital/billRecord'),
        },
        {
          path: '/PLstatement',
          name: 'PLstatement',
          component: ()=> import('@/components/pages/nav/capital/PLstatement'),
        },
        {
          path: '/letter',
          name: 'letter',
          component: ()=> import('@/components/pages/nav/info/letter'),
        },
        {
          path: '/notice',
          name: 'notice',
          component: ()=> import('@/components/pages/nav/info/notice'),
        },
      ]
    },
  ]
})
