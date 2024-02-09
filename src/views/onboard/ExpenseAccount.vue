<template>


    <div class="container-fluid">

      <div class="row">
    <div class="col-md-6 bg-col-one ">

       <a class="navbar-brand" href="#">
        <img src="@/assets/Images/logo-full-dark-bg.svg" class="" alt="Logo" width="150" height="100">
      </a> 

      <h4 class="text-color-custom"> Expense Account </h4>
      <p class="text-color-custom fw-light"> 
        Add the name & current balances of all your accounts from which spends are done.
    </p>


<div class="row">

  <div class="col-md-6">
    <div :class="error.bank_name == null ? '' : 'has-validation'">
    <input type="text" class="form-control" :class="error.opening_balance == null ? 'border border-light' : 'is-invalid'"  placeholder="Name" v-model="form.name">
    <div class="invalid-feedback">
    {{  error.bank_name == null ? '' : error.bank_name[0] }}
  </div>
  </div>
  </div>

  <div class="col-md-6">
    <div :class="error.opening_balance_balance == null ? '' : 'has-validation'">
    <input type="text" class="form-control" :class="error.opening_balance == null ? 'border border-light' : 'is-invalid'"  placeholder="Current Balance" v-model="form.currentBalance">
    <div class="invalid-feedback">
    {{  error.opening_balance == null ? '' : error.opening_balance[0] }}
  </div>
  </div>
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
            currentBalance: null,
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
          bank_name: this.form.name,
          opening_balance: this.form.currentBalance,
        };
        const response = await axiosInstance.post('/account/create', requestData);
        this.$router.push({ name: 'category' });
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