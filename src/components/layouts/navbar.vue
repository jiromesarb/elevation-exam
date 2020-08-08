<template id="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-5" id="navbar">
            <a class="navbar-brand mx-5 text-center" href="#">
                <NavbarBrand/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav px-5">
                    <li class="nav-item mx-4" :class="[this.$route.path == '/home' ? 'active' : '', this.$route.path == '/' ? 'active' : '']">
                        <router-link class="nav-link" to="/home">HOME</router-link>
                    </li>
                    <li class="nav-item mx-4" :class="[this.$route.path == '/about-us' ? 'active' : '']">
                        <router-link class="nav-link" to="/about-us">ABOUT US</router-link>
                    </li>
                    <li class="nav-item mx-4" :class="[this.$route.path == '/advocacy' ? 'active' : '']">
                        <router-link class="nav-link" to="/advocacy">OUR ADVOCACY</router-link>
                    </li>
                    <li class="nav-item mx-4" :class="[this.$route.path == '/get-in-touch' ? 'active' : '']">
                        <router-link class="nav-link" to="/get-in-touch">GET IN TOUCH</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto px-5">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="fa fa-facebook-square"></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    const $ = require('jquery');
    window.$ = $;

    import NavbarBrand from '@/components/includes/navbar_brand.vue'
    export default {
        name: 'Navbar',
        components: {
            NavbarBrand
        },
        data () {
            return {
                scrollY: null,
            }
        },
    }
</script>
<style scoped>
    /* .navbar {
        background: #F5FEFF !important;
    } */
    .navbar-nav {
        /* margin: 0 auto; */
    }
    .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
        border-bottom: 3px solid #39A7A0 !important;
        color: #39A7A0 !important;
        transition: 0.8s;
    }

    .navbar-nav .active::after {
        content: " ";
    }


    .navbar-toggler {
        border: 0 !important;
        color: #7B6D1D !important;
        transition: 0.8s;
    }

    .navbar-toggler:hover {
        color: #39A7A0 !important;
    }

    .navbar-light .navbar-nav .nav-link {
        transition: 0.7s;
    }

    .navbar-light .navbar-nav .nav-link:hover {
        color: #39A7A0 !important;
        transition: 0.7s;
    }
    .navbar {
        /* padding-top: 50px !important; */
        /* padding-bottom: 50px !important; */
    }
    .nav-link {
        letter-spacing: 1px;
    }
    .align-center {
        margin: 0 auto;
    }
</style>
