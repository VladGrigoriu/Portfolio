<template>
 <section id="illustrated-container">
   <!-- <div id="loader-c2" class="loader">
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
       <div class="loader__tile"></div>
      </div> -->
      

      <div id="illustrated-page">
        <div id="illustrated-header">
          <ul class="nav">
            <div @click="isMenuOpen ? moveLeft() : moveRight()" id="sidebar-action"><FontAwesomeIcon :icon="isMenuOpen ? 'fa-solid fa-chevron-left'  : 'fa-solid fa-chevron-right'" class="open-menu-icon" /></div>
            <li tabindex="1">
              <RouterLink to="/illustrated/about"><FontAwesomeIcon icon="fa-solid fa-pen-nib"  class="illustrated-menu-item"/></RouterLink>
            </li>
            <li tabindex="2" @click="scrollToSkills">
              <FontAwesomeIcon icon="fa-solid fa-medal"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="3" @click="scrollToExperiences">
              <FontAwesomeIcon icon="fa-solid fa-star"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="4" @click="scrollToContacts">
              <FontAwesomeIcon icon="fa-solid fa-message"  class="illustrated-menu-item"/>
            </li>
            <li tabindex="0" @click="restartExperience">
              <FontAwesomeIcon icon="fa-solid fa-house"  class="illustrated-menu-item"/>
            </li>
          </ul>
        </div>

        <div class="section" id="illustrated-hero-section">
          <div id="illustrated-hero-text">

            <div class="shadows">
                <span v-for="(letter, index) in ['v', 'l', 'a', 'd', ' ', 'g', 'r', 'i', 'g', 'o', 'r', 'i', 'u']" :key="index">
                  {{ letter }}
                </span>
              </div>

              <div class="ill-name-desc">{{ $t('software_developer') }}</div>

          </div>
          <div id="illustrated-hero-image">
            <img src="/assets/images/illustration_hero.png" class="hero-image" />
          </div>
        </div>
        <div class="section" ref="about">
          <div class="section-content-odd">
            <div>
              <img src="/assets/images/illustrated1.jpg" class="full-w" />
            </div>
            <div class="section-text">
              <div class="shadows">
                <span v-for="(letter, index) in $t('menu.about').split('')" :key="index">
                  {{ letter }}
                </span>
              </div>

              <p>{{ meStore.bio }}</p>
              <RouterLink to="/illustrated/about"><button class="illustrated-button">{{ $t('discover_more') }}</button></RouterLink>
            </div>

          </div>
        </div>
        <div class="section" ref="skills">
          <div class="section-content-even">
            <div>
              <img src="/assets/images/illustrated2.jpg" class="full-w" />
            </div>
            <div class="section-text-even" id="illustrated-skills-section">
              <div class="shadows">
                <span v-for="(letter, index) in $t('menu.skills').split('')" :key="index">
                  {{ letter }}
                </span>
              </div>

              <div id="skills-slider">
                <Swiper
                  :autoplay="{ delay: 1200 }" 
                  :slides-per-view="4"
                  :space-between="40"   
                  :breakpoints="{ 100:{ slidesPerView:2 }, 450:{ slidesPerView:4, } }"
                  >
                  <SwiperSlide v-for="(skill, index) in meStore.skills" :key="skill.name" :swiper-ref="index" >
                    <SingleSkill :title="skill.name" :icon="skill.icon" :isIcon="skill.isIcon" />
                  </SwiperSlide>
                  <!-- <SwiperSlide :swiper-ref="2">Slide 2</SwiperSlide>
                  <SwiperSlide :swiper-ref="3">Slide 3</SwiperSlide>
                  <SwiperSlide :swiper-ref="4">Slide 2</SwiperSlide>
                  <SwiperSlide :swiper-ref="5">Slide 3</SwiperSlide>
                  <SwiperSlide :swiper-ref="3">Slide 3</SwiperSlide>
                  <SwiperSlide :swiper-ref="4">Slide 2</SwiperSlide>
                  <SwiperSlide :swiper-ref="5">Slide 3</SwiperSlide> -->
                  
                </Swiper>
              </div>

            </div>

          </div>

        </div>
        <div class="section" ref="experiences">
          <div class="section-content-odd">
            <div>
              <img src="/assets/images/illustrated3.jpg" class="full-w" />
            </div>
            <div class="section-text" id="illustrated-experiences-section">
              <div class="shadows">
                <span v-for="(letter, index) in $t('menu.experiences').split('')" :key="index">
                  {{ letter }}
                </span>
              </div>

              <div id="experiences-slider">
                <Swiper
                  :autoplay="{ delay: 3000 }" 
                  :slides-per-view="1"
                  :space-between="50"   
                  :breakpoints="{ 100:{ slidesPerView:1 }, 450:{ slidesPerView:1, } }"
                  >
                  <SwiperSlide v-for="(experience, index) in experienceStore.experiences" :key="experience.name" :swiper-ref="index" >
                    <div class="illustrated-experience-container">
                      <div class="illustrated-experience-header">
                        <h2>{{ experience.name }}</h2>
                        <img :src="experience.main_image" class="illustrated-experience-image" />
                      </div>
                      <p>{{ experience.description }}</p>
                      <RouterLink class="exp-illustrated-button" :to="`/illustrated/experience/${experience.name}`">{{ $t('discover_more') }}</RouterLink>
                    </div>
                  </SwiperSlide>
                  <!-- <SwiperSlide :swiper-ref="2">Slide 2</SwiperSlide>
                  <SwiperSlide :swiper-ref="3">Slide 3</SwiperSlide>
                  <SwiperSlide :swiper-ref="4">Slide 2</SwiperSlide>
                  <SwiperSlide :swiper-ref="5">Slide 3</SwiperSlide>
                  <SwiperSlide :swiper-ref="3">Slide 3</SwiperSlide>
                  <SwiperSlide :swiper-ref="4">Slide 2</SwiperSlide>
                  <SwiperSlide :swiper-ref="5">Slide 3</SwiperSlide> -->
                  
                </Swiper>
              </div>
            </div>

          </div>
        </div>
        <div class="section" ref="contacts">
          <div class="section-content-even">
            <div>
              <img src="/assets/images/illustrated4.jpg" class="full-w" />
            </div>
            <div class="section-text-even">
              <div class="shadows">
                <span v-for="(letter, index) in $t('menu.contacts').split('')" :key="index">
                  {{ letter }}
                </span>
              </div>
                <a v-for="contact in contactStore.contacts" target="_blank" :href="contact.url" :key="contact.name" class="contact">
                  <span class="contact-name">{{ contact.name }}</span> <FontAwesomeIcon :icon="contact.icon" /> 
                </a>
            </div>

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
import { useMeStore } from '../stores/me';
import { useContactStore } from '../stores/contact';
import { useExperienceStore } from '../stores/experience';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SingleSkill from '../components/Illustrated/SingleSkill.vue';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Autoplay]);

