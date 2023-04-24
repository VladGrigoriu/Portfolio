<template>
    <div id="menu">
        <RouterLink class="menu-item right-border" to="/retro/about"><div>{{ $t('menu.about').toLocaleUpperCase() }}</div></RouterLink>
        <div class="menu-item right-border" @click="$emit('scrollToFESkills')">{{ $t('menu.skills').toLocaleUpperCase() }}</div>
        <div class="menu-item right-border" @click="$emit('scrollToExperiences')">{{ $t('menu.experiences').toLocaleUpperCase() }}</div>
        <div class="menu-item" @click="$emit('scrollToContacts')">{{ $t('menu.contacts').toLocaleUpperCase() }}</div>
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