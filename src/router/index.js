import Vue from 'vue'
import vueRouter from 'vue-router'
import homeName from '../pages/homeName'
import detailInfo from '../pages/detail/detailInfo'
Vue.use(vueRouter)
//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = vueRouter.prototype.push
//修改原型对象中的push方法
vueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new vueRouter({
    routes:[
        {
            path:'/',
            redirect: '/homeName'
        },
        {
            path:'/homeName',
            name: 'homeName',
            component: homeName
        },
        {
            path:'/detail',
            name: 'detailInfo',
            component: detailInfo
        }
    ]
})

export default router;