<template>
    <div style="min-width: 100% !important;">
        <Navbar class="sticky" />
        <div class="home bg-light mx-0 d-flex align-items-end px-5" id="advocacy-main-cover">

        </div>
        <div class="row d-flex justify-content-center py-5 bg-elevation-1">

            <div class="col-md-7 text-center">
                <h3 class="text-elevation text-center font-weight-bold text-uppercase mb-3">Poverty and inequality in the Philippines remains a challenge.</h3>
                <p class="text-center mb-5">
                    <small>In the past 4 decades, the proportion of households living below the official poverty line has declined slowly and unevenly. Economic growth has gone through boom and bust cycles, and recent episodes of moderate economic expansion have had limited impact on the poor. Great inequality across income brackets, regions, and sectors, as well as unmanaged population growth, are considered some of the key factors constraining poverty reduction efforts.</small>
                </p>
                <button class="btn btn-outline-info btn-outline-elevation font-weight-bold text-uppercase py-2 px-3">Learn More</button>
            </div>
        </div>

        <div class="row d-flex justify-content-center py-5 bg-elevation-2">

            <div class="col-md-7 text-center">
                <h3 class="text-elevation text-center font-weight-bold text-uppercase mb-3">Our Goals.</h3>
                <p class="text-center mb-5">
                    <small>Through advocacy, technical assistance and capacity development, the Programme will ensure that (a) MDGs are monitored and mainstreamed in development plans and policies; (b) policies and schemes for social protection and inclusive and greener growth will be promoted; (c) access to and use of revenues from environmental and mineral resources, and overseas remittance for local development will be facilitated; and (d) local poverty reduction convergence efforts will be strengthened.</small>
                </p>
                <button class="btn btn-outline-info btn-outline-elevation font-weight-bold text-uppercase py-2 px-3">Read More</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 p-0">
                <img src="../../assets/images/sandy-zebua-a7n65pmnJ4Q-unsplash.jpg" class="img-fluid m-0" alt="">
            </div>
            <div class="col-lg-6 p-5">
                <div class="mx-4 my-3">
                    <h3 class="text-elevation text-uppercase font-weight-bold mb-3">Putting food on the table through SAPAT</h3>
                    <p class="mb-3">
                        <small>
                            Like many housewives in the poor province of Apayao in the Philippines, Betty Nadnaden had difficulty putting food on the table for her growing family. Times become more difficult during the drought that comes in the wake of El Niño. When the dry fields had cracked in places, rice was not just the staple food for Betty's family – it was the only food. Ulam (meat or vegetable dishes) was considered a luxury, and when available, served only in very small portions.
                        </small>
                    </p>
                    <a href="#" class="text-elevation text-uppercase float-right font-weight-bold">Read More <span class="fa fa-chevron-right"></span></a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 p-5">
                <div class="mx-4 my-3">
                    <h3 class="text-elevation text-uppercase font-weight-bold mb-3">Overseas Filipinos Remittances for Development Project</h3>
                    <p class="mb-3">
                        <small>
                            Jojo delos Santos is a 47-year-old father of two from Bohol province, in central Philippines. Each year, Jojo leaves the warmth of his family to spend seven cold months in the Arctic Ocean working as a cargo ship engineer.
                        </small>
                    </p>
                    <a href="#" class="text-elevation text-uppercase float-right font-weight-bold">Read More <span class="fa fa-chevron-right"></span></a>
                </div>
            </div>
            <div class="col-lg-6 p-0">
                <img src="../../assets/images/48f6c11b1fca4064ad5286ed34364623_18.jpg" class="img-fluid" alt="">
            </div>
        </div>

        <div class="row bg-elevation-1">
            <div class="col-md-12 py-5">
                <div class="my-5 text-center">
                    <p class="mb-5">
                        <small>
                            Advocacy, Capacity Building, Monitoring <br>and Pro-Poor Policies
                        </small>
                    </p>

                    <button class="btn btn-outline-info btn-outline-elevation font-weight-bold text-uppercase py-2 px-3">View more stories</button>
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
      Navbar,
  },
}
</script>
<style media="screen">
    .custom-section {
    }
    #advocacy-main-cover {
        padding: 20px;
        height: 100vh;
        overflow: hidden;
        justify-content: center;
        flex-direction: column;
        color: white;

        background: url('../../assets/images/03-touch-athletes-fist-bump.jpg');
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
    }
    img.img-fluid {
        width:100% !important;
        /* background-size: cover !important; */
    }
    .font-size-body {
        font-size: 28px !important;
    }
</style>
