<template>
    <Hero />
    <Offer />
</template>
  
<script>

    import Hero from '../components/side-panel/Hero.vue';
    import Offer from '../components/Offer.vue';

    export default {
        name: 'HomePage',
        components: { 
            Offer,
            Hero
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  