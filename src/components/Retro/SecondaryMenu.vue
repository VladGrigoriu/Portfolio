<template>
    <div id="menu">
        <div class="menu-item right-border" v-if="isExperience" @click="goBack">GO BACK</div>
        <div :class="isExperience ? 'menu-item right-border' : 'menu-item-alternative'" @click="goHome">HOME</div>
        <div class="menu-item right-border" v-if="isExperience" @click="nextExperience">NEXT EXPERIENCE</div>
    </div>
</template>

<script>
export default {
    props:{
        nextExperienceName: String,
        isExperience: {
            type: Boolean,
            default: true
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push(`/retro`);
        },
        nextExperience(){
            this.$router.push(`/retro/experience/${this.nextExperienceName}`);
        }
    }
}
</script>

<style scoped>
#menu{
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu-item{
	width: 33%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1.5px solid hsl(230, 5%, 23%);
	padding: 10px;
	cursor: pointer;
	font-weight: 600;
}
.menu-item-alternative{
    width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1.5px solid hsl(230, 5%, 23%);
	padding: 10px;
	cursor: pointer;
	font-weight: 600;
}
.menu-item:hover, .menu-item-alternative:hover{
	background-color: black;
	color: white;
}
.right-border{
	border-right: 1.5px solid hsl(230, 5%, 23%);
}
@media screen and (max-width: 450px){
    #menu {
        flex-direction: column;
    }
    .menu-item {
        width: 100%;
        border-right: none;
    }
}
</style>