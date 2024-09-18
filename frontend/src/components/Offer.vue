<template>
    <div class="offer">
        <h2 class="offer__title">
            What We Offer
        </h2>
        <ul class="offer__list">
            <li class="offer__item"><i class="fa-solid fa-people-group"></i>Inclusive Community</li>
            <li class="offer__item"><i class="fa-solid fa-laptop-file"></i>Educational Resource Pooling</li>
            <li class="offer__item"><i class="fa-solid fa-user-shield"></i>Safe Space</li>
            <li class="offer__item"><i class="fa-solid fa-hands-helping"></i>Collaborative Projects</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OfferComponent',
}
</script>

<style scoped>
.offer {
    background-color: var(--primary-color);
    padding: 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    margin: 1rem;
    color: var(--primary-text-color-light);
}
.offer__title {
    color: var(--secondary-color);
    text-align: center;
}
.offer__item {
    display: flex;
    align-items: center;
    border: 1px solid var(--secondary-color);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: var(--primary-color-light);
    color: var(--primary-text-color);
    font-weight: bold;
}
.offer__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    text-align: center;
    list-style-type: none;
}
.offer__item i {
    margin-right: 5px;
    color: var(--primary-text-color-light);
}
</style>
