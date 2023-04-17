
<template>
  <header id="business-header">
    <div class="liquid-menu-item" @click="scrollToAbout">About</div>
    <div class="liquid-menu-item" @click="scrollToSkills">Skills</div>
    <div class="liquid-menu-item" @click="scrollToExperiences">Experiences</div>
    <div class="liquid-menu-item" @click="scrollToContacts">Contacts</div>
  </header>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div id="sections-container" style="position: relative;" ref="scroll">

            <div class="section" id="section-1" data-rate=".4" data-direction="vertical">
              <div id="glass-presentation">

              </div>
              
              <img src="/assets/images/liquid_bg.jpg" id="hero-image"/>
              
              <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <!-- <div class='wave'></div> -->
            <div ref="about" class="section" id="section2" data-rate=".2" data-direction="vertical">
              
              <div class="section-description">
                <div class="liquid left-alignment">
                  <h2>About</h2>
                  <h2>About</h2>
                  <h2>About</h2>
                </div>

                <p>{{ meStore.bio }}</p>
              </div>


              <div class="section-image">
                <img src="/assets/images/pc_liquid1.png" id="about-img" class="rotate-right" />
              </div>

              <svg class="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <div ref="skills" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="section-description2">
                <div class="liquid right-alignment">
                  <h2>Skills</h2>
                  <h2>Skills</h2>
                  <h2>Skills</h2>
                </div>

                <div id="skills-grid">
                  <SingleSkill v-for="skill in meStore.skills" :key="skill.name" :title="skill.name" :icon="skill.icon" :isIcon="skill.isIcon" />
                </div>

              </div>

              <div class="section-image">
                <img src="/assets/images/liquid_medal.png" id="about-img" class="rotate-left" />
              </div>

              <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <div ref="experiences" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="liquid left-alignment">
                <h2>Experiences</h2>
                <h2>Experiences</h2>
                <h2>Experiences</h2>
              </div>

              <div class="section-image">
                <img src="/assets/images/liquid_experiences.png" id="about-img" class="rotate-right" />
              </div>

              <svg class="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,208C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>
            <div ref="contacts" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="section-description2">
                <div class="liquid right-alignment">
                  <h2>Contacts</h2>
                  <h2>Contacts</h2>
                  <h2>Contacts</h2>
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
import SingleSkill from '../components/Liquid/SingleSkill.vue';

export default {
  components: { SingleSkill },
  data(){
    return {
      heroImage: null,
      initialClip: 100
    }
  },
  setup(){
		const meStore = useMeStore();
    const contactStore = useContactStore();
    return { meStore, contactStore };
  },
  methods:{
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
		restartExperience(){
			this.$router.push('/introduction');
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
  color: var(--text-color);
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
#business-container{
    background-color: var(--secondary-color);
    height: 100vh;
}
.liquid-menu-item{
  cursor: pointer;
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
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#section2{
  width: 100%;
  height: 100vh;
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
  gap: 10vh;
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
}

#glass-presentation{
  height: 20%;
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
.liquid {
  position: relative;
  display: flex;
  /* justify-content: center; */
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
.liquid h2:nth-child(1) {
  color: var(--text-color);
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
  bottom: -15%;
  left: 0;
  transform: scale(1,0.5);
}
.wave>path{
  fill: var(--secondary-color);
}

.wave2{
  position: absolute;
  bottom: -15%;
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
</style>