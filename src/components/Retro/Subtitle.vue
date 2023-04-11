<template>
    <div id="section-title">
        {{ title }}
    </div>
</template>

<script>
export default {
    props:{
        title: String
    }
}
</script>

<style scoped>
#section-title{
	height: 50px;
	border-top: 1.5px solid hsl(230, 5%, 23%);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
}
</style>