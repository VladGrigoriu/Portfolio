<template>
    <div id="theme-selector">
        <slot name="themes"></slot>
    </div>
</template>

<style scoped>
#theme-selector{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>