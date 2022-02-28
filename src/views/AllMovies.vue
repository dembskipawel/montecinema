<template>
    <section>
        <MainHeader/>
        <p>AllMovies</p>   
    </section>      
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  name: 'AllMovies',
  components: {
    MainHeader,
  } 
}
</script>

<style >
  @import '@/assets/styles/reset.css';
  @import '@/assets/styles/styles.css';
</style>