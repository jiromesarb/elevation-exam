<template>
    <div id="app">

        <div class="w-100">
            <router-view/>
        </div>

        <Footer/>
    </div>
</template>

<script>

const $ = require('jquery');
import Footer from '@/components/layouts/footer.vue'

export default {
    name: 'App',
    components: {
        Footer
    },

    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        // Change the color of navbar whenever the user srolled down
        handleScroll () {
            var $nav = $("#navbar");
            if(window.scrollY == 0){
                $nav.removeClass('scrolled').addClass('py-5');
            } else {
                $nav.removeClass('py-5').addClass('scrolled py-0');
            }
        }
    }
}
</script>

<style>

template {
    width: 100% !important;
    transition: 0.7s;
}
* {
    font-family: 'Lora', sans-serif;
    line-height: 1.4;
    margin: 0px !important;
}
body {
    background: white !important;
}
.sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 0px;
    z-index: 999999999999;
}

#navbar {
    transition: 0.4s;
}
.navbar.scrolled {
    background: #F5FEFF !important;
    transition: background-color 200ms linear;
}

/* Custom text */
.text-elevation {
    color: #39A7A0 !important;
    letter-spacing: 5px;
}

/* Custom background */
.bg-elevation {
    background: #F8F9FA !important;
}

.bg-elevation-1 {
    background: #F5FEFF !important;
}

.bg-elevation-2 {
    background: #D0F1F4 !important;
}

/* Custom button */
.btn-outline-elevation {
    border-color: #39A7A0 !important;
    border-radius: 0px !important;
    color: #39A7A0 !important;
    letter-spacing: 5px;
}
.btn-outline-elevation:hover {
    background: #39A7A0 !important;
    color: white !important;
}
</style>
