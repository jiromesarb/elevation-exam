<template>
    <div style="min-width: 100% !important;">
        <Navbar class="sticky" />
        <div class="home bg-light mx-0 d-flex align-items-center text-center px-5" id="get-in-touch-main-cover">

            <h1 class="display-4 mb-2"><span>Get In Touch</span></h1>
            <!-- <h5 class="font-weight-lighter">We’re here to help and answer any questions you have. <br>We look forward to hearing from you.</h5> -->
        </div>

        <div class="row d-flex justify-content-center py-5 bg-elevation-1">
            <div class="col-md-7 text-center">
                <div class="row  d-flex justify-content-center">
                    <div class="col-sm-3 my-4 text-center">
                        <h1 class="card-title <font-weight></font-weight>-lighter mb-0">
                            <i class="fa fa-map-marker text-elevation"></i>
                        </h1>
                        <p class="text-muted">
                            <small>
                                Makati City, Philippines
                            </small>
                        </p>
                    </div>
                    <div class="col-sm-3 my-4 text-center">
                        <h1 class="card-title font-weight-lighter mb-0">
                            <i class="fa fa-phone text-elevation"></i>
                        </h1>
                        <p class="text-muted">
                            <small>
                                +63 123 1234 123
                            </small>
                        </p>
                    </div>
                    <div class="col-sm-3 my-4 text-center">
                        <h1 class="card-title font-weight-lighter mb-0">
                            <i class="fa fa-envelope text-elevation"></i>
                        </h1>
                        <p class="text-muted">
                            <small>
                                info@greenleaf.com
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row d-flex justify-content-center pb-5 bg-elevation-1">
            <div class="col-md-7 text-center">
                <div class="card border-0 shadow m-0">
                    <div class="card-body">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="text-elevation text-center font-weight-bold text-uppercase mb-3">Contact us</h4>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6 my-2">
                                    <input type="text" class="form-control" placeholder="Name">
                                </div>
                                <div class="col-md-6 my-2">
                                    <input type="text" class="form-control" placeholder="E-mail">
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-md-12">
                                    <textarea name="message" rows="8" cols="80" class="form-control" placeholder="Message..."></textarea>
                                    <!-- <input type="text" class="form-control" placeholder="E-mail"> -->
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-md-12">
                                    <button class="btn btn-outline-info btn-outline-elevation font-weight-bold text-uppercase py-2 px-3">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
    #get-in-touch-main-cover {
        padding: 20px;
        height: 100vh;
        overflow: hidden;
        justify-content: center;
        flex-direction: column;
        color: white;

        background: url('../../assets/images/corinne-kutz-2.jpg');
        background-size: cover;
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
