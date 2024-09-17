<template>
    <!-- <Hero /> -->
    <sideHero />
    <Offer />
    <Mission />
</template>
  
<script>

    // import Hero from '../components/Hero.vue';
    import sideHero from '../components/side-panel/Hero.vue';
    import Mission from '../components/Mission.vue';
    import Offer from '../components/Offer.vue';

    export default {
        name: 'HomePage',
        components: {
            // Hero,
            Mission, 
            Offer,
            sideHero
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  