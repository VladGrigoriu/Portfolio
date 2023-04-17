<template>
    <div>
        <div class="single-skill-container">
            <h4 class="skill-title">{{ title }}</h4>
            <FontAwesomeIcon :icon="`fa-brands fa-${icon}`" class="skill-icons" v-if="isIcon"/>
            <!-- <img v-else :src="`/assets/images/${icon}`" class="skill-image"/> -->
            <!-- <div class="svg-item" :style="{'mask-image':`url(/assets/images/${icon})`}"></div> -->
            <div class="inline-svg-container" v-html="currentIcon" v-else></div>
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
    data(){
        return {
            currentIcon: null
        }
    },
    mounted(){
        if(!this.isIcon){
            fetch(`../../../public/assets/images/${this.icon}?raw`).then(res =>{
                res.text().then(text => this.currentIcon = text)
            });
        }
    }
}
</script>

<style>
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
#csharp, .mysql, .mongodb{
    fill: var(--primary-color);
}
svg{
    font-size: 30px;
}
.single-skill-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--text-color);
    color: var(--primary-color);
    padding: 20px;
    border-radius: 10px;
}
</style>