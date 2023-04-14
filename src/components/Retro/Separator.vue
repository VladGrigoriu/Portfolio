<template>
    <div :class="colored ? 'separator retro-colored-background' : 'separator'">
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
        <div :class="direction === 'left' ? 'line-left' : 'line-right'"></div>
    </div>
</template>

<script>

export default {
    props:{
        direction: String,
        colored: Boolean
    }
}

</script>

<style scoped>
.separator{
   width: 100%;
   height: 15px;
   border-top: 1.5px solid hsl(230, 5%, 23%);
   /* border-bottom: 1.5px solid hsl(230, 5%, 23%); */
   position: relative;
   box-sizing: border-box;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   z-index: 99;
}
.line-left{
   width: 100%;
   transform: rotate(-45deg);
   border-top: 1px solid hsl(230, 5%, 23%);
   position: relative;
   height: 100%;
   box-sizing: border-box;
}
.line-right{
   width: 100%;
   transform: rotate(45deg);
   border-top: 1px solid hsl(230, 5%, 23%);
   position: relative;
   height: 100%;
   box-sizing: border-box;
}
</style>