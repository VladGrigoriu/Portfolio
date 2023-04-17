
<template>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div id="sections-container" style="position: relative;" ref="scroll">

            <div class="section" id="section-1" data-rate=".4" data-direction="vertical">
              <h2>Bio</h2>
              
              <div id="hero-image-container">
                <img src="/assets/images/business_hero.png" id="hero-image"/>
              </div>
              
            </div>
            <div class="section" data-rate=".2" data-direction="vertical">
              <h2>Section 2</h2>
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
import Skills from '../components/Business/Skills.vue';

export default{
	components:{ Skills },
  data(){
    return {
      heroImage: null,
      initialClip: 100
    }
  },
  methods:{
    handleScroll(){
      console.log('sc')
      document.getElementById('hero-image').style.clipPath = 'circle(' + ( Math.max(0, this.initialClip - (document.getElementById('sliding-bg-business').scrollTop*0.5))) + '%)';
      console.log(document.getElementById('hero-image').style.clipPath)
    }
  },
  mounted(){
    this.heroImage = document.getElementById('hero-image');
    document.getElementById('sliding-bg-business').addEventListener('scroll', this.handleScroll)
  },
}
</script>

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
	height: 100%;
    background-color: var(--primary-color);
    z-index: 99999;
    animation: slide 1s 1 forwards;
	overflow-y: scroll;
}
#section-1,#section-2{
	height: 100vh;
}
#section-1{
	display: flex;
	align-items: center;
	justify-content: space-between;
  width: 100%;
  height: 90vh;
  padding-left: 20%;
  padding-right: 20%;
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
#sections-container:nth-of-type(even){
  background-color: var(--secondary-color);
}
.section{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
#hero-image-container{
  height: 70%;
  width: 50%;
  position: relative;
}
#hero-image{
  object-fit: cover;
  width: 100%;
  /* clip-path: circle(0); */
  /* animation: reveal 3s ease forwards; */
}

@keyframes reveal {
  to{
    clip-path: circle(100%);
  }
}
</style>