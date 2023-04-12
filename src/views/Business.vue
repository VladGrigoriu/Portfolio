
<template>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div style="position: relative;" ref="scroll">
            <div id="path-container">
              <svg id="path-svg" viewBox="0 0 42 1016" fill="none" preserve-aspect-ratio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
                  <path id="path" d="M17 0.5V225.5C13.3333 237.167 9.6 264.1 24 278.5C26.5 290.667 24.5 293.5 9.5 293C3.1 287 2.99998 282.5 3 281V265C3.83333 259.667 7 252 10.5 251C15.3 251 21.5 251 24 251C27.8333 252.167 35.5 255.4 35.5 259C35.5 262.6 37.8333 271.167 39 275L24 315L17 354L24 492.5V530.5V1009V1016" stroke="#C33232" stroke-width="5"/>
              </svg>
            </div>
            
            <div class="section" data-rate=".4" data-direction="vertical">
              <h2>Section 1</h2>
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
      path: null,
      pathLength: null
    }
  },
  created(){
    
  },
  methods:{
    handleScroll(){
      let scrollPercentage = ( document.getElementById("sliding-bg-business").scrollTop + document.body.scrollTop ) / ( document.getElementById("sliding-bg-business").scrollHeight - document.getElementById("sliding-bg-business").clientHeight );
      let drawLenght = this.pathLength * scrollPercentage;
      this.path.style.strokeDashoffset = this.pathLength - drawLenght;
      console.log(this.path.style.strokeDashoffset)
    }
  },
  mounted(){
    this.path = document.querySelector('path');
    this.pathLength = this.path.getTotalLength();
    this.path.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;
    this.path.style.strokeDashoffset = this.pathLength;
    document.getElementById("sliding-bg-business").addEventListener('scroll', this.handleScroll);
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
#Layer_1{
  width: 30%;
}
#color_x5F_1_32_,#color_x5F_3_33_{
  animation: animate-left 2s ease infinite;
}
#section-1,#section-2{
	height: 100vh;
}
#section-1{
	display: flex;
	align-items: center;
	justify-content: center;
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
.section{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#path-container{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  overflow: hidden;
  pointer-events: none;
}
#path-svg{
  display: inline-block;
  height: 100%;
}
#path{
  stroke: var(--text-color);
}
</style>