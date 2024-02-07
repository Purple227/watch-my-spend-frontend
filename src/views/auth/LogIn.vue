<template>


    <div class="container-fluid bg-sign-up">
      <div class="row">
    
        <div class="col-md-6 p-md-5">
    
       <a class="navbar-brand d-block" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
      </a> 


<div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errorMessage !== null">
  <strong> {{  errorMessage }}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
    
<div class="mt-4" :class="error.email == null ? '' : 'has-validation'">
  <input type="email" class="form-control" :class="error.email == null ? 'border border-light' : 'is-invalid'" placeholder="Email Address" v-model="form.email">
  <div class="invalid-feedback">
    {{  error.email == null ? '' : error.email[0] }}
  </div>
</div>
    
<div class="mt-4 mb-4" :class="error.password == null ? '' : 'has-validation'">
  <input type="password" class="form-control" :class="error.password == null ? 'border border-light' : 'is-invalid'" placeholder="Password" v-model="form.password">
  <div class="invalid-feedback">
    {{  error.password == null ? '' : error.password[0] }}
  </div>
  <router-link :to="{ name: 'sendVerification' }" class="link-offset-2 link-underline link-underline-opacity-0 text-end" style="color: #37BB9A; float: right;"> Forget Password? </router-link>
</div>

<br>
    
    <div class="d-grid gap-2 ">
      <button class="btn fw-bold text-white" type="button" style="background-color: #37BB9A;" @click="submit"> Login </button>
    </div>
    
    <p class="text-center text-color-custom mt-3"> Already have an account? <router-link :to="{ name: 'register' }" class="link-offset-2 link-underline link-underline-opacity-0" style="color: #37BB9A;"> Sign Up </router-link> </p>
    
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
        email: null,
        password: null,
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
        };
        const response = await axiosInstance.post('/login', requestData);
        localStorage.setItem('bearerToken', response.data.data.token);

        if(response.data.data.user.email_verified_at == null ) {
          this.$router.push({ name: 'verifyEmail' })
        } else if(response.data.data.user.onboard != 3) {
          this.$router.push({ name: 'profile' })
        }else {
          this.$router.push({ name: 'dashboard' })
        }
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
  border: 1px solid #CBCACA;
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