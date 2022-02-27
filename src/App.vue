<template>
  <div id="app">
      <MainHeader />
      <WelcomeSection />
      <MovieCard />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import MovieCard from './components/MovieCard.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    WelcomeSection,
    MovieCard
}
}
</script>


