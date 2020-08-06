<template id="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-5">
            <a class="navbar-brand mx-5" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav px-5">
                    <li class="nav-item mx-4 active">
                        <a class="nav-link" href="#">HOME</a>
                        <!-- <hr class="break-sec-w"> -->
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link" href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link" href="#">OUR ADVOCACY</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link" href="#">GET IN TOUCH</a>
                    </li>
                    <!-- <li class="nav-item mx-5">
                        <a class="nav-link" href="#">
                            <span class="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li class="nav-item mx-5">
                        <a class="nav-link" href="#">
                            <span class="fa fa-facebook"></span>
                        </a>
                    </li>
                    <li class="nav-item mx-5">
                        <a class="nav-link" href="#">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </li> -->
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

                <!-- <span class="navbar-text pull-right">
                    <span class="mx-2 fa fa-twitter"></span>
                    <span class="mx-2 fa fa-facebook"></span>
                    <span class="mx-2 fa fa-instagram"></span>
                </span> -->
            </div>
        </nav>
    </div>
</template>
<script>
const $ = require('jquery');
window.$ = $;
    export default {
        name: 'Navbar',
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