export default {
    data(){
      return {
        isMenuOpen: false,
        loader: '<div id="loader-c2" class="loader2"><div class="loader2__tile"></div><div class="loader2__tile"></div><div class="loader2__tile"></div><div class="loader2__tile"></div><div class="loader2__tile"></div></div>',
        swiperBreakpoints:{
          450: {       
            slidesPerView: 1,
            spaceBetween: 10     
          },   
        }
      }
    },
    setup(){
      const meStore = useMeStore();
      const contactStore = useContactStore();
      const experienceStore = useExperienceStore();
      return { meStore, contactStore, experienceStore };
    },
    mounted() {
      document.getElementById('illustrated-container').insertAdjacentHTML('beforebegin', this.loader);
      setTimeout(() => {
        document.getElementById("loader-c2").classList.add("loader2--active");
      }, 500);
      // document.getElementsByClassName('nav')[0].classList.remove('menu-animation');
        setTimeout(() => {
            document.getElementById("illustrated-container").style.backgroundColor = "var(--primary-color)";
            setTimeout(() => {
                document.getElementById("loader-c2").remove();
                document.getElementById("illustrated-page").style.opacity = 1;
            }, 300);
        }, 2000);
    },
    methods:{
      detectMobile() {
          return window.innerHeight <= 915 && window.innerWidth <= 450;
      },
      detectTablet() {
          return window.innerHeight <= 1200 && window.innerWidth <= 900;
      },
      moveRight(){
        this.isMenuOpen=true;
        document.getElementsByClassName('nav')[0].classList.add('menu-animation');
        document.getElementsByClassName('nav')[0].style.left=0;
      },
      moveLeft(){
        this.isMenuOpen=false;
        if (!this.detectMobile() && !this.detectTablet()) {
          document.getElementsByClassName('nav')[0].style.left='-6%';
        }else{
          document.getElementsByClassName('nav')[0].style.left='-17%';
        }
        document.getElementsByClassName('nav')[0].classList.remove('menu-animation');
      },
      scrollToAbout(){
        this.$refs.about.scrollIntoView({ behavior: "smooth" });
      },
      scrollToSkills(){
        this.$refs.skills.scrollIntoView({ behavior: "smooth" });
      },
      scrollToExperiences(){
        this.$refs.experiences.scrollIntoView({ behavior: "smooth" });
      },
      scrollToContacts(){
        this.$refs.contacts.scrollIntoView({ behavior: "smooth" });
      }
    },
    components: { FontAwesomeIcon, Swiper, SwiperSlide, SingleSkill }
}
</script>

