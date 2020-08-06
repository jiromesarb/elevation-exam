<template>
  <div id="app">

    <router-view/>

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
          var $nav = $(".navbar");
          if(window.scrollY == 0){
              $nav.removeClass('scrolled');
          } else {
              $nav.addClass('scrolled');
          }
      }
  }
}
</script>

<style>
    * {
        font-family: 'Lora', sans-serif;
        line-height: 1.4;

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
        color: #39A7A0 !important;
        letter-spacing: 5px;
    }
    .btn-outline-elevation:hover {
        background: #39A7A0 !important;
        color: white !important;
    }
</style>
