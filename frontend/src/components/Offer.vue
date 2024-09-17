<template>
    <div class="offer">
        <h2 class="offer__title">
            What We Offer
        </h2>
        <p class="offer__paragraph"></p>
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
        padding: 2rem;
        border: 2px solid var(--primary-color);
    }
    .offer__title {
        text-align: center;
        color: var(--primary-text-color-light);
    }
    .offer__paragraph{
        text-align: center;
        margin: 0 2rem;
        color: var(--primary-text-color-light);
    }
    .offer__list {
        list-style-type: none;
        padding: 0;
    }
    .offer__item {
        display: flex;
        align-items: center;
        margin: 1rem 0;
        color: var(--primary-text-color-light);
    }
    .offer__item i {
        margin-right: 1rem;
    }
</style>