<template>
    <div :class="selected === name ? 'active-style' : 'single-style-selector'" @click="$emit('selectStyle', name)">
        <img :src="`/assets/styles/${img}`" class="style-image" />
        <p class="style-name" >{{ name }}</p>
        <div v-if="isComingSoon" class="coming-soon">
            Coming soon!
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        img: String,
        selected: String,
        isComingSoon:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.single-style-selector{
    width: 90%;
    height: 60px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: box-shadow background-color color 300ms ease;
}
.single-style-selector:hover{
    background-color: var(--name-color);
    color: var(--primary-color);
}
.active-style{
    background-color: var(--text-color);
    color: var(--primary-color);
    width: 90%;
    height: 60px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    box-shadow: var(--box-shadow) 0px 7px 29px 0px;
    transition: box-shadow 300ms ease;
}
.style-image{
    height: 58px;
    width: 40%;
    border-radius: 10px;
    object-fit: cover;
}
.style-name{
    margin-left: 20px;
}
.coming-soon{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* z-index: 99; */
    background-color: #00000001;
    color: var(--text-color);
    font-weight: 600;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>