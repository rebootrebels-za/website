<template>
    <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Reboot Rebels</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
    background-color: var(--secondary-color);
    color: var(--primary-text-color-light);
    padding: 20px;
    text-align: center;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    margin-top: 20px;
}
</style>