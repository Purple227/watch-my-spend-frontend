<template>


    <div class="container-fluid">

      <div class="row">
    <div class="col-md-6 bg-col-one ">

       <a class="navbar-brand" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="" alt="Logo" width="150" height="100">
      </a> 

      <h4 class="text-color-custom"> Spend Category </h4>
      <p class="text-color-custom fw-light"> 
        Add the name of the category under which you make your spend.
    </p>


    <div :class="error.name == null ? '' : 'has-validation'">
      <input type="text" class="form-control" :class="error.name == null ? 'border border-light' : 'is-invalid'" placeholder="Name" v-model="form.name">
      <div class="invalid-feedback">
            {{  error.name  == null ? '' : error.name[0] }}
      </div>
    </div>


  <div class="row mt-5">

<div class="col-md-6">
    <div class="d-grid">
       <button class="btn fw-bold border border-success" type="button" style="color: #23AA88;" @click="goBack"> Go Back</button>
    </div>
</div>

<div class="col-md-6">
    <div class="d-grid">
       <button class="btn bg-custom-green fw-bold text-white" type="button" @click="submit"> Continue </button>
    </div>
</div>

</div>

    </div>

    <right-column></right-column>


    </div>
    </div>
    
    </template>
    
    
    
    
    <script>
    import axiosInstance from '@/axiosInstance';
    import  RightColumn from './RightColumn.vue';
    
    export default {

      components: {
        'right-column': RightColumn
      },

      data() {
        return {
    
          form : {
            name: null,
          },
    
          error: {},
    
          buttonStatus: false,
          checkStatus: '',    
          
        }
      },
    
    
      methods: {
    
        async submit() {
      this.buttonStatus == true

      try {
        const requestData = {
          name: this.form.name,
        };
        const response = await axiosInstance.post('/category/create', requestData);
        this.$router.push({ name: 'onboardComplete' });
        console.log(response)
      } catch (error) {
        this.buttonStatus = false
        this.error = error.response.data.error.message
      }
    },

    goBack() {
      // Navigate back one step in the history
      this.$router.go(-1);
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