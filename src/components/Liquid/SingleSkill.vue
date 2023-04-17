<template>
    <div>
        <div class="single-skill-container">
            <h4 class="skill-title">{{ title }}</h4>
            <FontAwesomeIcon :icon="`fa-brands fa-${icon}`" class="skill-icons" v-if="isIcon"/>
            <!-- <img v-else :src="`/assets/images/${icon}`" class="skill-image"/> -->
            <div class="svg-item" :style="{'mask-image':`url(/assets/images/${icon})`}"></div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: String,
        icon: String,
        isIcon: { 
            type: Boolean,
            default: true
        }
    },
}
</script>

<style scoped>
.skill-image{
    fill: red !important;
}
.svg-item{
    background: green;
    height: 100%;
    width: 100%;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
}
</style>