import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Components Here
import Home from '../components/views/home.vue'

// initialize Vue router
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: '',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
];

const router = new VueRouter({
    routes
})

export default router
