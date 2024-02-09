<template>


<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 bg-col-one ">

       <a class="navbar-brand" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="" alt="Logo" width="150" height="100">
      </a> 

      <h4 class="text-color-custom"> Profile Setup </h4>

<div class="mb-3 mt-3">
  <img src="@/assets/Images/default-img.png" class="bg-light rounded-circle m-2" alt="default" width="100" height="100" v-if="form.image == null">
  <img :src="imageURL" class="bg-light rounded-circle m-2" alt="default" width="100" height="100" v-else>
  <input type="file" class="form-control d-inline" style="width: 100px; background-color: #37BB9A;" @change="fileUpload">
</div>

    <div :class="error.name == null ? '' : 'has-validation'">
      <input type="text" class="form-control" :class="error.name == null ? 'border border-light' : 'is-invalid'" placeholder="Name" v-model="form.name">
      <div class="invalid-feedback">
            {{  error.name  == null ? '' : error.name[0] }}
      </div>
    </div>
    
    <div class="mt-4" :class="error.city == null ? '' : 'has-validation'">
      <input type="email" class="form-control" :class="error.city == null ? 'border border-light' : 'is-invalid'" placeholder="City" v-model="form.city">
      <div class="invalid-feedback">
        {{  error.city == null ? '' : error.city[0] }}
      </div>
    </div>
    
    <div class="mt-4" :class="error.occupation == null ? '' : 'has-validation'">
      <input type="text" class="form-control" :class="error.occupation == null ? 'border border-light' : 'is-invalid'" placeholder="Occupation" v-model="form.occupation">
      <div class="invalid-feedback">
        {{  error.occupation == null ? '' : error.occupation[0] }}
      </div>
    </div>
    
    <div class="mt-4 mb-3" :class="error.currency == null ? '' : 'has-validation'">
      <input type="text" class="form-control" :class="error.currency == null ? 'border border-light' : 'is-invalid'"  placeholder="Currency" v-model="form.currency">
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        {{  error.currency == null ? '' : error.currency[0] }}
      </div> 
    </div>

<div class="d-grid gap-2 d-md-flex justify-content-md-end p-md-2">
  <button class="btn fw-bold text-white" type="button" style="background-color: #37BB9A;" @click="submit" :disabled="buttonStatus"> Continue </button>
</div>

    </div>

    <right-column></right-column>

    </div>

    </div>
    
    </template>
    
    
    
    
    <script>
    import  RightColumn from './RightColumn.vue';

    import axiosInstance from '@/axiosInstance';
    
    export default {

      components: {
        'right-column': RightColumn
      },

      data() {
        return {
    
          form : {
            name: null,
            city: null,
            occupation: null,
            currency: null,
            image: null,
            imageName: null
          },
    
          error: {},
    
          buttonStatus: false,
          checkStatus: '',
          imageURL: null
    
          
        }
      },
    
    
      methods: {

        fileUpload(e) {
          this.form.image = e.target.files[0]
          this.form.imageName = e.target.files[0].name
          this.imageURL = URL.createObjectURL(this.form.image)
        },
    
        async submit() {
      this.buttonStatus == true

      try {
        const requestData = {
          name: this.form.name,
          city: this.form.city,
          occupation: this.form.occupation,
          currency: this.form.currency
        };
        const response = await axiosInstance.post('/profile/setup', requestData);
        this.$router.push({ name: 'account' });
        console.log(response)
      } catch (error) {
        this.buttonStatus = false
        this.error = error.response.data.error.message
      }
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
    
    </style>