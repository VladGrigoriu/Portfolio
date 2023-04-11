<template>
    <svg 
    viewBox="0 0 200 200"
    xmlns='http://www.w3.org/2000/svg'
    id="noise-svg2">
    
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
            filter='url(#noiseFilter)' 
            id="journal-bg-rect"
            />
    </svg>
</template>

<style scoped>
#noise-svg2{
	background-color: #e8ecf3;
	position: absolute;
    z-index: 1;
    height: 100%;
	width: 80%;
}
#journal-bg-rect{
	position: absolute;
    z-index: 1;
    height: 5000%;
	width: 5000%;
}
</style>