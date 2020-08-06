<template>
    <div>
        <div class="home bg-light" id="home-main-cover">
            <Navbar class="sticky" />
            <div class="custom-section d-flex align-items-end px-5">

                <!-- <h1 class="display-4 mb-2"><span>Everything In Moderation <br>Won't Harm!</span></h1>
                <h5 class="font-weight-lighter">Luxury Wine from France</h5>
                <br>
                <router-link class="btn btn-outline-light py-3 px-4" :to="{ path: '/store' }">VISIT STORE</router-link> -->
            </div>
        </div>
        <div class="row d-flex justify-content-center py-5 bg-elevation">
            <div class="col-md-7 text-center">
                <h3 class="text-elevation text-center font-weight-bold text-uppercase mb-3">Help us give more Filipino <br> families a decent home, bigger <br> opportunities, and a better <br> chance at life.</h3>
                <p class="text-center mb-5">
                    <small>Habitat for Humanity Philippines, by building strength, stability, and self-reliance through shelter, aims to strengthen its vision of a <br> world where everyone has a decent place to live. With over 140,000 families being served by our ministry, you can help us <br> continue our mission of putting God’s love into action by bringing people together to build homes, communities, and hope.</small>
                </p>
                <button class="btn btn-outline-info btn-outline-elevation py-2 px-3">Learn More</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 p-0">
                <img src="../../assets/images/1.png" class="img-fluid" alt="">
            </div>
            <div class="col-lg-6 p-5">
                <div class="m-5">
                    <h3 class="text-elevation text-uppercase font-weight-bold mb-3">Build with us</h3>
                    <p class="mb-5">
                        <small>
                            DONATE NOW to support the housing ministry and its projects
                            <br><br>
                            VOLUNTEER to help build strength, stability, sustainability, and self-reliance through shelter
                            <br><br>
                            PARTNER with us in uplifting the lives of families through housing and community development
                        </small>
                    </p>
                    <a href="#" class="text-elevation text-uppercase float-right font-weight-bold">Start Building <span class="fa fa-chevron-right"></span></a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 p-5">
                <div class="m-5">
                    <h3 class="text-elevation text-uppercase font-weight-bold mb-3">Unexpected Blessings</h3>
                    <p class="mb-5">
                        <small>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </small>
                    </p>
                    <a href="#" class="text-elevation text-uppercase float-right font-weight-bold">Read More <span class="fa fa-chevron-right"></span></a>
                </div>
            </div>
            <div class="col-lg-6 p-0">
                <img src="../../assets/images/2.png" class="img-fluid" alt="">
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 p-0">
                <img src="../../assets/images/3.png" class="img-fluid" alt="">
            </div>
            <div class="col-lg-6 p-5">
                <div class="m-5">
                    <h3 class="text-elevation text-uppercase font-weight-bold mb-3">Story: Motivated <br>By a Dream</h3>
                    <p class="mb-5">
                        <small>
                            Shirley and Felisa have a dream: they want a new house and a better life for their families. The Habitat Hypar house is a symbol of that dream. And they are hoping, even working – towards it becoming a reality.
                        </small>
                    </p>
                    <a href="#" class="text-elevation text-uppercase float-right font-weight-bold">Read More <span class="fa fa-chevron-right"></span></a>
                </div>
            </div>
        </div>

        <div class="row bg-elevation-1">
            <div class="col-md-12 py-5">
                <div class="my-5 text-center">
                    <h3 class="text-elevation text-uppercase font-weight-bold mb-3">Our Partners</h3>
                    <p class="mb-3">
                        Various individuals and groups have helped pave the way to strengthen communities, build safer and <br> decent homes, and transform the lives of families living in them.
                    </p>
                    <h3 class="mb-3">
                        <span class="fa fa-"></span>
                    </h3>
                    <button class="btn btn-outline-dark text-uppercase py-2 px-3">View More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/layouts/navbar.vue'
export default {
  name: 'Home',
  components: {
      Navbar
  },
}
</script>
<style media="screen">
    .custom-section {
        padding: 20px;
        height: 130vh;
        overflow: hidden;
        justify-content: center;
        flex-direction: column;
        color: white;
    }
    #home-main-cover {
        background: url('../../assets/images/globe_header@2x.png');
        background-size: cover;
    }
    img.img-fluid {
        width:100% !important;
        /* background-size: cover !important; */
    }
</style>
