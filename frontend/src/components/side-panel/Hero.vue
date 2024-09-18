<template>
    <div class="hero">
        <div class="hero__side-panel">
            <h2 class="side-panel__title">
                Welcome
            </h2>
        </div>
        <div class="hero__main-panel">
            <p class="main-panel__text">
                Welcome to Reboot Rebels, a community dedicated to empowering individuals who feel overwhelmed or intimidated by programming, IT, or any tech-related hobby. <br> 
                We understand that diving into the world of technology can be daunting, especially when you’re just starting out or if you've had negative experiences in the past. <br>
                That’s why we’ve created a safe, supportive space where you can learn, grow, and connect without fear of judgment or incompetence.
            </p>
            <div class="main-panel__get-user">
                <input type="email" class="get-user__email" placeholder="Enter your email">
                <button class="get-user__join button pointer">
                    Join Us
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideHeroComponent',
}
</script>

<style scoped>
.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    color: var(--primary-text-color-dark);
}

.hero__side-panel {
    padding: 20px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-right: 2px solid var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 0 0 8px;
}

.side-panel__title {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
}

.hero__main-panel {
    padding: 20px 40px;
    background-color: var(--tertiary-color);
    color: var(--primary-text-color);
    border-radius: 0 8px 8px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid var(--primary-color);
}

.main-panel__text {
    margin: 0 0 20px;
    font-size: 1.1em;
    line-height: 1.5;
}

.main-panel__get-user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.get-user__email {
    padding: 10px 20px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    font-size: 1em;
    outline: none;
    flex-grow: 1;
}

.get-user__join {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.get-user__join:hover {
    background-color: #7c2ba6;
}
</style>
