<template>
    <svg viewBox="0 0 960 300">
    <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%" class="cursive">Vlad Grigoriu</text>
        <!-- <text text-anchor="middle" x="52%" y="80%">AUYK. </text> -->
    </symbol>

    <g class = "g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
    </g>
    </svg>
</template>

<style scoped>
svg {
    display: block;
    font: 10.5em 'Dancing Script', cursive;
    width: 500px;
    height: 160px;
    /* margin: 0 auto; */
    margin-left: -30px;
}
.text-copy {
    fill: none;
    stroke: var(--name-color);
    stroke-dasharray: 600;
    stroke-width: 1px;
    stroke-dashoffset: 600;
    animation: stroke-offset 3s forwards linear;
    opacity: 0;
    animation-delay: 1s;
    transition: stroke-dasharray 5s ease;
}

.text-copy:nth-child(1){
  stroke: var(--name-color2);
  animation-delay: -1;
  stroke-dasharray: 150px;
}

svg:hover .text-copy{
    stroke-dashoffset: 0;
    stroke-dasharray: 1;
}

@keyframes stroke-offset{
    to {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}

@media screen and (max-width:450px){
    svg{
        display: block;
        font: 10.5em 'Dancing Script', cursive;
        width: 280px;
        height: 120px;
        /* margin: 0 auto; */
        margin-left: -30px;
    }
}
</style>