<template>
    <div id="menu">
        <div class="menu-item right-border" @click="$emit('scollToAbout')">ABOUT</div>
        <div class="menu-item right-border" @click="$emit('scrollToFESkills')">SKILLS</div>
        <div class="menu-item right-border" @click="$emit('scrollToExperiences')">EXPERIENCES</div>
        <div class="menu-item" @click="$emit('scrollToContacts')">CONTACTS</div>
    </div>
</template>

<style scoped>
#menu{
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu-item{
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1.5px solid hsl(230, 5%, 23%);
	padding: 10px;
	cursor: pointer;
	font-weight: 600;
}
.menu-item:hover{
	background-color: var(--text-color);
	color: var(--primary-color);
}
.right-border{
	border-right: 1.5px solid hsl(230, 5%, 23%);
}
</style>