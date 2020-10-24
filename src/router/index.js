import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function route (path, file, name, children) { //下方 使用route方法时，没有传入children啊
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file) //这个不懂
  }
}

export default new Router({
  routes: [
    route("/login",'/Login',"Login"),  //这个不懂；如果访问 /login 则 import('../pages' + file)  加载 Login 组件；
    {
      path:"/",
      component: () => import('../pages/Layout'), //重定向之前加载 Layout 组件？ 颜色是黄色，而不是紫色；
      redirect:"/index/dashboard",
      children:[
        route("/index/dashboard","/Dashboard","Dashboard"), //那这些组件的 <router-view></router-view> 在哪里；
        route("/item/category",'/item/Category',"Category"),
        route("/item/brand",'/item/Brand',"Brand"),
        route("/item/list",'/item/Goods',"Goods"),
        route("/item/specification",'/item/Specification',"Specification"),
        route("/user/statistics",'/item/Statistics',"Statistics"),
        route("/trade/promotion",'/trade/Promotion',"Promotion")
      ]
    } // 一个path 路由对象

  ] //routes

})

// routes:[
//   {path:'/account', component: account,
//
//     children:[ //这才是子路由
//       {path: 'login',component: login}, //注意不带斜线;点击后路径会变成 /account/login
//       {path: 'register',component: register}
//     ]
//
//   },
// //            {path: '/account/login',component: login}, //与Account平级的路由
// //            {path: '/account/register',component: register},//与Account平级的路由
// ]
// var router = new VueRouter({
//   routes:[
//     {path:'/',redirect:'/login'},//默认路径
//     {path: '/login',component:login},
//     {path:'/register',component:register},
//   ],
//   linkActiveClass:'myactive'
