
<template>
  <div id="disable-effect" @click="isWaterActive ? disableWater() : enableWater()">
    <FontAwesomeIcon :icon="isWaterActive ? 'fa-droplet-slash' : 'fa-droplet'" id="droplet-icon" />
  </div>
  <header id="business-header">
    <RouterLink to="/liquid/about"><div class="liquid-menu-item" @click="scrollToAbout">{{ $t('menu.about') }}</div></RouterLink>
    <div class="liquid-menu-item" @click="scrollToSkills">{{ $t('menu.skills') }}</div>
    <div class="liquid-menu-item" @click="scrollToExperiences">{{ $t('menu.experiences') }}</div>
    <div class="liquid-menu-item" @click="scrollToContacts">{{ $t('menu.contacts') }}</div>
    <div id="liquid-menu-icon" @click="openMobileMenu">
      <FontAwesomeIcon icon="fa-solid fa-bars" />
    </div>

  </header>
  <div id="mobile-menu"> 
    <div id="close-icon" @click="closeMenu"><FontAwesomeIcon icon="fa-solid fa-x" /></div>
    <RouterLink to="/liquid/about"><div class="liquid-menu-item-mobile" @click="scrollToAboutMobile">{{ $t('menu.about') }}</div></RouterLink>
    <div class="liquid-menu-item-mobile" @click="scrollToSkillsMobile">{{ $t('menu.skills') }}</div>
    <div class="liquid-menu-item-mobile" @click="scrollToExperiencesMobile">{{ $t('menu.experiences') }}</div>
    <div class="liquid-menu-item-mobile" @click="scrollToContactsMobile">{{ $t('menu.contacts') }}</div>

  </div>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div id="sections-container" >

            <div class="section" id="section-1" data-rate=".4" data-direction="vertical">
              <div id="glass-presentation">
                <div class="liquid-introduction-t">
                  <div class="liquid introduction">
                    <h2>Vlad Grigoriu</h2>
                    <h2>Vlad Grigoriu</h2>
                    <h2>Vlad Grigoriu</h2>
                  </div>
                  <div class="introduction-descr">{{ $t('software_developer') }}</div>
                </div>
                <!-- <button class="liquid-button" @click="scrollToAbout">Next</button> -->
              </div>
              
              <img src="/assets/images/liquid_bg.jpg" id="hero-image"/>
              
              <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <!-- <div class='wave'></div> -->
            <div ref="about" class="section" id="section2">
              
              <div class="section-description" id="section2-desc">
                <div class="liquid left-alignment liquid-about">
                  <h2>{{ $t('menu.about') }}</h2>
                  <h2>{{ $t('menu.about') }}</h2>
                  <h2>{{ $t('menu.about') }}</h2>
                </div>

                <p>{{ meStore.bio }}</p>
                <RouterLink to="/liquid/about"><button class="liquid-read-more">{{ $t('discover_more') }}</button></RouterLink>
              </div>


              <div class="section-image">
                <img src="/assets/images/pc_liquid1.png" id="about-img" class="rotate-right" />
              </div>

              <svg class="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <div ref="skills" class="section" id="liquid-skills-section" data-rate=".1" data-direction="vertical">
              
              <div class="section-description2">
                <div class="liquid right-alignment">
                  <h2>{{ $t('menu.skills') }}</h2>
                  <h2>{{ $t('menu.skills') }}</h2>
                  <h2>{{ $t('menu.skills') }}</h2>
                </div>

                <div id="skills-grid">
                  <SingleSkill v-for="skill in meStore.skills" :key="skill.name" :title="skill.name" :icon="skill.icon" :isIcon="skill.isIcon" />
                </div>

              </div>

              <div class="section-image">
                <img src="/assets/images/liquid_medal.png" id="about-img" class="rotate-left mobile-medal" />
              </div>

              <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <div ref="experiences" class="section" id="liquid-experiences" data-rate=".1" data-direction="vertical">
              
              <div id="experiences-intro">
                
                <div class="liquid left-alignment">
                  <h2>{{ $t('menu.experiences') }}</h2>
                  <h2>{{ $t('menu.experiences') }}</h2>
                  <h2>{{ $t('menu.experiences') }}</h2>
                </div>
  
                <div class="section-image">
                  <img src="/assets/images/liquid_experiences.png" id="about-img" class="rotate-right desktop-exp-img" />
                </div>

              </div>

              <svg id="experiences-wave" class="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

              <div v-for="(experience, index) in experienceStore.experiences" :key="experience.name" class="liquid-experience-container">
                <RouterLink :to="`/liquid/experience/${experience.name}`">
                  <div :class="(index+1) % 2 === 0 ? 'liquid-experience-even' : 'liquid-experience-odd'" >
                    <div :class="(index+1) % 2 === 0 ? 'liquid-experience-desc-even' : 'liquid-experience-desc-odd'">
                      <h2>{{ experience.name }}</h2>
                      <p>{{ experience.description }}</p>
                    </div>
  
                    <img :src="experience.main_image" class="liquid-experience-image" />
                    
                  </div>
                </RouterLink>

                <img src="/assets/images/liquid_single_experience.jpg" v-if="(index+1) % 2 !== 0" class="experience-bg" />
                <img src="/assets/images/liquid_single_experience2.jpg" v-else class="experience-bg" />
                
              </div>

              <div class="section-image">
                <img src="/assets/images/liquid_experiences.png" id="about-img" class="rotate-right mobile-exp-img" />
              </div>

            </div>
            <div ref="contacts" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="section-description2">
                <div class="liquid right-alignment">
                  <h2>{{ $t('menu.contacts') }}</h2>
                  <h2>{{ $t('menu.contacts') }}</h2>
                  <h2>{{ $t('menu.contacts') }}</h2>
                </div>

                <div>
                  <a v-for="contact in contactStore.contacts" target="_blank" :href="contact.url" :key="contact.name" class="contact">
                    <span class="contact-name">{{ contact.name }}</span> <FontAwesomeIcon :icon="contact.icon" /> 
                  </a>
                </div>
              </div>

              <div class="section-image">
                <img src="/assets/images/liquid_contact.png" id="about-img" class="rotate-left" />
              </div>

            </div>
        </div>
        </div>    
    </section>

