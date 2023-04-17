
<template>
  <header id="business-header">
    <div>About</div>
    <div>Skills</div>
    <div>Experiences</div>
    <div>Contacts</div>
  </header>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div id="sections-container" style="position: relative;" ref="scroll">

            <div class="section" id="section-1" data-rate=".4" data-direction="vertical">
              <h2>Bio</h2>
              
           
                <img src="/assets/images/liquid_bg.jpg" id="hero-image"/>
              
            </div>
            <div class="section" id="section2" data-rate=".2" data-direction="vertical">
              <div class="liquid">
                <h2>About</h2>
                <h2>About</h2>
                <h2>About</h2>
              </div>
            </div>
            <div class="section" data-rate=".1" data-direction="vertical">
              <h2>Section 3</h2>
            </div>
            <div class="section" data-rate=".1" data-direction="vertical">
              <h2>Section 4</h2>
            </div>
        </div>
        </div>    
    </section>

</template>

<script>

export default {
  data(){
    return {
      heroImage: null,
      initialClip: 100
    }
  }
}
</script>

<style scoped>

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
  padding-left: 10%;
  padding-right: 10%;
}
#section2{
  width: 100%;
  height: 100vh;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}
.section:nth-of-type(odd){
  background-color: var(--primary-color);
}
.section{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

@keyframes reveal {
  to{
    clip-path: circle(100%);
  }
}
.liquid {
  position: relative;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.liquid h2 {
  position: absolute;
  font-size: 10vw;
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
</style>