<template>
    <div class="header">
        <div class="header__brand-text">
            <h1 class="brand-text__brand-name">
                <router-link to="/" class="link no-underline">Reboot Rebels</router-link>
            </h1>
            <sub class="brand-text__slogan">
                Tech Community for Every Skill Level
            </sub>
        </div>
        <div class="header__socials hide">
            <a href="#" class="link socials__link"><i class="fa-brands fa-mastodon socials__icon"></i></a>
            <a href="#" class="link socials__link"><i class="fa-brands fa-discourse socials__icon"></i></a>
            <a href="#" class="link socials__link"><i class="fa-solid fa-comment-dots socials__icon"></i></a>
        </div>
        <div class="header__nav">
            <router-link to="/login" class="link nav__login">Login</router-link>
            <router-link to="/register" class="link nav__register">Register</router-link>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'HeaderComponent',
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: var(--primary-color);
        color: white;
    }
    .brand-text__brand-name {
        margin: 0;
    }
    .brand-text__slogan {
        font-size: 0.8rem;
    }
    .nav__login {
        margin-right: 1rem;
    }
    .nav__register {
        margin-right: 1rem;
    }
    .link {
        color: white;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }
    .no-underline:hover {
        text-decoration: none;
    }
    .socials__icon {
        margin-right: 1rem;
        font-size: 1.5rem;
    }
    .socials__link {
        color: white;
    }
</style>
  