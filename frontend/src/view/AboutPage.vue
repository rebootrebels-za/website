<template>
    <div class="about-page">
        <h1 class="about-page__title">About Us</h1>
        <p class="about-page__content">Reboot Rebels is a community of tech enthusiasts who are passionate about learning and sharing their knowledge with others. We believe that technology should be accessible to everyone, and we strive to create a welcoming environment where people can come together to learn, collaborate, and grow.</p>
        <section class="about-page__socials">
            <h2 class="socials__title">Our Socials</h2>
            <a href="https://discord.rebootrebels.co.za" class="about-page__socials-link">
                <i class="fa-brands fa-discord"></i>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
}
</script>

<style scoped>
    h1 {
        color: var(--primary-color);
        text-align: center;
    }
    .about-page__content {
        color: var(--primary-text-color-light);
        font-size: 1.2rem;
        margin: 20px auto;
        max-width: 600px;
        text-align: center;
        line-height: 1.5;
    }
    .about-page__socials-link {
        color: var(--primary-color);
        font-size: 2rem;
        margin: 0 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 10px;
    }
    .socials__title {
        color: var(--primary-color);
        font-size: 1.5rem;
        text-align: center;
    }
</style>