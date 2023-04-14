
<template>
    <section id="business-container">
        <div id="sliding-bg-business">
          <div style="position: relative;" ref="scroll">

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

    }
  },
  methods:{
    handleScroll(){
     
    }
  },
  mounted(){
   
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
  position: relative;
}


</style>