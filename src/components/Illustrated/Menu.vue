<template>
    <header id="interactive-header">
        <div class="menu-item" >ABOUT</div>
        <div class="menu-item space" >SKILLS</div>
        <div class="menu-item space" >EXPERIENCES</div>
        <div class="menu-item space" >CONTACTS</div>
    </header>
</template>

<style scoped>
#interactive-header{
  width: 100%;
  z-index: 999999;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  right: -10px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-item{
    font-weight: 600;
}
.menu-item:hover{
    text-decoration: underline;
}
.space{
    margin-left: 20px;
}
</style>