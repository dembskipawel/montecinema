//v2 version with v-for
<template>
  <section>
    <div class="more_info">
      <p>soon <span>in the cinema</span></p>
      <p>
        <router-link
          class="menu"
          active-class="top-menu-item--active"
          :to="{ name: 'AllMovies' }"
        >
          see all
        </router-link>
      </p>
    </div>
    <section class="movies_content">
      <div class="movie_card" v-for="movie in moviesList" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <div class="movie_card_image">
          <img :src="movie.poster" alt="movie poster" />
        </div>
        <div class="movie_card_description">
          {{ movie.description }}
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import image1 from "@/assets/predator.png";
import image2 from "@/assets/commando.png";
import image3 from "@/assets/terminator.png";

export default {
  data() {
    return {
      moviesList: [
        {
          id: 1,
          title: "Predator",
          description:
            "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
          poster: image1,
        },
        {
          id: 2,
          title: "Commando",
          description:
            "A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate",
          poster: image2,
        },
        {
          id: 3,
          title: "Terminator 2",
          description:
            "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
          poster: image3,
        },
      ],
    };
  },
};
</script>

<style>
@import "@/assets/styles/reset.css";
@import "@/assets/styles/styles.css";
</style>
