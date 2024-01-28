<template>

<div class="bg-default">


<nav class="navbar landing-page">
<div class="container-fluid mt-md-5">

  <a class="navbar-brand" href="#">
    <img src="@/assets/Images/Website-Icon-WhiteBg@1x.svg" alt="Logo" width="50" height="50">
  </a>

    <button 
    class="btn bg-btn-custom text-white fw-bold p-3" 
    type="submit"
    style="font-size: 13px;">  
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
  <button class="btn text-white rounded-pill bg-btn-custom  fw-bold p-2" type="button">
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



<div class="container-fluid text-center">
  <div class="row">

    <div class="col-md-3">
<div class="card mb-3 p-3" style="max-width: 18rem; background-color: #C44E0C;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Awareness </h5>
    <p class="card-text text-color-custom"> Understand every transaction & truly know where your money is going</p>
  </div>
</div>
</div>
    

    <div class="col-md-3">
        <div class="card mb-3 p-3" style="max-width: 18rem; background-color: #1D52BB;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Analysis </h5>
    <p class="card-text text-color-custom"> Dive deep into into spending habits to identify patterns & potential savings</p>
  </div>
    </div>
    </div>

    <div class="col-md-3">
        <div class="card mb-3 p-3" style="max-width: 18rem; background-color: #B109D5;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Adaption </h5>
    <p class="card-text text-color-custom"> Adjust behaviour based on insights. ensuring money is spent wisely</p>
  </div>
    </div>
    </div>

    <div class="col-md-3">
        <div class="card mb-3 p-3" style="max-width: 18rem; background-color: #4D7B1F;">
  <div class="card-body">
    <h5 class="card-title fw-bold text-color-custom"> Achievement </h5>
    <p class="card-text text-color-custom"> Reach financial goals by staying informed. disciplined and proactive.</p>
  </div>
    </div>
    </div>


</div>
</div>


</div>


</template>

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