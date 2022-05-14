// 路由配置规则： 1 、公共路由，   2、私有路由
// 注意 1、在设计路由的时候，我们要考虑好，有些页面是公共的，大家都可以访问，有些必须是登录之后的，授权后才能查看
// 注意2、后台有一些功能需要做权限认证，不同的人看到的页面应该不一样（基于角色的权限管理）
// 本地将路由的信息单独提取到一个配置文件（方便管理，2路由信息在其他地方会用），然后进行路由的操作

// import login from '../views/Login/index';
// import pageNotFound from '../views/pageNotFound/index';
// import dashbord from '../views/Dashbord/index';
// 公共路由

import { login, pageNotFound, dashbord, useradd, useredit } from '../views'
const commonrouters = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/404',
        component: pageNotFound
    },
]

//私有路由
const privaterouters = [
    {
        path: '/business/dashbord',
        component: dashbord
    },
    {
        path: '/business/useradd',
        component: useradd
    },
    {
        path: '/business/useredit',
        component: useredit
    }
]
export {
    commonrouters, privaterouters
}