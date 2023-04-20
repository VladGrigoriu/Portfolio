<template>
 <section id="illustrated-container">
   <div id="loader-c" class="loader">
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
      </div>
      

      <div id="illustrated-page">
        <div id="illustrated-header">
          <ul class="nav">
            <div @click="isMenuOpen ? moveLeft() : moveRight()" id="sidebar-action"><FontAwesomeIcon :icon="isMenuOpen ? 'fa-solid fa-chevron-left'  : 'fa-solid fa-chevron-right'" /></div>
            <li tabindex="0">
              <FontAwesomeIcon icon="fa-solid fa-house"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="1">
              <FontAwesomeIcon icon="fa-solid fa-pen-nib"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="2">
              <FontAwesomeIcon icon="fa-solid fa-medal"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="3">
              <FontAwesomeIcon icon="fa-solid fa-star"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="4">
              <FontAwesomeIcon icon="fa-solid fa-message"  class="illustrated-menu-item"/>
            </li>
          </ul>
        </div>

        <div class="section">
          
        </div>
        <div class="section">
          <div class="section-content-odd">
            <div>
              <img src="/assets/images/illustrated1.jpg" class="full-w" />
            </div>
            <div class="section-text">c</div>

          </div>
        </div>
        <div class="section">
          <div class="section-content-even">
            <div>c</div>
            <div class="section-text">c</div>

          </div>

        </div>
        <div class="section">
          <div class="section-content-odd">
            <div>c</div>
            <div class="section-text">c</div>

          </div>
        </div>
        <div class="section">
          <div class="section-content-even">
            <div>c</div>
            <div class="section-text">c</div>

          </div>
        </div>
      </div>
      
    </section>
    

    <!-- <section class="section">
<h1>slkjfdsd</h1>
    </section> -->
    
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    data(){
      return {
        isMenuOpen: false
      }
    },
    mounted() {
        setTimeout(() => {
            document.getElementById("loader-c").classList.add("loader--active");
        }, 500);
        setTimeout(() => {
            document.getElementById("illustrated-container").style.backgroundColor = "var(--primary-color)";
            setTimeout(() => {
                document.getElementById("loader-c").remove();
                document.getElementById("illustrated-page").style.opacity = 1;
            }, 300);
        }, 2000);
    },
    methods:{
      moveRight(){
        this.isMenuOpen=true;
        document.getElementsByClassName('nav')[0].classList.add('menu-animation');
        document.getElementsByClassName('nav')[0].style.left=0;
      },
      moveLeft(){
        this.isMenuOpen=false;
        document.getElementsByClassName('nav')[0].style.left='-6%';
        document.getElementsByClassName('nav')[0].classList.remove('menu-animation');
      }
    },
    components: { FontAwesomeIcon }
}
</script>

<style scoped>
#illustrated-container{
  background-color: var(--secondary-color);
  height: 100vh;
}
.loader {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
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
.section{
  height: 100vh;
  background-color: var(--primary-color);
  position: relative;
  z-index: 2;
}
.section:nth-of-type(even){
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.section:nth-of-type(odd){
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.section-content-odd{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.section-content-even{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
}
.section-content-odd > div, .section-content-even > div{
  width: 50%;
  height: 100%;
}
.section-text{
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
#illustrated-page{
  opacity: 0;
  transition: opacity 300ms ease;
}
#illustrated-header{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
}
#sidebar-action{
  position: absolute;
  background-color: var(--primary-color);
  z-index: 10;
  right: -20px;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* box-shadow: 5px 0 5px -5px #333; */
  box-shadow: 10px 0 10px -10px rgba(0, 0, 0, 0.228);
  cursor: pointer;
}
.nav {
  position: fixed;
  width: 7%;
  height: 80%;
  left: -6%;
  background-color: var(--primary-color);
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.228);
  border-radius: 0 200vh 200vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  list-style-type: none;
  z-index: 20;
  transition: left 300ms ease;
}

.illustrated-menu-item{
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px var(--secondary-color);
  padding: .7rem .7rem;
  border-radius: 50%;
  color: var(--text-color);
}
.nav li{
  opacity: 0;
}
/* .menu-animation:nth-child(0){
  opacity: 0;
  animation: show .5s ease forwards;
} */
.menu-animation li:nth-child(1){
  animation: show .2s ease forwards;
}
.menu-animation li:nth-child(2){
  animation: show .8s ease forwards;
}
.menu-animation li:nth-child(3){
  animation: show 1.4s ease forwards;
}
.menu-animation li:nth-child(4){
  animation: show 2s ease forwards;
}
.menu-animation li:nth-child(5){
  animation: show 2.6s ease forwards;
}
.menu-animation li:nth-child(6){
  animation: show 3.2s ease forwards;
}
.nav li > p{
  text-align: center;
  font-size: .5em;
}
.nav li {
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  margin-right: 10px;
}
.nav li:hover .illustrated-menu-item{
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1), -4px -4px 10px white;
}
.nav li:focus .illustrated-menu-item{
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1), -4px -4px 10px white, 4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset, -4px -4px 10px white inset;
}
.nav li:hover .illustrated-menu-item, .nav li:focus .illustrated-menu-item{
  color: orangered;
}
.full-w{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>