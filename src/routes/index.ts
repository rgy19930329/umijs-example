/*
 * @Desc: 项目路由
 * @Author: ranguangyu
 * @Date: 2020-04-29 10:13:15
 */

const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/home' },
      { path: '/test', component: '@/pages/test' },
      { path: '/demo', component: '@/pages/demo' },
    ],
  },
];

export default routes;