</template>

<script>
import { useMeStore } from '../stores/me';
import { useContactStore } from '../stores/contact';
import { useExperienceStore } from '../stores/experience';
import SingleSkill from '../components/Liquid/SingleSkill.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import $ from 'jquery';
import ripples from 'jquery.ripples';

export default {
  components: { SingleSkill, FontAwesomeIcon },
  data(){
    return {
      heroImage: null,
      initialClip: 100,
      isWaterActive: true
    }
  },
  setup(){
		const meStore = useMeStore();
    const contactStore = useContactStore();
    const experienceStore = useExperienceStore();
    return { meStore, contactStore, experienceStore };
  },
  mounted(){
    if (!this.detectMobile() && !this.detectTablet()) {
      $('#section-1').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        imageUrl: '/assets/images/liquid_bg.jpg'
      });
      document.getElementsByTagName('canvas')[0].width=window.innerWidth;
      $('#section-1').ripples('drop',  document.getElementsByTagName('canvas')[0].width/2000, document.getElementsByTagName('canvas')[0].height/2, 20, 0.7);
    }
  },
  methods:{
    detectMobile() {
        return window.innerHeight <= 915 && window.innerWidth <= 450;
    },
    detectTablet() {
        return window.innerHeight <= 1200 && window.innerWidth <= 900;
    },
    openMobileMenu(){
      document.getElementById('mobile-menu').style.left=0;
    },
    closeMenu(){
      document.getElementById('mobile-menu').style.left='100%';
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
		},
    scrollToAboutMobile(){
      this.$refs.about.scrollIntoView({ behavior: "smooth" });
      document.getElementById('mobile-menu').style.left='100%';
    },
    scrollToSkillsMobile(){
			this.$refs.skills.scrollIntoView({ behavior: "smooth" });
      document.getElementById('mobile-menu').style.left='100%';
		},
		scrollToExperiencesMobile(){
			this.$refs.experiences.scrollIntoView({ behavior: "smooth" });
      document.getElementById('mobile-menu').style.left='100%';
		},
		scrollToContactsMobile(){
			this.$refs.contacts.scrollIntoView({ behavior: "smooth" });
      document.getElementById('mobile-menu').style.left='100%';
		},
		restartExperience(){
			this.$router.push('/introduction');
		},
    disableWater(){
      $('#section-1').ripples("destroy");
      document.getElementById('section-1').style.backgroundImage='url("/assets/images/liquid_bg.jpg")';
      this.isWaterActive=false;

    },
    enableWater(){
      $('#section-1').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        imageUrl: '/assets/images/liquid_bg.jpg'
      });
      this.isWaterActive=true;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');

