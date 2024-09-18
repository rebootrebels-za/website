<template>
    <header>
        <h1 class="header__title">
            <router-link to="/" class="link">Reboot Rebels</router-link>
        </h1>
        <div class="header__socials on-list">
            <a href="https://mastodon.social/@rebootrebels" class="link"><i class="fa-brands fa-mastodon"></i></a>
            <a href="https://discord.rebootrebels.co.za" class="link"><i class="fa-brands fa-discord"></i></a>
        </div>
        <div class="header__navigation">
            <i class="fa-solid fa-bars hamburger-menu link" @click="burgerShow(); changeBurgerMenuIcon()"></i>
            <div class="navigation__menu hide">
                <ul class="menu__list on-list">
                    <li class="menu__item"><router-link to="/" class="link">Home</router-link></li>
                    <li class="menu__item"><router-link to="/about" class="link">About</router-link></li>
                    <li class="menu__item"><router-link to="/blog" class="link">Blog</router-link></li>
                    <li class="menu__item"><router-link to="/contact" class="link">Contact</router-link></li>
                    <li class="menu__item"><router-link to="/services" class="link">Services</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>
  
<script>
  export default {
    name: 'HeaderComponent',
    methods: {
    burgerShow() {
        const menu = document.querySelector('.navigation__menu');
        menu.classList.toggle('hide');
    },
    changeBurgerMenuIcon() {
        const icon = document.querySelector('.hamburger-menu');
        const navMenu = document.querySelector('.navigation__menu');
        if (navMenu.classList.contains('hide')) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-x');
        } else {
            icon.classList.add('fa-x');
            icon.classList.remove('fa-bars');
        }
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        background-color: var(--secondary-color);
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem; /*Consider changing the scale*/
        border: 2px solid var(--primary-color);
        border-radius: 10px;
        position: relative;
    }
    .header__socials {
        position: absolute;
        left: 5rem; /*How does this scale??*/
        bottom: -20px;
        
    }
    .header__socials a:hover {
        cursor: pointer;
        color: var(--primary-color);
    }
    .on-list {
        border: 2px solid var(--primary-color);
        border-radius: 10px;
        padding: 0.5rem;
        background-color: var(--secondary-color);
        display: flex;
        gap: 2rem;
    }
    .hamburger-menu {
        color: var(--primary-color);
        font-size: 1.5rem;
        padding-right: 10px;
    }
     .navigation__menu {
        position: absolute;
        right: 3rem;
        bottom: -20px;
     }
    .menu__list {
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }
</style>
  