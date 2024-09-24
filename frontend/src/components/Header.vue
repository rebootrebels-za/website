<template>
    <header class="header">
        <h1 class="header__title">Reboot Rebels</h1>
        <sub class="header__slogan"><strong>Empowering</strong> You to Learn, <strong>Supporting</strong> You to Succeed</sub>
        <section class="header__socials">
            <a href="https://discord.rebootrebels.co.za" class="header__socials-link">
                <i class="fa-brands fa-discord"></i>
            </a>
        </section>
        <section class="header__blog">
            <router-link to="/blog" class="header__blog-link">Read Our Blog</router-link>
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
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
.header__socials {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
}
.header__slogan {
    color: var(--primary-text-color-light);
    font-size: 1.5rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
.header__blog {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
}
.header__socials-link {
    color: var(--primary-text-color-light);
    font-size: 5rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
}

.header__blog-link {
    color: var(--primary-text-color-light);
    font-size: 1.5rem;
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid var(--primary-text-color-light);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    width: 200px;
}
</style>