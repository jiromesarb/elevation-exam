import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false


const $ = require('jquery');
window.$ = $;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
