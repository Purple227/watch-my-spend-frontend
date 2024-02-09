<template>


    <div class="container-fluid bg-sign-up">

      <div class="row">
    
        <div class="col-md-6 p-md-5">
    
       <a class="navbar-brand d-block" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
      </a> 


<div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errorMessage !== null">
  <strong> {{ errorMessage  }}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>


      <h3 class="text-center text-color-custom"> Forget Password </h3>
      <p class="text-center text-color-custom mt-3"> Enter your email to reset password </p>
    
<div class="mt-4 mb-4" :class="error.email == null ? '' : 'has-validation'">
  <input type="email" class="form-control" :class="error.email == null ? 'border border-light' : 'is-invalid'" placeholder="Email Address" v-model="form.email">
  <div class="invalid-feedback">
    {{  error.email == null ? '' : error.email[0] }}
  </div>
</div>
    

    <div class="row">

        <div class="col-md-6">
            <div class="d-grid gap-2">
               <button class="btn fw-bold border border-success m-2" type="button" style="color: #23AA88;" @click="goBack"> Go Back</button>
            </div>
        </div>

        <div class="col-md-6">
            <div class="d-grid gap-2">
               <button class="btn bg-sign-up-2 fw-bold text-white m-2" type="button" @click="resendCode"> Reset Password </button>
            </div>
        </div>

    </div>
        
        </div>
    
        <div class="col-md-6 bg-image d-none d-md-block" style="background-color: #23AA88">
            <!-- BG image goes here-->
        </div>
    
      </div>
    </div>
    
    </template>




<script>
import axiosInstance from '@/axiosInstance';

export default {
  data() {
    return {

      form : {
        email: null,
      },

      error: {},

      buttonStatus: false,
      errorStatus: false,
      errorMessage: null,
      countdown: 20,
      timerInterval: null,
      
    }
  },

  methods: {

    goBack() {
      // Navigate back one step in the history
      this.$router.go(-1);
    },

    async resendCode() {
      this.buttonStatus == true
      this.startTimer()
      try {
        const requestData = {
          email: this.form.email,
        };

        const response = await axiosInstance.post('/resend/otp', requestData);
        this.$router.push({ name: 'resetPassword' })
        console.log('Response Data:', response);
      } catch (error) {
        this.buttonStatus = false
        this.error = error.response.data.error.message
        this.errorMessage = error.response.data.error.custom_message

        if (this.errorMessage == undefined) {
          this.errorMessage = null
        } else {
          this.error = {}
          this.errorMessage = error.response.data.error.custom_message
        }

      }
    },

    startTimer() {
      if (!this.timerInterval) {
        this.timerInterval = setInterval(() => {
          this.countdown--;
          if (this.countdown <= 0) {
            clearInterval(this.timerInterval);
            console.log(this.timerInterval)
            this.timerInterval = null;
          }
        }, 1000);
      }
      this.countdown = 20
    },

  },

}

</script>
    
    <style scoped>
    
    .bg-image {
          background-image: url(@/assets/Images/signup-illustration.svg); /* Replace 'your-image-url.jpg' with the path to your image */
          background-position: center; /* This property centers the background image */
          background-repeat: no-repeat; /* This property prevents the background image from repeating */
          height: 100vh; /* This ensures that the background covers the entire viewport height */
    }
    
    .bg-sign-up {
        background-color: #2A303C;
        height: 100vh; /* This ensures that the background covers the entire viewport height */
    }

    .bg-sign-up-2 {
        background-color: #37BB9A;
    }

    .text-color-custom {
    color: #CBCACA;   
    }

    input, input:focus {
  /* Set the background color to your desired color */
  background-color: #2A303C; /* Replace with your preferred color code or name */
  color: #CBCACA;
}

input::placeholder {
  /* Set the color for the placeholder text */
  color: #CBCACA; /* Replace with your preferred color code or name */
}

input:focus::placeholder {
  /* Set the color for the placeholder text when focused */
  color: #CBCACA; /* Replace with your preferred color code or name */
}
    
    </style>