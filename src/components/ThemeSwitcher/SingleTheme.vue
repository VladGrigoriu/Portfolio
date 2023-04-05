<template>
    <div :id="theme" class="single-theme-container" @click="setTheme(theme)">
        <div :class="'single-theme ' + theme"></div>
        <p class="theme-name">{{ themeName }}</p>
    </div>
</template>

<script>
import { useThemeStore } from '../../stores/theme'

export default {
    props:{
        theme: String,
        themeName: String
    },
    setup(){
        const themeStore = useThemeStore();
        return { themeStore };
    },
    mounted(){
      document.getElementById(localStorage.getItem('theme')).classList.add('active');
    },
    methods:{
        setTheme(theme){
          document.getElementById(localStorage.getItem('theme')).classList.remove('active');
          document.getElementById(theme).classList.add('active');
            this.themeStore.setTheme(theme);
        }
    }
}
</script>

<style scoped>
.single-theme-container{
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.single-theme{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: .3px solid var(--text-color);
  cursor: pointer;
}
.theme-name{
  cursor: pointer;
}
.dark{
  background-color: #161c23;
}
.light{
  background-color: #e8ecf3;
}
.cyan{
  background-color: #E0FFFF;
}
.beige{
  background-color: #fff0db;
}
.night-blue{
  background-color: #003366;
}
.active{
  transform: scale(1.2);
}
</style>