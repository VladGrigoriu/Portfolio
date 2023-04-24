
<template>
    <main id="presentation">
        <BaseHeader />
        <div class="separator"></div>
        <div class="vertical-separator"></div>
        <div id="bio">
            <Name />
            <span id="short-description" class="cursive">{{ $t('short_description') }}</span>
            <div id="mobile-scroller" class="scroll" @click="scrollToCustomization">
                <FontAwesomeIcon icon="fa-solid fa-caret-down" />
            </div>

        </div>
        <div id="customize-experience" ref="customization">
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
            <h3>{{ $t('choose_style') }}</h3>
            <div id="style-switcher">
                <SingleStyle name="Liquid" img="liquid.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Illustrated" img="illustrated.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Retro" img="retro.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Hacker" img="hacker.jpg" :isComingSoon="true" />
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
        selectStyle(style){
            this.selectedStyle=style;
        },
        scrollToCustomization(){
            this.$refs.customization.scrollIntoView({ behavior: "smooth" });
        },
        startExperience(){
            switch (this.selectedStyle){
                case 'Liquid':
                    document.getElementById('sliding-bg').classList.add('sliding-animation');
                    setTimeout(() => {
                        this.$router.push('/liquid');
                    }, 1000);
                    break;
                case 'Illustrated':
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