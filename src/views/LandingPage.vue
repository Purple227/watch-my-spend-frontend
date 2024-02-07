
<template>

<div class="bg-default">


<nav class="navbar landing-page">
<div class="container-fluid mt-md-5">

  <router-link :to="{ name: 'register' }" class="navbar-brand">
    <img src="@/assets/Images/Website-Icon-WhiteBg@1x.svg" alt="Logo" width="50" height="50">
  </router-link>

    <button 
    class="btn bg-btn-custom text-white fw-bold p-3" 
    type="submit"
    style="font-size: 13px;" @click="getStarted">  
      TRACK MY EXPENSE 
    <i class="bi bi-arrow-right"></i> 
    </button>

</div>
</nav>


<div class="container-fluid landing-page">

<div class="card border border-0 text-center">
  <div class="card-body">

    <p class="text-color-custom fw-bolder fs-1 ">
        Where does all your money go?
    </p>

    <p class="text-color-custom fs-4">
        Stop wondering. 'How much have i spent? How much should i save? Could i save more?'
        <br>
        Discover where every penny goes and take control of your financial nature. 
    </p>

    <img class="img-fluid"  src="@/assets/Images/hero.svg" alt="Logo">

  </div>
</div>

</div>

<hr class="border border-1 fw-bold">


<div class="container-fluid landing-page">

<div class="card border border-0 text-center">
  <div class="card-body">

    <p class="text-color-custom fw-bolder fs-2">
        The Financial Blindspot We All Face?
    </p>

    <p class="text-color-custom fs-5">
        Spending without realizing, unseen expenses, and the mystery of the disapearing savings.
    </p>


 <div class="d-grid gap-2 col-4 mx-auto ">
  <button class="btn text-white rounded-pill bg-btn-custom  fw-bold p-2" type="button" @click="getStarted">
    Become Financialy Aware
</button>
</div>

  </div>
</div>

</div>

<hr class="border border-1 fw-bold rounded-pill">


<div class="container-fluid landing-page">

<div class="card border border-0 text-center">
  <div class="card-body">

    <p class="text-color-custom fw-bolder fs-2">
        Build Financially Smart Habits - One Step at a Time
    </p>

  </div>
</div>

</div>



<div class="container-fluid landing-page">
  <div class="row">

    <div class="col-md-3">
<div class="card mb-3 p-3" style="background-color: #C44E0C; height: 170px;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Awareness </h5>
    <small class="card-text text-color-custom"> Understand every 
      
      transaction & truly know 
      
      where your money is going</small>
  </div>
</div>
</div>
    

    <div class="col-md-3">
        <div class="card mb-3 p-3" style="background-color: #1D52BB; height: 170px;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Analysis </h5>
    <small class="card-text text-color-custom"> Dive deep into into spending 
      
      habits to identify patterns & 
      
      potential savings</small>
  </div>
    </div>
    </div>

    <div class="col-md-3">
        <div class="card mb-3 p-3" style="background-color: #B109D5; height: 170px;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Adaption </h5>
    <small class="card-text text-color-custom"> Adjust behaviour based on 
      
      insights. ensuring money is 
      pent wisely</small>
  </div>
    </div>
    </div>

    <div class="col-md-3">
        <div class="card mb-3 p-3" style="background-color: #4D7B1F; height: 170px;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Achievement </h5>
    <small class="card-text text-color-custom"> Reach financial goals by 
      
      staying informed. 
      disciplined and proactive.</small>
  </div>
    </div>
    </div>


</div>
</div>


<div class="container-fluid landing-page">

<div class="card border border-0 text-center">
  <div class="card-body">

    <p class="text-color-custom fw-bolder fs-5">
        It isn't just about tracking. it's about growing!
    </p>

    <p class="text-color-custom fs-6">
        Gradually develop habits that make you Financially savvy.
        <br>
        Understand, analyze, and adapt
    </p>


  </div>
</div>

</div>


<div class="container-fluid landing-page">
  <div class="row align-items-center">

    <div class="col-md-6">
      <img class="img-fluid"  src="@/assets/Images/feature1.svg" alt="Logo">
    </div>
    

    <div class="col-md-6">
        <div class="card mb-3 p-3 border border-0">
  <div class="card-body">

    <button type="button" class="btn rounded-pill text-white fw-bold btn-sm" style="background-color: #C44E0C;"> Awareness </button>
    <p> </p>
    <h5 class="card-title fw-bold text-color-custom"> Total Transparency On Every Spend </h5>
    <p class="card-text text-color-custom"> Whether it's a simple cofee purchase or monthly
      utility bills, log expenses swiftly, categorize them,
      and watch as your financial story unfolds in real-time.
    </p>
  </div>
    </div>
    </div>

</div>
</div>


