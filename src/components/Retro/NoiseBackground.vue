<template>
    <svg 
	viewBox="0 0 200 200"
	xmlns='http://www.w3.org/2000/svg'
	id="noise-svg">
	
		<filter id='noiseFilter'>
			<feTurbulence 
			type='fractalNoise' 
			baseFrequency='3' 
			numOctaves='3' 
			stitchTiles='stitch' />
		</filter>

		<rect
			width='100%' 
			height='100%' 
			filter='url(#noiseFilter)' />
	</svg>
</template>

<style scoped>
#noise-svg{
	background-color: var(--primary-color);
	position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
	z-index: 1;
}
@media screen and (max-width: 450px) {
	#noise-svg[data-v-f034cdc7] {
		height: 100%;
	}
}
</style>