<template>


    <div class="container-fluid bg-sign-up">

      <div class="row">
    
        <div class="col-md-6 p-md-5">
    
       <a class="navbar-brand d-block" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
      </a> 


      <h3 class="text-center text-color-custom"> Set New Password </h3>
      <p class="text-center text-color-custom mt-3"> Password already reset? <span style="color: #37BB9A;"> Sign in</span> </p>
    
    <div class="has-validation mt-4 mb-3">
      <input type="password" class="form-control is-invalid" id="exampleFormControlInput1" placeholder="Password">
    
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
            Password invalid 8 character is needed
      </div>
    </div>

    <div class="has-validation mt-4 mb-3">
      <input type="password" class="form-control is-invalid" id="exampleFormControlInput1" placeholder="Password">
    
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
            Password invalid 8 character is needed
      </div>
    </div>
    
    <div class="d-grid gap-2">
      <button class="btn fw-bold text-white" type="button" style="background-color: #37BB9A;">  Set New Password </button>
    </div>
        
        </div>
    
        <div class="col-md-6 bg-image" style="background-color: #23AA88">
            <!-- BG image goes here-->
        </div>
    
      </div>
    </div>
    
    </template>
    
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

    </style>