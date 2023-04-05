<template>
    <section id="interactive-container">
        <div id="interactive-ids" class="loader">
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
        </div>
    </section>
</template>

<script>
export default {
    mounted(){
        setTimeout(() => {
            document.getElementById('interactive-ids').classList.add('loader--active');
        }, 500);
       
    }
}
</script>

<style scoped>
.loader {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  transition: width 0s 1.4s ease;
}
.loader .loader__tile {
  position: absolute;
  left: 0;
  width: 0;
  height: 20%;
  background-color: var(--primary-color);
  transition: width 0.7s ease;
}
.loader .loader__tile:nth-child(0) {
  top: calc(-1 * 20%);
  transition-delay: -0.2s;
}
.loader .loader__tile:nth-child(1) {
  top: calc(0 * 20%);
  transition-delay: 0s;
}
.loader .loader__tile:nth-child(2) {
  top: calc(1 * 20%);
  transition-delay: 0.2s;
}
.loader .loader__tile:nth-child(3) {
  top: calc(2 * 20%);
  transition-delay: 0.4s;
}
.loader .loader__tile:nth-child(4) {
  top: calc(3 * 20%);
  transition-delay: 0.6s;
}
.loader .loader__tile:nth-child(5) {
  top: calc(4 * 20%);
  transition-delay: 0.8s;
}
.loader--active {
  width: 100%;
  transition-delay: 0s;
}
.loader--active .loader__tile {
  width: 100%;
}
.loader--active .loader__tile:nth-child(0) {
  transition-delay: -0.2s;
}
.loader--active .loader__tile:nth-child(1) {
  transition-delay: 0s;
}
.loader--active .loader__tile:nth-child(2) {
  transition-delay: 0.2s;
}
.loader--active .loader__tile:nth-child(3) {
  transition-delay: 0.4s;
}
.loader--active .loader__tile:nth-child(4) {
  transition-delay: 0.6s;
}
.loader--active .loader__tile:nth-child(5) {
  transition-delay: 0.8s;
}
#interactive-container{
    height: 100vh;
    background-color: var(--secondary-color);
}
</style>