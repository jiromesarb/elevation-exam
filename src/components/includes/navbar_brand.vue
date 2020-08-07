<template>
    <div>
        <svg class="mb-2" width="35" height="31" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg" id="navbar_brand">
            <path d="M34.625 0.625C35.1875 2 35.625 3.4375 36 5C36.3125 6.5625 36.5 8.125 36.5 9.625C36.5 13.25 35.75 16.5 34.375 19.5C32.9375 22.5 31 24.9375 28.5 26.75C25.875 28.625 23 29.6875 19.75 29.9375C17.375 30.1875 15.1875 29.8125 13.1875 28.75C11.4375 27.875 10 26.6875 8.875 25.125C7.5 26.25 6.3125 27.5 5.4375 28.875C4.9375 29.625 4.5625 30.25 4.375 30.75C4.125 31.25 3.75 31.625 3.25 31.875C2.75 32.125 2.25 32.125 1.75 31.875C1.25 31.6875 0.875 31.3125 0.625 30.8125C0.375 30.3125 0.375 29.75 0.625 29.25C1.3125 27.625 2.4375 25.9375 4 24.1875C6.125 21.875 8.6875 20 11.6875 18.625C15.4375 16.875 19.6875 16 24.5 16C24.75 16 25 15.9375 25.1875 15.75C25.375 15.5625 25.5 15.3125 25.5 15C25.5 14.75 25.375 14.5 25.1875 14.3125C25 14.125 24.75 14 24.5 14C17.4375 14 11.5 15.75 6.625 19.25L6.5625 19.125C6.5 18.625 6.5 18.25 6.5 18C6.5 15.875 7 13.875 8.125 12C9.1875 10.1875 10.625 8.75 12.5 7.625C14.3125 6.5625 16.3125 6 18.5 6H23.5C25.4375 6 27.25 5.5625 28.875 4.5625C30.5 3.5625 31.875 2.25 32.875 0.5C33.0625 0.1875 33.375 0 33.75 0C34.125 0 34.4375 0.25 34.625 0.625Z" fill="#39A7A0"/>
        </svg><br>
        <p class="text-elevation-brand text-uppercase"><small>The green leaf</small></p>
    </div>

</template>
<script>
// const $ = require('jquery');
export default {
    name: 'NavbarBrand',

    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        // Change the color of navbar whenever the user srolled down
        // handleScroll () {
        //     var $nav = $("#navbar_brand");
        //     if(window.scrollY == 0){
        //         $nav.addClass('mb-3');
        //     } else {
        //         $nav.removeClass('mb-3');
        //     }
        // }
    }
}
</script>

<style scoped>
    .text-elevation-brand {
        color: #39A7A0 !important;
        font-size: 16px !important;
    }
    #navbar_brand {
        transition: 0.4s;
    }
</style>
