<template>
    <div id="exp-template">
        <img src="/assets/images/liquid_experience.jpg" id="exp-bg" />

        <div id="exp-container">

            <div id="exp-desc-container">
                <div class="liquid right-alignment">
                  <h2>{{ experience.name }}</h2>
                  <h2>{{ experience.name }}</h2>
                  <h2>{{ experience.name }}</h2>
                </div>
            </div>

            <div id="exp-body">
                <div id="exp-desc">
                    <div v-for="role in experience.roles" :key="role.name">
                        <h2 >{{ role.name }}</h2><br>
                        <p>{{ role.description }}</p>
                        <br>
                    </div>
                </div>

                <div id="exp-details">
                    <span><strong>Skills: </strong>{{ experience.skills?.map(skill => skill).join(', ') }}</span>
                </div>

            </div>
            

        </div>
    </div>
</template>

<script>
import { useExperienceStore } from '../stores/experience';

export default {
    data(){
        return {
            experience: {},
            nextExperienceName: ''
        }
    },
    setup(){
        const experienceStore = useExperienceStore();
        return { experienceStore }
    },
    mounted(){
        this.experience = this.experienceStore.experiences.filter( experience => experience.name === this.$route.params.experienceName )[0];
        const elementPosition = this.experienceStore.experiences.map(experience => experience.name).indexOf(this.experience.name);

        if(this.experienceStore.experiences.length === elementPosition+1){
            this.nextExperienceName = this.experienceStore.experiences[0].name;
        }else{
            this.nextExperienceName = this.experienceStore.experiences[elementPosition+1].name;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');

#exp-template{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#exp-bg{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#exp-container{
    width: 80%;
    background-color: #00000001;
    color: #ccd7e8;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    min-height: 90vh;
    border-radius: 20px;
    padding: 40px;
    border: 0.3px solid #ccd7e8;
    margin-top: 40px;
    margin-bottom: 40px;
}
.liquid {
  position: relative;
  display: flex;
  align-items: center;
  top: 20px;
  left: 20px;
}
.liquid h2 {
  position: absolute;
  font-size: 6vw;
  font-family: 'Rubik Moonrocks', cursive;
  font-weight: 400;
}
.liquid h2:nth-child(1) {
  color: var(--text-color);
  text-shadow: -2px 2px 0px #ccd7e8, -4px 4px 0px #ccd7e8,
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
#exp-body{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 8vw;
}
#exp-desc{
    width: 60%;
}
#exp-details{
    width: 30%;
}
</style>