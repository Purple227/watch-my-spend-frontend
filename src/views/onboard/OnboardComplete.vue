<template>


    <div class="container-fluid">

      <div class="row">
    <div class="col-md-6 bg-col-one ">

       <a class="navbar-brand" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="" alt="Logo" width="150" height="100">
      </a> 

      <h4 class="text-color-custom"> Completed! </h4>
      <p class="text-color-custom fw-light"> 
        You are all set Continue to your Dashboard and start watching your spends.
    </p>

    <br>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn bg-custom-green text-white" type="button" @click="dashboardNav"> dashboard </button>
</div>



    </div>

    <right-column></right-column>


    </div>
    </div>
    
    </template>
    
    
    
    
    <script>
    import  RightColumn from './RightColumn.vue';
    
    export default {

      components: {
        'right-column': RightColumn
      },

      data() {
        return { 
          // Reactive data
        }
      },
    
    
      methods: {

         dashboardNav() {
           this.$router.push({ name: 'dashboard' });
         },

      }
    
    
    }
    
    </script>
    
    <style scoped>

    .text-color-custom {
        color: #CBCACA;
    }
    
    input, input:focus{
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

    .bg-col-one {
    background-color: #2A303C;
    height: 100vh;
}

.bg-dark {
  background-color: #2A303C;
}
.bg-custom-green {
  background-color: #37BB9A;
}
    
    </style>