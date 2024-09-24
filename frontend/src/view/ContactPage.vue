<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>For any questions or concerns, please contact us on Discord.</p>
    <a href="https://discord.rebootrebels.co.za" class="contact__socials-link">
        <i class="fa-brands fa-discord"></i>
    </a>
  </div>
</template>

<script>
export default {
    name: 'ContactPage',
}
</script>

<style scope>
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    color: var(--primary-text-color-dark);
}
.contact h1 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 20px;
}
.contact p {
    font-size: 1.2rem;
    text-align: center;
    color: var(--primary-text-color-light);
}
.contact__socials-link {
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
</style>