<template>
    <nav class="navigation">
        <checkbox class="fa-solid fa-bars navigation__menu-checkbox pointer color-primary" @click="toggleMenu"></checkbox>
        <div class="overlay hide">
            <div class="overlay__sections">
                <div class="overlay__section">
                    <h3 class="navigation__title">Quick Index</h3>
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <router-link to="/" class="link" @click="closeMenu">Home</router-link>
                        </li>
                        <li class="navigation__item">
                            <router-link to="/about" class="link" @click="closeMenu">About</router-link>
                        </li>
                        <li class="navigation__item">
                            <router-link to="/contact" class="link" @click="closeMenu">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <!-- <div class="overlay__section">
                    <h3 class="navigation__title">Services</h3>
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <router-link to="/repair" class="link" @click="closeMenu">Hardware Repair</router-link>
                        </li>
                    </ul>
                </div>                                               -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComponent',
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            const menu = document.querySelector('.overlay');
            const checkbox = document.querySelector('.navigation__menu-checkbox');
            if (this.showMenu) {
                menu.classList.remove('hide');
                checkbox.classList.remove('color-primary');
                checkbox.classList.add('color-secondary');
            } else {
                menu.classList.add('hide');
                checkbox.classList.remove('color-secondary');
                checkbox.classList.add('color-primary');
            }
        },
        closeMenu() {
            this.showMenu = false;
            const menu = document.querySelector('.overlay');
            const checkbox = document.querySelector('.navigation__menu-checkbox');
            menu.classList.add('hide');
            checkbox.classList.remove('color-secondary');
            checkbox.classList.add('color-primary');
        }
    }
}
</script>

<style scoped>
.color-primary {
    color: var(--primary-color);
}
.color-secondary {
    color: var(--secondary-color);
}
.navigation {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
}
.navigation__menu-checkbox{
    font-size: 3rem;
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 2;
}
.overlay {
    background-color: var(--primary-color);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}
.overlay__sections {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border: 2px solid var(--secondary-color);
}
.overlay__section {
    padding: 20px;
    text-align: center;
}
.navigation__list{
    list-style: none;
}
.navigation__title {
    color: var(--tertiary-color);
    font-size: 1.5rem;
}
.navigation__item {
    margin: 10px 0;
    font-size: 1.2rem;
}
</style>