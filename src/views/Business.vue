<template>
    <section id="business-container">
        <div id="sliding-bg-business"></div>
    </section>
</template>

<style scoped>
#business-container{
    background-color: var(--secondary-color);
    height: 100vh;
}
#sliding-bg-business{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 100%;
    background-color: var(--primary-color);
    z-index: 99999;
    animation: slide 1s 1 forwards;
}

@keyframes slide{
  to{
    left: 0;
  }
}
</style>