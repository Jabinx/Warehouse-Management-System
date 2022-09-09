import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的组件
import Login from '../components/login'
import Register from '../components/register'
import home from '../components/home'
import grzx from '../components/grzx'
import jz from '../components/jz'
import xl from '../components/xl'
import sz from '../components/sz'
import dz from '../components/dz'
import eh from '../components/eh'
import zz from '../components/zz'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        //路由重定向
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login},
        { path: '/register', component: Register },
        { path: '/home', component: home,
        // redirect:'/home/grzx',
        children:[
            {path:'',component:grzx},
            {path:'jz',component:jz},
            {path:'xl',component:xl},
            {path:'sz',component:sz},
            {path:'dz',component:dz},
            {path:'eh',component:eh},
            {path:'zz',component:zz},
        ]}
    ]
})

//全局前置守卫
router.beforeEach(function (to, from, next) {
    if(to.path == '/home') {
        const token = localStorage.getItem('token')
        if (token) {
            // console.log(token)
            next()
        } else {
            next('/login')
        }
    }else{
        next()
    }
})

export default router