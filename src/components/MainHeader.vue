<template>
  <div id="MainHeader">
    <header class="header">
      <div class="header_logo">
        <img src="../assets/logo.svg" alt="montecinema logo" />
      </div>
      <nav>
        <div class="mobile-nav"><span></span> <span></span> <span></span></div>
        <div class="desktop-nav"></div>
        <div class="desktop-nav">
          <div class="menu"><TopMenu /></div>
          <a href="#" class="register">Register</a>
          <button class="btn_login">Login</button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";

export default {
  name: "App",
  components: {
    TopMenu,
  },
};
</script>
}
