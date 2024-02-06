<template>


<div class="container-fluid bg-sign-up">
  <div class="row">

    <div class="col-md-6 p-md-5">

   <a class="navbar-brand" href="#">
    <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
  </a> 


<div class="mt-4" :class="error.email == null ? '' : 'has-validation'">
  <input type="email" class="form-control" :class="error.email == null ? 'border border-light' : 'is-invalid'" placeholder="Email Address" v-model="form.email">
  <div class="invalid-feedback">
    {{  error.email == null ? '' : error.email[0] }}
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


<div class="d-grid gap-2 ">
  <button class="btn fw-bold text-white" type="button" style="background-color: #37BB9A;" @click="submit" :disabled="buttonStatus"> Create Account </button>
</div>

<div class="form-check mb-3 mt-3">
  <input class="form-check-input border border-1" type="checkbox" v-model="form.isChecked" style="background-color: #2A303C;">
  <label class="form-check-label text-color-custom" >
     I agree to the <span style="color: #37BB9A;"> Terms Of services </span> and <span style="color: #37BB9A;"> Privacy Policy </span>
  </label>

  <div class="text-danger" v-if="form.isChecked == false">
    {{ checkStatus }}
  </div>

</div>

<p class="text-center text-color-custom mt-3"> Already have an account?  <router-link :to="{ name: 'login' }" class="link-offset-2 link-underline link-underline-opacity-0" style="color: #37BB9A;"> Login </router-link>  </p>

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
        passwordConfirmation: null,
        isChecked: false
      },

      error: {},

      buttonStatus: false,
      checkStatus: '',

      
    }
  },


  methods: {

    async submit() {
      this.buttonStatus == true

      if (this.form.isChecked == false) {
      return this.checkStatus = 'Please Accept Our terms and Condition'
      }

      try {
        const requestData = {
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.passwordConfirmation,
          term_condition: this.form.isChecked
        };

        const response = await axiosInstance.post('/register', requestData);
        localStorage.setItem('bearerToken', response.data.data.token);
        this.$router.push({ name: 'verifyEmail' });
        // Do something with the response data if needed
        console.log('Response Data:', response.data.data.token);
      } catch (error) {
        this.buttonStatus = false
        this.error = error.response.data.error.message
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
      height: 100vh;
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