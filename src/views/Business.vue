
<template>
    <section id="business-container">
        <div id="sliding-bg-business">
			<div id="section-1">
				<Skills />
			</div>
			<div id="section-2">
				v
			</div>
        </div>
        
    </section>
</template>

<script>
import Skills from '../components/Business/Skills.vue';

export default{
	components:{ Skills }
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
</style>