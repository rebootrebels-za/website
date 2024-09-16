<template>
  <div class="about">
    <h2 class="about__title">
        About Us
    </h2>
    <p class="about__description">
        We are a community of tech enthusiasts who are passionate about learning and sharing knowledge. <br>Our community is open to everyone, regardless of skill level. <br>We believe that everyone has something to contribute, and we welcome you to join us on our journey of learning and growth.
    </p>
  </div>
</template>

<script>
export default {
    name: 'AboutComponent',
}
</script>

<style>
    .about {
        margin: 2rem;
        border: 2px solid var(--primary-color);
        border-radius: 10px;
    }
    .about__title {
        text-align: center;
        color: var(--primary-text-color-light);
    }
    .about__description {
        text-align: center;
        margin: 0 2rem;
        color: var(--primary-text-color-light);
    }
</style>