<template>
    <div class="stars-container">
        <FontAwesomeIcon v-for="(star, index) in number" :key="index" icon="fa-solid fa-star" class="star" />
        <FontAwesomeIcon v-for="(star, index) in 5-number" :key="index" icon="fa-regular fa-star" class="star" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    props: {
        number: Number
    },
    components: { FontAwesomeIcon }
}
</script>

<style scoped>
.star{
    font-size: 12px;
}
</style>