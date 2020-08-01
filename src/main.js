import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(Meta)

new Vue({
  router,
  store,
  metaInfo: {
    title: '用Vue搭建南京林业大学马院自动化考试网站',
    meta: [
      {
        name: 'keywords',
        content: 'meredith的个人网站,南京林业大学,马原,近代史,毛概,思修.题库,马院,Vue,在线考试'
      },{
        name: 'description',
        content: '此网站是对南京林业大学马院在线考试平台的拙劣的模仿' +
            '建站的目的只是单纯的先试试Vue框架' +
            '目前支持单选题，后续会支持更多的题型' +
            '目前次项目还存在非常的多的bug，比如说C++题目会显示undefine（具体原因已知，但是还未找到优雅的解决方案）' +
            '此项目已经在github上开源，请在github上搜索onlineTestForNJFU' +
            '如果有任何侵权行为，请联系我删除' +
            '联系方式：547906080@qq.com'
      }
    ]
  },
  render: h => h(App)
}).$mount('#app')
