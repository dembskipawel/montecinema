<template>
  <div id="app">
    <!-- <router-view /> -->
    <MainHeader />
    <WelcomeSection />
    <!-- <MovieCard /> -->
    <MovieCardV2 />

    <section class="main_intro">
      <div class="wrapper">
        <div class="title">
          <h1>Online booking</h1>
        </div>
      </div>
    </section>
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
