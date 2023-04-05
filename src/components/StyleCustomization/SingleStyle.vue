<template>
    <div :class="selected === name ? 'active-style' : 'single-style-selector'" @click="$emit('selectStyle', name)">
        <img :src="`/assets/styles/${img}`" class="style-image" />
        <p class="style-name" >{{ name }}</p>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        img: String,
        selected: String
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
    height: 59px;
    width: 40%;
    border-radius: 10px;
    object-fit: cover;
}
.style-name{
    margin-left: 20px;
}
</style>