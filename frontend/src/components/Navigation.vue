<template>
    <nav class="navigation">
        <checkbox class="fa-solid fa-bars navigation__menu-checkbox pointer color-primary" @click="toggleMenu"></checkbox>
        <div class="overlay hide">
            <ul class="navigation__list">
                <li class="navigation__list__item"><router-link to="/">Home</router-link></li>
                <li class="navigation__list__item"><router-link to="/about">About</router-link></li>
                <li class="navigation__list__item"><router-link to="/contact">Contact</router-link></li>
            </ul>
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
    font-size: 1.5rem;
    position: absolute;
    right: 10px;
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
.navigation__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.navigation__list__item {
    list-style: none;
    margin: 10px;
}
.navigation__list__item a {
    color: var(--tertiary-color);
    text-decoration: none;
}
.navigation__list__item a:hover {
    color: var(--primary-text-color-dark);
}
</style>