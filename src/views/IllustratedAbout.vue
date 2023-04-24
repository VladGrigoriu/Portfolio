<template>
    <section id="illustrated-about-section">
        <div id="illustrated-about-title">
            <div class="shadows">
                <span v-for="(letter, index) in $t('menu.about').split('')" :key="index">
                  {{ letter }}
                </span>
            </div>  
        </div>

        <div class="long-desc" v-html="meStore.longBio"></div>
    
    </section>
</template>

<script>
import { useMeStore } from '../stores/me';

export default {
    setup(){
        const meStore = useMeStore();
        return { meStore }
    }
}
</script>

<style scoped>
#illustrated-about-section{
    background-color: var(--secondary-color);
    min-height: 100vh;
}
#illustrated-about-title{
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.shadows {
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px var(--secondary-color);
    color: var(--text-color);
    letter-spacing: -0.05em;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    font-size: 80px;
    transition: all 0.25s ease-out;
    font-weight: 700;
}
.long-desc{
    color: var(--text-color);
    padding: 5%;
}
@media screen and (max-width:450px){
    .shadows{
        font-size: 50px;
    }
}
</style>