import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('@/Users/Home');
const Credit = () => import('@/Users/credit');
const HeadLine = () => import('@/Users/new/headline');
const Serve = () => import('@/Users/serve');
const About = () => import('@/Users/about');
const HeadNew = () => import('@/Users/headnew');
const Solution = () => import('@/Users/credit/solution');
const Focusnews = () => import('@/Users/credit/focusnews');
const Queryplatform = () => import('@/Users/serve/queryplatform');
const Datacome = () => import('@/Users/serve/datacome');
const Creditproduct = () => import('@/Users/serve/creditproduct');
const Creditservice = () => import('@/Users/serve/creditservice');
const Letterofcredit = () => import('@/Users/serve/letterofcredit');
const Company = () => import('@/Users/aboutus/company');
const Contactus = () => import('@/Users/aboutus/contactus');
const Advantage = () => import('@/Users/aboutus/advantage');
Vue.config.productionTip = false;
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    // { path:'*', component:Home},
    { name: 'Home', path: '/', component: Home },
    { name: 'Home', path: '/index', name: 'Home', component: Home },

    // 交科信用
    { path: '/jiaoke', component: Credit},
    { path: '/kehujiejuefangan', component: Solution},
    { path: '/jiaoke/kehujiejuefangan', component: Solution},
    { path: '/jiaokeyaowen', component: Focusnews},
    { path: '/jiaoke/jiaokeyaowen', component: Focusnews},

    // 产品服务
    { path: '/chanpinfuwu', component: Serve},
    { path: '/zhengxinfuwu', component: Letterofcredit},
    { path: '/chanpinfuwu/zhengxinfuwu', component: Letterofcredit},
    { path: '/xinyongfuwu', component: Creditservice},
    { path: '/chanpinfuwu/xinyongfuwu', component: Creditservice},
    { path: '/xinyongcanpin', component: Creditproduct},
    { path: '/chanpinfuwu/xinyongcanpin', component: Creditproduct},
    { path: '/shujulaiyuan', component: Datacome},
    { path: '/chanpinfuwu/shujulaiyuan', component: Datacome},
    { path: '/chaxunpingtai', component: Queryplatform},
    { path: '/chanpinfuwu/chaxunpingtai', component: Queryplatform},

    // 关于我们
    { path: '/guanyuwomen', component: About},
    { path: '/lianxiwomen', component: Contactus},
    { path: '/guanyuwomen/lianxiwomen', component: Contactus},
    { path: '/gongsijianjie', component: Company},
    { path: '/guanyuwomen/gongsijianjie', component: Company},
    { path: '/qiyeyoushi', component: Advantage},
    { path: '/guanyuwomen/qiyeyoushi', component: Advantage},
    // 交科头条
    { path: '/jiaoketoutiao', component: HeadNew}
  ]
});
