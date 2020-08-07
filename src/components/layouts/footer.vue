<template id="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-elevation-2 py-5 d-flex justify-content-center">
            <a class="navbar-brand mx-5 text-center" href="#">
                <NavbarBrand/>
            </a>
            <ul class="navbar-nav ml-auto px-5 d-flex justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Term of Use.
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Privacy Policy
                    </a>
                </li>
            </ul>
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
    computed: {
        currentPage() {
            return this.$route.path;
        }
    }
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
    .align-center {
        margin: 0 auto;
    }
    .break-sec-w {
        width: 40px;

        border-top: 3px solid #39A7A0;
        margin-top: 10px !important;
    }
</style>
