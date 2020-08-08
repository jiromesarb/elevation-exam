<template>
    <div style="min-width: 100% !important;">
        <Navbar :isFixed="true" />
        <div class="home bg-light mx-0" id="home-main-cover">
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
                    <small>
                        Habitat for Humanity Philippines, by building strength, stability, and self-reliance through shelter, aims to strengthen its vision of a world where everyone has a decent place to live. With over 140,000 families being served by our ministry, you can help us continue our mission of putting God’s love into action by bringing people together to build homes, communities, and hope.
                    </small>
                </p>
                <button class="btn btn-outline-info btn-outline-elevation font-weight-bold text-uppercase py-2 px-3">Learn More</button>
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

        <div class="row flex-column-reverse flex-md-row">
            <div class="col-lg-6 p-5">
                <div class="m-3">
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
                    <p class="mb-5">
                        Various individuals and groups have helped pave the way to strengthen communities, build safer and <br> decent homes, and transform the lives of families living in them.
                    </p>

                    <div class="row mb-5">
                        <div class="col-md-12">
                            <div class="d-inline px-5">
                                <AmericanExpress/>
                            </div>
                            <div class="d-inline px-5">
                                <Google/>
                            </div>
                            <div class="d-inline px-5">
                                <Paypal/>
                            </div>
                            <div class="d-inline px-5">
                                <Amazon/>
                            </div>
                            <div class="d-inline px-5">
                                <Ebay/>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-outline-dark text-uppercase py-2 px-3">View More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/layouts/navbar.vue'

// Partners SVG
import AmericanExpress from '@/components/includes/american_express.vue'
import Google from '@/components/includes/google.vue'
import Paypal from '@/components/includes/paypal.vue'
import Amazon from '@/components/includes/amazon.vue'
import Ebay from '@/components/includes/ebay.vue'

export default {
  name: 'Home',
  components: {
      Navbar,
      AmericanExpress,
      Google,
      Paypal,
      Amazon,
      Ebay,
  },
}
</script>
<style media="screen">
    /* .custom-section {
        padding: 20px;
        overflow: hidden;
        justify-content: center;
        flex-direction: column;
        color: white;
    } */
    #home-main-cover {
        height: 150vh;
        /* background: url('../../assets/images/globe_header@2x.png') no-repeat center center fixed; */
        background: url('../../assets/images/globe_header@2x.png');
        background-size: cover;
        background-position: top center;
        /* background-repeat: no-repeat; */
        /* background-attachment: fixed; */
    }
    img.img-fluid {
        width:100% !important;
        /* background-size: cover !important; */
    }
</style>
