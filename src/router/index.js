import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Components Here
import Home from '../components/views/home.vue'
import AboutUs from '../components/views/about_us.vue'
import GetInTouch from '../components/views/get_in_touch.vue'

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
    {
        path: '/about-us',
        name: 'about_us',
        component: AboutUs
    },
    {
        path: '/get-in-touch',
        name: 'get_in_touch',
        component: GetInTouch
    },
];

const router = new VueRouter({
    scrollBehavior () {
        return { x: 0, y: 0 };
    },
    routes,
})

export default router
