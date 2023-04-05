
<template>
    <main id="presentation">
        <BaseHeader />
        <div class="separator"></div>
        <div class="vertical-separator"></div>
        <div id="bio">
            <Name />
            <span id="short-description" class="cursive">{{ $t('short_description') }}</span>
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
                    <SingleTheme theme="night-blue" themeName="Night Blue" />
                </template>
            </ThemeSwitcher>
            <h3>Choose style</h3>
            <div id="style-switcher">
                <SingleStyle name="Business" img="business.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Interactive" img="interactive.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Old Fashion" img="old_fashion.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
                <SingleStyle name="Hacker" img="hacker.jpg" @selectStyle="selectStyle" :selected="selectedStyle" />
            </div>
            <button class="btn continue" @click="startExperience">Continue</button>
        </div>

        <div id="sliding-bg"></div>

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
            selectedStyle: 'Business'
        }
    },
    methods:{
        selectStyle(style){
            this.selectedStyle=style;
        },
        startExperience(){
            document.getElementById('sliding-bg').classList.add('sliding-animation');
        }
    }
}
</script>

<style scoped src="../assets/presentation.css" />