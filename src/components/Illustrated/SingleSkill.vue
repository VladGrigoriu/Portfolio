<template>
    <div>
        <div class="liquid-single-skill-container">
            <h4 class="liquid-skill-title">{{ title }}</h4>
            <FontAwesomeIcon :icon="`fa-brands fa-${icon}`" class="liquid-skill-icons" v-if="isIcon"/>
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
            fetch(`/assets/images/${this.icon}?raw`).then(res =>{
                res.text().then(text => this.currentIcon = text)
            });
        }
    }
}
</script>

<style>
#csharp, .mysql, .mongodb{
    fill: var(--primary-color);
}
.inline-svg-container svg, .liquid-skill-icons{
    font-size: 30px;
    margin-top: 10px;
}
.liquid-single-skill-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--text-color);
    color: var(--primary-color);
    border: 0.3px solid var(--text-color);
    padding: 20px;
    border-radius: 10px;
}
.liquid-single-skill-container:hover{
    background-color: var(--primary-color);
    color: var(--text-color);
}
.liquid-single-skill-container:hover #csharp,.liquid-single-skill-container:hover .mysql,.liquid-single-skill-container:hover .mongodb{
    fill: var(--text-color);
}

</style>