<template>
     <div id="app">
        <header class="header">
        <div class="header_logo">
            <img src="../assets/logo.svg" alt="montecinema logo">
           </div>

        <nav>
            <div class="mobile-nav"><span></span> <span></span> <span></span> </div>
            <div class="desktop-nav">
                <a href="#" class="register">Register</a>
                <button class="btn_login">Login</button>
            </div>
        </nav>
    </header>
    </div>
</template>

<script>
export default {
  name: 'SimpleButton',
  props: {
    bgColor: {
      type: String,
      default: "green"
    },
    height: {
      type: Number,
      default: 100
    }
  },
  computed: {
    btnStyles() {
      return {
        "background-color": this.bgColor,
        height: `${this.height}px`
      };
    }
  }
};
</script>


<style>

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Fonts families */
    --ff-primary: 'Roboto', sans-serif;
    --ff-primary_alt: 'Roboto Mono', monospace;
    --ff-secondary: 'Eczar', serif;

    /* Fonts sizes */
    --fs-xs: 14px;
    --fs-small: 16px;
    --fs-normal: 18px;
    --fs-medium: 22px;
    --fs-medium_alt: 24px;
    --fs-large: 36px;
    --fs-large_alt: 48px;
    --fs-super-large: 80px;

    /* Colors */
    --cl-white: #FFFFFF;
    --cl-white_alt: #E5E5E5;
    --cl-pink: #FEF6F6;
    --cl-light-blue: #2F80ED;
    --cl-blue: rgba(47, 128, 237, 0.1);
    --cl-cherry-red: #EC1115;
    --cl-red: #A60C0E;
    --cl-light-red: #F47073;
    --cl-light_grey: #F0F0F0;
    --cl-grey: #85868D;
    --cl_mid_grey: #5D5D67;
    --cl-dark: #343541;
    --cl-dark_alt: #292A33;

}



body {
    background-color: var(--cl-white);
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding-bottom: 30px;

}

/* HEADER  */

@media(min-width: 0px) {

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 92%;
        margin: 0 auto;
        height: 73px;
        margin-top: 27px;
        position: relative;

    }

    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        position: absolute;
        top: 8px;
        right: 10px;
        height: 18px;
        width: 24px;
        cursor: pointer;
        z-index: 100;
    }

    .mobile-nav span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 1.5px;
        background-color: var(--cl_mid_grey);

    }

    .mobile-nav span:nth-child(1) {
        top: 0;
    }

    .mobile-nav span:nth-child(2) {
        top: calc(50% - 1.5px);
    }

    .mobile-nav span:nth-child(3) {
        bottom: 0;
    }

    .main_intro {
        display: flex;
        width: 100%;
    }


}

@media(min-width: 932px) {
    body {
        padding-bottom: 50px;
    }

    .mobile-nav {
        display: none;
    }

    .desktop-nav {
        display: flex;
        flex-direction: row;
    }

    .desktop-nav .register {
        margin-right: 20px;
        padding: 16px 30px;
        text-decoration: none;
        font-family: var(--ff-primary_alt);
        font-weight: 500;
        color: var(--cl-cherry-red);
        letter-spacing: 0.015em;
    }
    
    .desktop-nav .btn_login {
        width: 110px;
        height: 48px;
        padding: 16px 30px;
        border-radius: 24px;
        background-color: var(--cl-cherry-red);
        border: none;
        color: var(--cl-white);
        font-family: var(--ff-primary_alt);
        font-size: var(--fs-small);
        font-weight:500;
        line-height: 100%;
        cursor: pointer;
        transition: .3s;

    }

    .desktop-nav .btn_login:hover {
        background-color: var(--cl-red);
    }
}


</style>