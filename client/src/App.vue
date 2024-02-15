<script>
import FooterP from "./components/FooterP.vue"
import HeaderP from "./components/HeaderP.vue"
// import Head from "./components/Head.vue"
import Home from "./components/Home.vue"

export default {
  components: {
    FooterP,
    HeaderP,
    Home
  },
}
</script>

<template>
 <div>
    <!-- <Head /> -->
    <!-- <HeaderP /> -->
    <router-view />
    <FooterP />
  </div>

  
</template>

<style scoped></style>