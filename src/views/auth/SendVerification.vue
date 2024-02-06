<template>


    <div class="container-fluid bg-sign-up">

      <div class="row">
    
        <div class="col-md-6 p-md-5">
    
       <a class="navbar-brand d-block" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="mx-auto d-block" alt="Logo" width="150" height="100">
      </a> 


      <h3 class="text-center text-color-custom"> Forget Password </h3>
      <p class="text-center text-color-custom mt-3"> Enter your email to reset password </p>
    
    <div class="has-validation mt-5 mb-3">
      <input type="email" class="form-control is-invalid" id="exampleFormControlInput1" placeholder="Email">
    
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
            Email character is needed
      </div>
    </div>
    

    <div class="row">

        <div class="col-md-6">
            <div class="d-grid gap-2">
               <button class="btn fw-bold bg-sign-up border border-success" type="button" style="color: #23AA88;"> Go Back</button>
            </div>
        </div>

        <div class="col-md-6">
            <div class="d-grid gap-2">
               <button class="btn bg-sign-up-2 fw-bold text-white" type="button"> Reset Password </button>
            </div>
        </div>

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

    .bg-sign-up-2 {
        background-color: #37BB9A;
    }

    .text-color-custom {
    color: #CBCACA;   
    }
    
    </style>