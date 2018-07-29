import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 导入懒加载插件
import VueLazyload from "vue-lazyload";
// 引入index组件
import index from './components/index.vue'
// 引入goodsInfo组件
import goodsInfo from './components/goodsInfo.vue'
// 引入css
import './assets/statics/site/css/style.css';
// 引入moment
import moment from 'moment'
// 引入iview
import iView from 'iview';
import '../node_modules/iview/dist/styles/iview.css';

// 引入element ui 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入 axios模块 目的是让所有组件可以使用
import axios from "axios";
axios.defaults.baseURL = "http://47.106.148.205:8899";

// 挂载到Vue的原型上
Vue.prototype.axios = axios;

// 使用路由中间件
Vue.use(VueRouter);
// 使用element ui 中间件
Vue.use(ElementUI);
// 使用懒加载中间件
Vue.use(VueLazyload, {
  // 图片当做资源来引入
  loading:require('./assets/statics/img/01.gif')
})
// 使用iview中间件
Vue.use(iView);

// 注册路由规则
const router = new VueRouter({
  routes:[
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/goodsInfo/:id',component:goodsInfo},
    
  ]
})

// 注册全局过滤器
Vue.filter('cutTime',(value)=> {
  return moment(value).format('YYYY-MM-DD');
})

Vue.config.productionTip = false


new Vue({
  // 选择器
  el:"#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App)
})
