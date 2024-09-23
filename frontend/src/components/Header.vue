<template>
    <header class="header">
        <h1 class="header__title">Reboot Rebels</h1>
        <section class="header__socials">
            <a href="https://www.facebook.com" class="header__socials-link">
                <i class="fa-brands fa-discord"></i>
            </a>
            <a href="https://www.twitter.com" class="header__socials-link">
                <i class="fa-brands fa-mastodon"></i>
            </a>
        </section>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)),url(../assets/img/header-background.png) no-repeat center center/cover;
    height: 100%;
    width: 100%;
}
.header__title {
    color: var(--primary-text-color-light);
    font-size: 3rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
.header__socials {
    position: absolute;
    bottom: 10px;
    left: 10px;
}
.header__socials-link {
    color: var(--primary-text-color-light);
    font-size: 2rem;
    margin: 0 10px;
}
</style>