#business-header{
  height: 10vh;
  width: 100%;
  background-color: #00000001;
  color: var(--liquid-contrast-menu);
  font-weight: 600;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 24px, rgba(0, 0, 0, 0.22) 0px 8px 6px;
  opacity: 0;
  animation: show 1s ease forwards;
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
#liquid-menu-icon{
  display: none;
}
#business-container{
    background-color: var(--secondary-color);
    min-height: 100vh;
}
#mobile-menu{
  display: none;
}
.liquid-button{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  color: #ccd7e8;
  border: 0.3px solid #ccd7e8;
  padding: 3px;
  border-radius: 5px;
  min-width: 20%;
  font-size: 18px;
  cursor: pointer;
}
.liquid-button:hover{
  background-color: #ccd7e8;
  color: black;
}
.liquid-menu-item{
  cursor: pointer;
}
#disable-effect{
  width: 10vh;
  height: 10vh;
  background-color: var(--liquid-contrast-menu);
  border-radius: 50%;
  position: fixed;
  bottom: 2%;
  right: 2%;
  z-index: 99;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
#droplet-icon{
  width: 100%;
  color: var(--text-color-contrast);
}
#sliding-bg-business{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 100%;
	  height: 100%;
    background-color: var(--primary-color);
    /* z-index: 99999; */
    animation: slide 1s 1 forwards;
    overflow-y: scroll;
    overflow-x: hidden;
}
#section-1,#section-2{
	height: 100vh;
}
#section-1{
  width: 100%;
  height: 115vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transform: translate3d(0,0,0);
  background-size: cover;
  background-position: 50% 0;
  clip-path: circle(0);
  animation: reveal 3s ease forwards;
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
#section2{
  width: 100%;
  height: 100vh;
  position: relative;
}
#section2-desc{
  opacity: 0;
  animation: show 1s ease forwards;
}
#liquid-skills-section{
  padding-bottom: 40px;
}
@keyframes animate-left{
  0%{
    transform: translateX(0px);
  }
  50%{
    transform: translateX(-2px);
  }
  100%{
    transform: translateX(0px);
  }
}

@keyframes slide{
  to{
    left: 0;
  }
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
.section{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
}
.section-description{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;
  color: var(--text-color);
}
.section-description2{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10vh;
  width: 60%;
  color: var(--text-color);
}
.section-image{
  width: 40%;
}
#hero-image{
  display: none;
}

#glass-presentation{
  height: 25%;
  width: 40%;
  background-color: #00000001;
  color: var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 99;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: show 1s ease forwards;
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

@keyframes reveal {
  to{
    clip-path: circle(100%);
  }
}
.liquid-about{
  margin-bottom: 10vh;
}
.liquid-read-more{
  margin-top: 20px;
	padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
	background-color: var(--text-color);
	border: 1px solid var(--text-color);
	cursor: pointer;
  color: var(--primary-color);
  border-radius: 20px;
}
.section-description>p{
  font-size: 19px;
}
.liquid-read-more:hover{
  background-color: var(--primary-color);
  color: var(--text-color);
}
.liquid {
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.liquid-introduction-t{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-alignment{
  justify-content: flex-start;
}
.right-alignment{
  justify-content: flex-end;
}
.liquid h2 {
  position: absolute;
  font-size: 6vw;
  font-family: 'Rubik Moonrocks', cursive;
  font-weight: 400;
}
.introduction{
  justify-content: center;
  width: 100%;
}
.introduction h2{
  font-size: 4vw;
}
.introduction-descr{
  margin-top: 30px;
  color: var(--liquid-contrast-menu);
}
.liquid h2:nth-child(1) {
  color: var(--neom-btn2);
  text-shadow: -2px 2px 0px var(--name-color), -4px 4px 0px var(--name-color),
    -18px 18px 50px rgba(0, 0, 0, 0.5);
}
.liquid h2:nth-child(2) {
  color: var(--primary-color);
  animation: animate 3s ease-in-out infinite;
  opacity: 0.5;
}

.liquid h2:nth-child(3) {
  color: var(--primary-color);
  opacity: 0.5;
  animation: animate 6s ease-in-out infinite;
}
@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0 46%,
      15% 45%,
      34% 52%,
      50% 61%,
      68% 65%,
      85% 61%,
      100% 53%,
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      3% 59%,
      17% 67%,
      36% 70%,
      51% 66%,
      65% 56%,
      81% 49%,
      99% 45%,
      100% 100%,
      0% 100%
    );
  }
}

#about-img{
  width: 90%;
  height: 90%;
}
.rotate-right{
  transform: rotateZ(5deg);
}
.rotate-left{
  transform: rotateZ(-5deg);
}
#skills-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  width: 90%;
}
.wave{
  position: absolute;
  bottom: -12%;
  left: 0;
  transform: scale(1,0.5);
}
.wave>path{
  fill: var(--secondary-color);
}

