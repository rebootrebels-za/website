<template>
    <div class="hero">
        <div class="hero__content">
            <!-- <h2 class="hero__content__community-description">
                A welcoming community <br>for tech enthusiasts <br>of all skill levels
            </h2> -->
            <h2 class="hero__content__welcome">
                Welcoming community 
            </h2>
            <p class="hero__content__community-description">
                A Commnuity for tech enthusiasts of all skill levels
            </p>
            <div class="CTA-Navigation">
                <div class="CTA-Navigation__box link">
                    <p class="box__title">Get Started</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'HeroComponent',
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: var(--primary-color);
        /* background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url(https://picsum.photos/id/227/800/300) center/cover no-repeat;
        height: 100%; Artificial height to make the image visible */
    }
    .hero__content {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .hero__content__welcome {
        text-align: center;
        margin: 0 2rem;
        color: var(--primary-text-color-light);
        font-size: 2rem;
    }
    .content__background{
        position: ;
    }
    .CTA-Navigation {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .CTA-Navigation__box {
        background-color: var(--secondary-color);
        padding: 1rem;
        border-radius: 10px;
        border-color: var(--primary-color);
        border-style: solid;
        width: 100%;
        text-align: center;
    }
    .box__title {
        color: var(--primary-text-color-light);
    }
</style>
  