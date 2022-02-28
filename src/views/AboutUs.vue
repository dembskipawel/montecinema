<template>
    <section>
        <MainHeader/>
        <p>AboutUs</p>   
    </section>      
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  name: 'AboutUs',
  components: {
    MainHeader,
  } 
}
</script>

<style >
  @import '@/assets/styles/reset.css';
  @import '@/assets/styles/styles.css';
</style>