<style>
#illustrated-container{
  background-color: var(--secondary-color);
  height: 100%;
  overflow-y: hidden;
}
.loader2 {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  transition: width 0s 1.4s ease;
}
.loader2 .loader2__tile {
  position: absolute;
  left: 0;
  width: 0;
  height: 20%;
  background-color: var(--primary-color);
  transition: width 0.7s ease;
}
.loader2 .loader2__tile:nth-child(0) {
  top: calc(-1 * 20%);
  transition-delay: -0.2s;
}
.loader2 .loader2__tile:nth-child(1) {
  top: calc(0 * 20%);
  transition-delay: 0s;
}
.loader2 .loader2__tile:nth-child(2) {
  top: calc(1 * 20%);
  transition-delay: 0.2s;
}
.loader2 .loader2__tile:nth-child(3) {
  top: calc(2 * 20%);
  transition-delay: 0.4s;
}
.loader2 .loader2__tile:nth-child(4) {
  top: calc(3 * 20%);
  transition-delay: 0.6s;
}
.loader2 .loader2__tile:nth-child(5) {
  top: calc(4 * 20%);
  transition-delay: 0.8s;
}
.loader2--active {
  width: 100%;
  transition-delay: 0s;
}
.loader2--active .loader2__tile {
  width: 100%;
}
.loader2--active .loader2__tile:nth-child(0) {
  transition-delay: -0.2s;
}
.loader2--active .loader2__tile:nth-child(1) {
  transition-delay: 0s;
}
.loader2--active .loader2__tile:nth-child(2) {
  transition-delay: 0.2s;
}
.loader2--active .loader2__tile:nth-child(3) {
  transition-delay: 0.4s;
}
.loader2--active .loader2__tile:nth-child(4) {
  transition-delay: 0.6s;
}
.loader2--active .loader2__tile:nth-child(5) {
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
.section-text, .section-text-even{
  height: 100%;
  box-shadow: var(--box-shadow-color2) 0px 10px 15px -6px inset, var(--box-shadow-color) 0px 9px 18px -9px inset;
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
  /* transition: opacity 200ms ease; */
}
/* .menu-animation:nth-child(0){
  opacity: 0;
  animation: show .5s ease forwards;
} */
.ill-name-desc{
  color: var(--text-color);
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
}
.menu-animation li{
  animation: show .3s forwards;
  /* animation-delay: .5s; */
}
/* .menu-animation li:nth-child(1){
  animation-delay: 1s;
} */
.menu-animation li:nth-child(1){
  animation-delay: .2s;
}
.menu-animation li:nth-child(2){
  animation-delay: .4s;
}
.menu-animation li:nth-child(3){
  animation-delay: .6s;
}
.menu-animation li:nth-child(4){
  animation-delay: .8s;
}
.menu-animation li:nth-child(5){
  animation-delay: 1s;
}
.menu-animation li:nth-child(6){
  animation-delay: 1.2s;
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
  color: var(--text-color);
  margin-right: 10px;
}
.nav li:hover .illustrated-menu-item{
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 var(--box-shadow-color), -4px -4px 10px var(--primary-color);
}
.nav li:focus .illustrated-menu-item{
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 var(--box-shadow-color), -4px -4px 10px var(--primary-color), 4px 4px 10px 0 var(--box-shadow-color) inset, -4px -4px 10px var(--primary-color) inset;
}
.nav li:hover .illustrated-menu-item, .nav li:focus .illustrated-menu-item{
  color: var(--name-color2);
}
.full-w{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.shadows {
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px var(--secondary-color);
    color: var(--text-color);
    letter-spacing: -0.05em;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    font-size: 80px;
    transition: all 0.25s ease-out;
    font-weight: 700;
}
.section-text{
  padding: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: var(--text-color);
  padding-right: 10%;
}
.section-text-even{
  padding: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  color: var(--text-color);
  padding-left: 10%;
}
#illustrated-hero-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 5%;
}
.hero-image{
  width: 80%;
}
#illustrated-hero-image{
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#illustrated-hero-text{
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.contact{
  margin-top: 20px;
  font-size: 1.5em;
}
#skills-slider{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#experiences-slider{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#illustrated-skills-section{
  padding-left: 5%;
}
#illustrated-experiences-section{
  padding-right: 5%;
}
.illustrated-experience-container{
  width: 100%;
  height: 100%;
  background-color: var(--text-color);
  color: var(--secondary-color);
  border-radius: 10px;
  padding: 20px;
  min-height: 35vh;
}
.illustrated-experience-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
}
.illustrated-experience-header>h2{
  width: 70%;
}
.illustrated-experience-header>img{
  width: 20%;
}
.illustrated-experience-image{
  width: 20%;
}
.illustrated-experience-link{
  margin-top: 10px;
  font-weight: 700;
  text-decoration: underline;
}
.illustrated-experience-container>p{
  padding-right: 30%;
  margin-bottom: 20px;
}
.open-menu-icon{
  color: var(--text-color);
}
.illustrated-button {
  padding: 10px;
  background: var(--primary-color);
  border: none;
  /* border-radius: .5rem; */
  color: var(--text-color);
  /* font-size: 1rem; */
  font-weight: 700;
  /* letter-spacing: .2rem; */
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px var(--neom-btn),
              -6px -6px 10px var(--neom-btn2),
              6px 6px 8px var(--neom-btn3),
              6px 6px 10px var(--neom-btn4);
  margin-top: 20px;
}
.illustrated-button:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}
.illustrated-button:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}
.exp-illustrated-button{
  padding: 10px;
  background-color: var(--primary-color);
  color: var(--text-color);
  border: 1px solid var(--primary-color);
}
.exp-illustrated-button:hover{
  background-color: var(--text-color);
  color: var(--primary-color);
}
@media screen and (max-width: 450px){
  #illustrated-hero-section{
    flex-direction: column;
    justify-content: center;
  }
  #illustrated-hero-text{
    width: 90%;
    text-align: center;
  }
  .shadows{
    font-size: 50px;
    text-align: center;
    width: 100%;
  }
  .section-text>p{
    text-align: center;
  }
  .section-text>a{
    width: 100%;
    text-align: center;
  }
  #illustrated-hero-image{
    width: 90%;
    margin-top: 50px;
  }
  .section-content-odd, .section-content-even{
    flex-direction: column;
  }
  .section-content-odd > div, .section-content-even > div {
    width: 100%;
    height: 100%;
  }
  .nav{
    width: 20%;
    left: -17%;
  }
  .section-content-odd > div:nth-child(2), .section-content-even > div:nth-child(2){
    height: auto;
    min-height: 50vh;
    padding-bottom: 40px;
  }
  .section{
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
  #illustrated-skills-section{
    padding: 40px;
  }
  .section-text > p, #experiences-slider, #skills-slider{
    margin-top: 20px;
  }
  #illustrated-experiences-section{
    padding: 20px;
  }
  
  .section-text-even{
    justify-content: space-evenly;
    align-items: center;
  }
  #illustrated-hero-text{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .ill-name-desc{
    color: var(--text-color);
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>