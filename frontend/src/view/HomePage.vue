<template>
    <Hero />
    <About />
</template>
  
<script>

    import Hero from '../components/Hero.vue';
    import About from '../components/About.vue';

    export default {
        name: 'HomePage',
        components: {
            Hero,
            About
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  