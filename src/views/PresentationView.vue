
<template>
    <main id="presentation">
        <BaseHeader />
        <div class="separator"></div>
        <div class="vertical-separator"></div>
        <div id="bio">
            <Name />
            <span id="short-description" class="cursive">{{ $t('short_description') }}</span>
            <div id="mobile-scroller">
                <FontAwesomeIcon icon="fa-solid fa-caret-down" />
            </div>
        </div>
        <div id="customize-experience">
            <h2>{{ $t('customize') }}</h2><br>
            <h3>{{ $t('choose_theme') }}</h3>
            <ThemeSwitcher>
                <template #themes>
                    <SingleTheme theme="dark" themeName="Dark" />
                    <SingleTheme theme="light" themeName="Light" />
                    <SingleTheme theme="cyan" themeName="Cyan" />
                    <SingleTheme theme="beige" themeName="Beige" />
                    <SingleTheme theme="night-blue" themeName="Blue" />
                </template>
            </ThemeSwitcher>
            <h3>Choose style</h3>
            <div id="style-switcher">
                <SingleStyle name="Liquid" img="liquid.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Interactive" img="interactive.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Retro" img="retro.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Hacker" img="hacker.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
            </div>
            <button class="btn continue" @click="startExperience">Continue</button>
        </div>

        <div id="sliding-bg"></div>

        <div id="interactive-id" class="loader">
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
        </div>

        <canvas id="hacker-canvas"></canvas>


    </main>
</template>

<script>
import BaseHeader from '../components/Headers/BaseHeader.vue';
import Name from '../components/Name.vue';
import SingleTheme from '../components/ThemeSwitcher/SingleTheme.vue';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher.vue';
import SingleStyle from '../components/StyleCustomization/SingleStyle.vue';


export default {
    components: { Name, BaseHeader, ThemeSwitcher, SingleTheme, SingleStyle },
    data(){
        return {
            selectedStyle: 'Liquid'
        }
    },
    mounted(){
        document.getElementById('sliding-bg').classList.remove('sliding-animation');
        document.getElementById('interactive-id').classList.remove('loader--active');
        document.getElementById('hacker-canvas').style.display='none';
    },
    methods:{
        glitch() {
            const canvas = document.querySelector("canvas");
            const ctx = canvas.getContext("2d");
            const colors = [
            "#b4b2b5",
            "#dfd73f",
            "#6ed2dc",
            "#66cf5d",
            "#c542cb",
            "#d0535e",
            "#3733c9"];
            let linePos = 0, rAF;
            setTimeout(() => {
                rAF = window.requestAnimationFrame(this.glitch);
            }, 50);
            canvas.width = innerWidth;
            canvas.height = innerHeight;

            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');;
            ctx.fillRect(0, 0, innerWidth, innerHeight);

            // texts(colors[Math.floor(Math.random() * 7)]);
            ctx.shadowBlur = 0;
            ctx.shadowColor = "none";
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            for (let i = 0; i < 1000; i++) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
                ctx.fillRect(
                Math.floor(Math.random() * innerWidth),
                Math.floor(Math.random() * innerHeight),
                Math.floor(Math.random() * 30) + 1,
                Math.floor(Math.random() * 30) + 1);


                ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
                ctx.fillRect(
                Math.floor(Math.random() * innerWidth),
                Math.floor(Math.random() * innerHeight),
                Math.floor(Math.random() * 25) + 1,
                Math.floor(Math.random() * 25) + 1);

            }

            ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
            ctx.fillRect(
            Math.random() * innerWidth,
            Math.random() * innerHeight,
            Math.random() * innerWidth,
            Math.random() * innerHeight);

            ctx.setTransform(1, 0, 0, .8, .2, 0);


        },
        selectStyle(style){
            this.selectedStyle=style;
        },
        startExperience(){
            switch (this.selectedStyle){
                case 'Liquid':
                    document.getElementById('sliding-bg').classList.add('sliding-animation');
                    setTimeout(() => {
                        this.$router.push('/liquid');
                    }, 1000);
                    break;
                case 'Interactive':
                    document.getElementById('interactive-id').classList.add('loader--active');
                    setTimeout(() => {
                        this.$router.push({ path: '/illustrated'});
                    }, 1500);
                    break;
                case 'Hacker':
                    document.getElementById('hacker-canvas').style.display='block';
                    this.glitch();
                    setTimeout(() => {
                        this.$router.push('/hacker');
                    }, 3000);
                    break;
                case 'Retro':
                    this.$router.push('/retro');
            }

        }
    }
}
</script>

<style scoped src="../assets/presentation.css" />