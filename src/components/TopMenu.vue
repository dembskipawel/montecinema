<template>
  <nav class="top-menu">
    <router-link
      class="menu"
      exact-active-class="top-menu-item--active"
      :to="{ name: 'HomePage' }"
    >
      Home
    </router-link>

    <router-link
      class="menu"
      active-class="top-menu-item--active"
      :to="{ name: 'AllMovies' }"
    >
      Movies
    </router-link>

    <router-link
      class="menu"
      active-class="top-menu-item--active"
      :to="{ name: 'AllScreenings' }"
    >
      Screenings
    </router-link>

    <router-link
      class="menu"
      active-class="top-menu-item--active"
      :to="{ name: 'AboutUs' }"
    >
      About us
    </router-link>
  </nav>
</template>

<script></script>

<style>
@import "@/assets/styles/reset.css";
@import "@/assets/styles/styles.css";
</style>
