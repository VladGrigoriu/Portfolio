
<template>
  <header id="business-header">
    <div @click="scrollToAbout">About</div>
    <div @click="scrollToSkills">Skills</div>
    <div @click="scrollToExperiences">Experiences</div>
    <div @click="scrollToContacts">Contacts</div>
  </header>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div id="sections-container" style="position: relative;" ref="scroll">

            <div class="section" id="section-1" data-rate=".4" data-direction="vertical">
              <div id="glass-presentation">

              </div>
              
              <img src="/assets/images/liquid_bg.jpg" id="hero-image"/>
              
            </div>
            <div ref="about" class="section" id="section2" data-rate=".2" data-direction="vertical">
              
              <div class="section-description">
                <div class="liquid left-alignment">
                  <h2>About</h2>
                  <h2>About</h2>
                  <h2>About</h2>
                </div>

                <p>{{ meStore.bio }}</p>
              </div>


              <div>
                <img src="/assets/images/pc_liquid1.png" id="about-img" class="rotate-right" />
              </div>

            </div>
            <div ref="skills" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="section-description2">
                <div class="liquid right-alignment">
                  <h2>Skills</h2>
                  <h2>Skills</h2>
                  <h2>Skills</h2>
                </div>

                <div id="skills-grid">
                  <!-- <SingleSkill v-for="skill in meStore.skills" :key="skill.name" :title="skill.name" :icon="skill.icon" :isIcon="skill.isIcon" /> -->
                </div>

              </div>

              <div>
                <img src="/assets/images/liquid_medal.png" id="about-img" class="rotate-left" />
              </div>

            </div>
            <div ref="experiences" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="liquid left-alignment">
                <h2>Experiences</h2>
                <h2>Experiences</h2>
                <h2>Experiences</h2>
              </div>

              <div>x</div>

            </div>
            <div ref="contacts" class="section" data-rate=".1" data-direction="vertical">
              
              <div class="liquid right-alignment">
                <h2>Contacts</h2>
                <h2>Contacts</h2>
                <h2>Contacts</h2>
              </div>

              <div>x</div>

            </div>
        </div>
        </div>    
    </section>

</template>

<script>
import { useMeStore } from '../stores/me';
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
    return { meStore };
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
}
#section-1,#section-2{
	height: 100vh;
}
#section-1{
  width: 100%;
  height: 100vh;
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
  font-size: 8vw;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
}
.grid-item{
  background-color: red;
}
</style>