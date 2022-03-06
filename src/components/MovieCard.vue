<template>
  <section>
    <div class="more_info">
      <p>soon <span>in the cinema</span></p>
      <p>see all</p>
    </div>
    <section class="movies_content">
      <div class="movie_card">
        <h2>{{ moviesList[0].title }}</h2>
        <div class="movie_card_image">
          <img :src="moviesList[0].poster" alt="where is the image?" />
        </div>
        <div class="movie_card_description">
          {{ moviesList[0].description }}
        </div>
      </div>
      <div class="movie_card">
        <h2>{{ moviesList[1].title }}</h2>
        <div class="movie_card_image">
          <img :src="moviesList[1].poster" alt="where is the image?" />
        </div>
        <div class="movie_card_description">
          {{ moviesList[1].description }}
        </div>
      </div>
      <div class="movie_card">
        <h2>{{ moviesList[2].title }}</h2>
        <div class="movie_card_image">
          <img :src="moviesList[2].poster" alt="where is the image?" />
        </div>
        <div class="movie_card_description">
          {{ moviesList[2].description }}
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import image1 from "@/assets/predator.png";
import image2 from "@/assets/commando.png";
import image3 from "@/assets/terminator.png";

const moviesList = [
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
];
export default {
  // data(){
  //     return{
  //         cardMovie:{
  //             id: 1,
  //             title: "Predator",
  //             description:"A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
  //             poster: "../assets/predator.png",
  //         }
  //     }
  // },
  data() {
    return {
      moviesList,
    };
  },
};
</script>