<div class="container-fluid landing-page">
  <div class="row align-items-center">

    <div class="col-md-6">
        <div class="card mb-3 p-3 border border-0">
  <div class="card-body">

    <button type="button" class="btn rounded-pill text-white fw-bold btn-sm" style="background-color: #1C53BB;"> Awareness </button>
    <p> </p>
    <h5 class="card-title fw-bold text-color-custom"> Smart Insights, Smarter Spending </h5>
    <p class="card-text text-color-custom"> No need to spend hours setting up budgets.
      Discover potential savings, and get smart alerts
      when nearing your typical spend. Naturally develop
      smarter spending habits over time.
    </p>
  </div>
    </div>
    </div>


    <div class="col-md-6">
      <img class="img-fluid"  src="@/assets/Images/feature2.svg" alt="Logo">
    </div>

</div>
</div>



<div class="container-fluid landing-page">
  <div class="row align-items-center">

    <div class="col-md-6">
      <img class="img-fluid"  src="@/assets/Images/feature3.svg" alt="Logo">
    </div>
    

    <div class="col-md-6">
        <div class="card mb-3 p-3 border border-0">
  <div class="card-body">

    <button type="button" class="btn rounded-pill text-white fw-bold btn-sm" style="background-color: #B008D5;"> Adaptation </button>
    <p> </p>
    <h5 class="card-title fw-bold text-color-custom"> Recommendations Tailored For You </h5>
    <p class="card-text text-color-custom"> From cost-cutting tips to saving strategies &
      investment insights, recieve personalalized advice
      that guide you towards wiser spending. Adaptive 
      suggestion on where to cut costs, optimize spends,
      and how best to put aside that savings.
    </p>
  </div>
    </div>
    </div>

</div>
</div>



<div class="container-fluid landing-page">
  <div class="row align-items-center">

    <div class="col-md-6">
        <div class="card mb-3 p-3 border border-0">
  <div class="card-body">

    <button type="button" class="btn rounded-pill text-white fw-bold btn-sm" style="background-color: #4C7A1F;"> Achievements </button>
    <p> </p>
    <h5 class="card-title fw-bold text-color-custom"> Track and Triumph Over Financial Goals </h5>
    <p class="card-text text-color-custom"> Set your financial milestone and watch as you approach 
      and achieve them. The journey to your financial discipline 
      and independence become a natural progress not a
      strenous task
    </p>
  </div>
    </div>
    </div>


    <div class="col-md-6">
      <img class="img-fluid"  src="@/assets/Images/feature4.svg" alt="Logo">
    </div>

</div>
</div>

<hr class="border border-1 fw-bold">

<div class="container-fluid landing-page">
<div class="card border border-0 text-center">
  <div class="card-body">

    <p class="text-color-custom fw-bolder fs-2">
        Your Journey To Financial Mastery Awaits
    </p>

    <p class="text-color-custom fs-5">
        Begin your journey to financial fluency and let every penny have a purpose.
    </p>


 <div class="d-grid gap-2 col-4 mx-auto ">
  <button class="btn rounded-pill fw-bold p-2" type="button" style="background-color: white; color: #4FC3A6;" @click="getStarted">
    Become Financialy Aware
</button>
</div>

  </div>
</div>
</div>


<hr class="border border-1 fw-bold">


<div class="container-fluid landing-page">

  <div class="row p-3">
    
    <div class="col-md-10">
      <p>
      <a class="navbar-brand" href="#">
         <img src="@/assets/Images/Website-Icon-WhiteBg@1x.svg" alt="Logo" width="50" height="50">
     </a>
     </p>

     <p>
     <small class="text-color-custom fw-bold"> Copyright © 2024. All Right Reserved</small>
      </p>
    
     <i class="bi bi-youtube text-color-custom fs-5 m-2"></i>
     <i class="bi bi-facebook text-color-custom fs-5 m-2"></i>
     <i class="bi bi-linkedin text-color-custom fs-5 m-2"></i>
     <i class="bi bi-share text-color-custom fs-5 m-2"></i>
     <i class="bi bi-twitter-x text-color-custom fs-5 m-2"></i>

    </div>

    <div class="col-md-2">
      <p>
     <small class="text-color-custom fw-bold"> Terms </small>
      </p>

      <p>
     <small class="text-color-custom fw-bold"> Privacy Piolicy </small>
      </p>

    </div>

  </div>
</div>

</div>


</template>




<script>

export default {
  data() {
    return {
      // Data
    }
  },

  methods: {

    getStarted() {
      this.$router.push({ name: 'register' })
    }


  }



}

</script>





<style scoped>

.bg-default {
    background-color: #2A313D;
}
.landing-page {
    background-color: #2A313D;
    padding-left: 180px;
    padding-right: 180px;
}

.bg-btn-custom {
    background-color: #36BA9A;
}

.card, .navbar {
    background-color: #2A313D;
}

.text-color-custom {
    color: #CBCACA;
}

/* Media query for mobile devices */
@media only screen and (max-width: 767px) {

.landing-page {
    background-color: #2A313D;
    padding-left: 5px;
    padding-right: 5px;
}
 
}

</style>
