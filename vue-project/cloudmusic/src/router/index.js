import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path:'/user',//用户详情页
    name:'user',
    component:()=>import('../views/User.vue')
  },
  {
    path:'/login',//用户登录
    name:'login',
    component:()=>import('../views/Login.vue')
  },
  {
    path:'/phonelogin',//手机号登录
    name:'phonelogin',
    component:()=>import('../views/Phonelogin.vue'),
    redirect:'/phonelogin/getphone',
    children:[
      {
        path:'getphone',
        component:()=>import('../components/getphone.vue')
      },
      {
        path:'getpassword',
        component:()=>import('../components/getpassword.vue')
      }
    ]
  },
  {
    path:'/songdetail',//歌单详情
    name:'songdetail',
    component:()=>import('../views/Detail.vue'),
  },
  {
    path:'/search',//歌单搜索
    name:'search',
    component:()=>import('../views/Search.vue'),
    redirect:'/search/hotandhistory',
    children:[
      {
        path:'hotandhistory',
        component:()=>import('../components/mysearch.vue')
      },
      {
        path:'searchresult',
        component:()=>import('../components/searchresult.vue')
      }
    ]
  },
  {
    path:'/play',
    name:'play',
    component:()=>import('../views/Play.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
