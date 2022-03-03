<template>
  <div id="app">
    <!-- <router-view /> -->
    <MainHeader />
    <WelcomeSection />
    <MovieCard />
    <MovieCardV2 />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import WelcomeSection from "@/components/WelcomeSection.vue";
import MovieCardV2 from "@/components/MovieCardV2.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    WelcomeSection,
    // MovieCard,
    MovieCardV2,
  },
};
</script>
<style>
@font-face {
  font-family: "Eczar";
  src: local("Eczar-Bold"), url(@/fonts/Eczar-Bold.ttf) format("truetype");
}
</style>
