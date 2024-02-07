<template>


    <div class="container-fluid bg-sign-up">

      <div class="row">
    
        <div class="col-md-6 p-md-5">
    
       <a class="navbar-brand d-block" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
      </a> 


      <h3 class="text-center text-color-custom"> Set New Password </h3>
      <p class="text-center text-color-custom mt-3"> Password already reset? <router-link :to="{ name: 'register' }" class="link-offset-2 link-underline link-underline-opacity-0" style="color: #37BB9A;"> Sign in </router-link> </p>


<div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errorMessage !== null">
  <strong> {{ errorMessage  }}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    

<div class="mt-4 mb-4" :class="error.otp == null ? '' : 'has-validation'">
  <input type="text" class="form-control" :class="error.otp == null ? 'border border-light' : 'is-invalid'" placeholder="Enter OTP" v-model="form.otp">
  <div class="invalid-feedback">
    {{  error.otp == null ? '' : error.otp[0] }}
  </div>
</div>


<div class="mt-4" :class="error.password == null ? '' : 'has-validation'">
  <input type="password" class="form-control" :class="error.password == null ? 'border border-light' : 'is-invalid'" placeholder="Password" v-model="form.password">
  <div class="invalid-feedback">
    {{  error.password == null ? '' : error.password[0] }}
  </div>
</div>

<div class="mt-4 mb-3" :class="error.password_confirmation == null ? '' : 'has-validation'">
  <input type="password" class="form-control" :class="error.password_confirmation == null ? 'border border-light' : 'is-invalid'" placeholder="Confirm Password" v-model="form.passwordConfirmation">
  <div class="invalid-feedback">
    {{  error.password_confirmation == null ? '' : error.password_confirmation[0] }}
  </div> 
</div>
    
    <div class="d-grid gap-2">
      <button class="btn fw-bold text-white" type="button" style="background-color: #37BB9A;" @click="submit">  Set New Password </button>
    </div>
        
        </div>
    
        <div class="col-md-6 bg-image" style="background-color: #23AA88">
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
        otp: null,
        password: null,
        passwordConfirmation: null,
      },

      error: {},

      buttonStatus: false,
      errorMessage: null

      
    }
  },


  methods: {

    async submit() {
      this.buttonStatus == true

      try {
        const requestData = {
          email: this.form.email,
          password: this.form.password,
          otp: this.form.otp,
          password_confirmation: this.form.passwordConfirmation,
        };
        const response = await axiosInstance.post('/reset/password', requestData);
        console.log(response)
         this.$router.push({ name: 'login' })
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


  }



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