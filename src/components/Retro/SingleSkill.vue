<template>
    <div class="single-skill-container">
        <h4 class="skill-title">{{ title }}</h4>
        <FontAwesomeIcon :icon="`fa-brands fa-${icon}`" class="skill-icons" v-if="isIcon"/>
        <img v-else :src="`/assets/images/${icon}`" class="skill-image"/>
        <slot name="stars"></slot>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default{
    props: {
        title: String,
        icon: String,
        isIcon: { 
            type: Boolean,
            default: true
        }
    },
    components: { FontAwesomeIcon }
}
</script>

<style>
.skill-icons{
	font-size: 60px;
}
.skill-image{
    width: 60px;
    filter: brightness(0);
}
.skill-title{
    margin-bottom: 20px;
}
.single-skill-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}
.single-skill-container:hover .skill-image{
    filter: brightness(0) invert(1);
}
</style>