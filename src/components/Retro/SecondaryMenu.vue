<template>
    <div id="menu">
        <div class="menu-item right-border" @click="goBack">GO BACK</div>
        <div class="menu-item right-border" @click="goHome">HOME</div>
        <div class="menu-item right-border" @click="nextExperience">NEXT EXPERIENCE</div>
    </div>
</template>

<script>
export default {
    props:{
        nextExperienceName: String
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
.menu-item:hover{
	background-color: black;
	color: white;
}
.right-border{
	border-right: 1.5px solid hsl(230, 5%, 23%);
}
</style>