.wave2{
  position: absolute;
  bottom: -12%;
  left: 0;
  transform: scale(1,0.5);
}
.wave2>path{
  fill: var(--primary-color);
}
.contact{
	text-align: right;
	margin-top: 20px;
	font-size: 25px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	text-decoration: none;
	color: inherit;
}
.contact-name{
	margin-right: 20px;
}
#experiences-intro{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
#experiences-wave{
  bottom: -7%;
}
#liquid-experiences{
  height: auto;
  padding-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
#liquid-first-element{
  margin-top: 5%;
}
#liquid-last-element{
  margin-bottom: 5%;
}
.liquid-experience-container{
  width: 80%;
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
  transition: scale 200ms ease;
}
.liquid-experience-container:hover{
  scale: 1.02;
}
.liquid-experience-even{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;
  height: auto;
  min-height: 30vh;
  border-radius: 20px;
  background-color: #00000001;
  color: #ccd7e8;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  z-index: 9999;
  padding: 40px;
  
}
.liquid-experience-odd{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  min-height: 30vh;
  border-radius: 20px;
  background-color: #00000001;
  color: #ccd7e8;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  z-index: 9999;
  padding: 40px;

}
.liquid-experience-image{
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  object-fit: cover;
}
.liquid-experience-desc-odd{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  flex-direction: column;
}
.liquid-experience-desc-even{
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 60%;
  flex-direction: column;
}
.experience-bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.mobile-exp-img{
  display: none;
}
@media screen and (max-width: 1400px){
  .section-description>p{
    font-size: 16px;
  }
}
@media screen and (max-width:450px){
  .liquid-menu-item{
    display: none;
  }
  #disable-effect{
    display: none;
  }
  #hero-image{
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    clip-path: circle(0);
    animation: reveal 3s ease forwards;
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    display: block;
  }
  #liquid-menu-icon{
    display: block;
  }
  #business-header{
    justify-content: flex-end;
    padding: 20px;
  }
  #mobile-menu{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 100%;
    height: 100vh;
    background-color: #00000001;
    color: var(--text-color);
    font-weight: 600;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 9;
    transition: left 300ms ease;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    font-size: 2em;
    overflow-x: hidden;
  }
  #close-icon{
    position: absolute;
    top: 40px;
    right: 40px;
  }
  #glass-presentation{
    width: 90%;
    height: 20%;
  }
  .introduction h2{
    font-size: 10vw;
  }
  .section{
    flex-direction: column !important;
    justify-content: space-evenly !important;
  }
  .section-description, .section-description2{
    align-items: center;
    width: 80%;
  }
  .left-alignment, .right-alignment{
    justify-content: center;
  }
  .liquid h2{
    font-size: 11vw;
  }
  .section-description > p{
    text-align: center;
  }
  .section-image {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  #section-1{
  width: 100%;
  height: 115vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url('/assets/images/liquid_bg.jpg'); */
  /* -webkit-transform: translate3d(0,0,0);
  background-size: cover;
  background-position: 50% 0; */
  clip-path: circle(100%);
  animation: none;
}
  .rotate-left, .rotate-right{
    transform: rotateZ(0deg);
  }
  .wave, .wave2 {
      bottom: -3%;
  }
  #experiences-wave{
    bottom: -2%;
  }
  #skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    width: 90%;
  }
  #liquid-skills-section{
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  #experiences-intro{
    flex-direction: column;
  }
  #liquid-experiences{
    padding-top: 40px;
    padding-bottom: 40px;
  }
  #experiences-intro>.section-image{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .liquid-experience-odd, .liquid-experience-even{
    flex-direction: column;
    padding: 20px;
    max-height: 40vh;
    min-height: 40vh;
  }
  .liquid-experience-desc-odd, .liquid-experience-desc-even{
    align-items: center;
    width: 80%;
  }
  .liquid-experience-desc-odd p, .liquid-experience-desc-even p, .liquid-experience-desc-odd h2, .liquid-experience-desc-even h2{
    text-align: center;
  }
  .liquid-experience-container{
    width: 90%;
  }
  .liquid-experience-image{
    margin-top: 20px;
  }
  #liquid-skills-section > .section-description2{
    width: 90%;
  }
  .wave, .wave2{
    bottom: -1%;
    transform: scale(1,1);
  }
  #experiences-wave {
    bottom: -1%;
  }
  #liquid-experiences{
    padding-bottom: 80px;
  }
  .desktop-exp-img{
    display: none;
  }
  .mobile-exp-img{
    display: block;
  }
}
</style>