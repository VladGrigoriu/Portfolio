<template>
    <div id="exp-template">
        <img src="/assets/images/liquid_experience.jpg" id="exp-bg" />

        <div id="exp-container">
            <!-- <RouterLink :to="`/liquid/experience/${nextExperienceName}`" id="next-link"><div>Next Experience</div></RouterLink> -->
            <RouterLink to="/liquid" id="home-link"><div>Home</div></RouterLink>
            <div id="exp-desc-container">
                <div class="liquid right-alignment">
                  <h2>{{ $t('menu.about') }}</h2>
                  <h2>{{ $t('menu.about') }}</h2>
                  <h2>{{ $t('menu.about') }}</h2>
                </div>
            </div>

            <div id="exp-body">
                <div id="exp-desc">
                    <!-- <div v-for="role in experience.roles" :key="role.name">
                        <h2 >{{ role.name }}</h2><br>
                        <p>{{ role.description }}</p>
                        <br>
                    </div> -->
                    <div v-html="meStore.longBio"></div>
                </div>


            </div>
            

        </div>
    </div>
</template>

<script>
import { useMeStore } from '../stores/me';

export default {
    setup(){
        const meStore = useMeStore();
        return { meStore }
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
    background-color: var(--primary-color);
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
    clip-path: circle(0);
    animation: reveal 3s ease forwards;
}
@keyframes reveal {
  to{
    clip-path: circle(100%);
  }
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
    position: relative;
    opacity: 0;
    animation: show 1s ease forwards;
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
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
  font-size: 4vw;
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
#exp-links{
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;
  column-gap: 20px;
  row-gap: 20px;
}
.liquid-single-link{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 0.3px solid #ccd7e8;
  padding: 3px;
  border-radius: 5px;
}
.liquid-single-link:hover{
  background-color: #ccd7e8;
  color: black;
}
.action-link{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
#next-link{
  position: absolute;
  right: 2%;
  top: 2%;
  border: 0.3px solid #ccd7e8;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 20px;
}
#home-link{
  position: absolute;
  right: 2%;
  top: 2%;
  border: 0.3px solid #ccd7e8;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 20px;
}
#next-link:hover, #home-link:hover{
  background-color: #ccd7e8;
  color: black;
}

@media screen and (max-width:450px){
  #exp-container{
    width: 95%;
  }
  #exp-body{
    flex-direction: column;
  }
  #exp-details, #exp-desc{
    width: 100%;
  }
  #exp-desc-container{
    margin-top: 70px;
  }
  #home-link{
    top: 2%;
    left: 5%;
    width: 43%;
  }
  #next-link{
    top: 2%;
    right: 5%;
    width: 43%;
  }
  #exp-desc-container>.liquid>h2{
    font-size: 8vw;
  }
  .liquid{
    top: 0;
    left: 0;
  }
  #exp-container{
    padding: 10px;
  }
  #exp-links{
    grid-template-columns: 45% 45%;
  }
}
</style>