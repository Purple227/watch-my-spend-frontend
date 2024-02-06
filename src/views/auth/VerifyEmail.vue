<template>


  <div class="container-fluid bg-sign-up">


    <div class="row">
  
      <div class="col-md-6 p-md-5">


  
     <a class="navbar-brand d-block" href="#">
      <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
    </a> 


    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>


    <h3 class="text-center text-color-custom"> Verify Your Email </h3>
    <p class="text-center text-color-custom mt-2"> Entert the verification code sent </p>
    <p class="text-center text-color-custom mt-2 mb-3 fw-bold"> p*************@gmail.com </p>


  <div class="row g-6 ml-sm-2">

  <div class="col-2">
    <input type="text" class="form-control form-control-lg" :class="errorStatus == true ? 'border border-danger' : 'border border-success'" ref="input1" @input="handleInput(1)"  maxlength="1" required>
  </div>

  <div class="col-2">
    <input type="text" class="form-control form-control-lg" ref="input2" @input="handleInput(2)"  maxlength="1"  required>
  </div>


  <div class="col-2">
    <input type="text" class="form-control form-control-lg" ref="input3" @input="handleInput(3)" maxlength="1" required>
  </div>


  <div class="col-2">
    <input type="text" class="form-control form-control-lg " ref="input4" @input="handleInput(4)" maxlength="1" required>
  </div>

  <div class="col-2">
    <input type="text" class="form-control form-control-lg" ref="input5" @input="handleInput(5)" maxlength="1" required>
  </div>

  <div class="col-2">
    <input type="text" class="form-control form-control-lg" ref="input6" @input="handleInput(6)" maxlength="1" required>
  </div>

</div>


  
  <div class="row mt-5">

      <div class="col-md-6">
          <div class="d-grid gap-2">
             <button class="btn fw-bold bg-sign-up border border-success m-2" type="button" style="color: #23AA88;" @click="goBack"> Go Back</button>
          </div>
      </div>

      <div class="col-md-6">
          <div class="d-grid gap-2">
             <button class="btn bg-sign-up-2 fw-bold text-white m-2" type="button"> Verify Email </button>
          </div>
      </div>

  </div>

  <div class="">
    <p class="text-center text-color-custom mt-3 fw-bold" v-if="countdown == 20 || countdown == 0"> Didn't get the code?  <a href="#" class="link-offset-2 link-underline link-underline-opacity-0" style="color: #37BB9A;" @click="resendCode"> Resend  </a>  </p>
  <p class="text-center text-color-custom mt-3 fw-bold"> Please note OTP can only be resend after <a href="#" class="link-offset-2 link-underline link-underline-opacity-0" style="color: #37BB9A;"> {{  countdown == 0 ? 20 : countdown }}  </a> seconds </p>
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
        otpOne: null,
        otpTwo: null,
        otpThree: null,
        otpFour: null,
        otpFive: null,
        otpSix: null,
      },

      error: {},

      buttonStatus: false,
      email: null,
      countdown: 20,
      timerInterval: null,
      errorStatus: false,
      
    }
  },


  methods: {

    async submitCode() {
      this.buttonStatus == true
      try {
        const requestData = {
          otp: this.form.otpOne+this.form.otpTwo+this.form.otpThree.this.form.otpFour+this.form.otpFive+this.form.otpSix,
        };

        const response = await axiosInstance.post('/verify/otp', requestData);
        this.$router.push({ name: 'login' });
        // Do something with the response data if needed
        console.log('Response Data:', response.data);
      } catch (error) {
        this.buttonStatus = false
        this.errorStatus = true
        this.error = error.response.data.error.message
      }
    },

    goBack() {
      // Navigate back one step in the history
      this.$router.go(-1);
    },

    handleInput(fieldNumber) {
      if (this.$refs[`input${fieldNumber}`].value.length === 1) {
        const nextFieldNumber = fieldNumber + 1;
        if (this.$refs[`input${nextFieldNumber}`]) {
          this.$refs[`input${nextFieldNumber}`].focus();
        }
      }
    },

    async resendCode() {
      this.buttonStatus == true
      this.startTimer()
      try {
        const requestData = {
          email: this.email,
        };

        const response = await axiosInstance.post('/resend/otp', requestData);
        //this.$router.push({ name: 'login' });
        // Do something with the response data if needed
        console.log('Response Data:', response.data);
      } catch (error) {
        this.buttonStatus == false
        this.error = error.response.data.error.message
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
    }

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