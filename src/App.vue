<template>
  <div id="app">
      <MainHeader />
      <WelcomeSection />
      <!-- <MovieCard /> -->
      <MovieCardV2 />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import WelcomeSection from './components/WelcomeSection.vue'
// import MovieCard from './components/MovieCard.vue'
import MovieCardV2 from './components/MovieCardV2.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    WelcomeSection,
    // MovieCard,
    MovieCardV2
}
}
</script>


