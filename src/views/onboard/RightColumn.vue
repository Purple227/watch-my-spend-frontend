
<template>

    <div class="col-md-6 d-none d-md-block bg-col-two text-center p-5">

      <div class="p-3">


        <br>
        <br>

      <i class="bi bi-person-vcard fs-5 p-2 rounded-5 text-white" :class="userData.on_board >= 0 ? 'bg-custom-green' : 'bg-dark'"></i>

      <br>
      <br>
      <br>

      <i class="bi bi-houses fs-5 p-2 rounded-5 text-white" :class="userData.on_board >= 1 ? 'bg-custom-green' : 'bg-dark'"></i>

      <br>
      <br>
      <br>

      <i class="bi bi-bag fs-5 p-2 rounded-5 text-white" :class="userData.on_board >= 2 ? 'bg-custom-green' : 'bg-dark'"></i>

      <br>
      <br>
      <br>

      <i class="bi bi-check-circle fs-5 p-2 rounded-5 text-white" :class="userData.on_board >= 3 ? 'bg-custom-green' : 'bg-dark'"></i>

      </div>


        <img src="@/assets/Images/logo-full-white-bg.svg" class="" alt="Logo" width="150" height="100">

        <p class="text-white fw-light">
        Copyright © 2024. All Right Reserved
      </p>


    </div>

</template>

<script>

import { useAuthUser } from '@/store/authenticate';

export default {

  data() {
    return {

      userData: {},
      
    }
  },

  mounted() {
   this.getAuthUser();
  },

  methods: {

    async getAuthUser() {
    await useAuthUser().fetchUserData();
    this.userData = useAuthUser().userData

    if ( this.userData == null ) {
      this.$router.push({ name: 'login' });
    }

  },

}



}
</script>

<style scoped>


.bg-custom-green {
  background-color: #00851C;
}
.bg-col-two {
    background-color: #23AA88;
    height: 100vh;
}

</style>