import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'
// 引入element ui 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用路由中间件
Vue.use(VueRouter);
// 使用element ui 中间件
Vue.use(ElementUI);


// 注册路由规则
const router = new VueRouter({
  routes:[
    {path:'/',component:index},
    {path:'/index',component:index},
  ]
})

// 引入css
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false


new Vue({
  // 选择器
  el:"#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App)
})
