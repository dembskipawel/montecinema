<template>
  <div>
    <MainHeader />
    <div class="main_intro_links_bar"></div>
    <div class="title">
      <h1>All the movies</h1>
    </div>
    <section class="movies_content" v-if="movies && movies.length">
      <div class="movie_card" v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>{{ formatLength(movie.length) }} min</p>
        <img :src="movie.poster_url" height="auto" />
        <p class="movie_card_tag">{{ movie.genre.name }}</p>
      </div>
    </section>

    <div v-if="errors && errors.length">
      <div v-for="error in errors" :key="error.error">
        {{ error.message }}
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import axios from "axios";

export default {
  name: "AllMovies",
  components: {
    MainHeader,
  },
  data() {
    return {
      movies: [],
      errors: [],
    };
  },
  methods: {
    formatLength(timeInMinutes = 0) {
      const hours = Math.floor(timeInMinutes / 60);
      const minutes = `0${timeInMinutes % 60}`.slice(-2);
      return `${hours}:${minutes}`;
    },
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/movies`);
      this.movies = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style>
@import "@/assets/styles/reset.css";
@import "@/assets/styles/styles.css";
</style>
