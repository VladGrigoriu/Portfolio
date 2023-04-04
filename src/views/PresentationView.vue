
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

<template>
    <main id="presentation">
        <header class="header">
            <a target="_blank" href="https://it.linkedin.com/in/vladgrigoriu"><FontAwesomeIcon icon="fa-brands fa-linkedin" class="icons"/></a>
            <a target="_blank" href="https://github.com/VladGrigoriu"><FontAwesomeIcon icon="fa-brands fa-github" class="icons ml mr"/></a>
        </header>
        <div class="separator"></div>
        <div class="vertical-separator"></div>
        <div id="bio">
            <Name />
            <span id="short-description" class="cursive">{{ $t('short_description') }}</span>
        </div>
        <div id="customize-experience">
            <h2>Customize your experience</h2><br>
            <h3>Choose Theme</h3>
            <div id="theme-selector">
                <div class="single-theme-container" @click="setTheme('dark')">
                    <div class="single-theme dark"></div>
                    <p>Dark</p>
                </div>
                <div class="single-theme-container" @click="setTheme('light')">
                    <div class="single-theme light"></div>
                    <p>Light</p>
                </div>
                <div class="single-theme-container" @click="setTheme('cyan')">
                    <div class="single-theme cyan"></div>
                    <p>Cyan</p>
                </div>
                <div class="single-theme-container" @click="setTheme('beige')">
                    <div class="single-theme beige"></div>
                    <p>Beige</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Name from '../components/Name.vue';
import { useThemeStore } from '../stores/theme'

export default {
    components: { Name },
    setup(){
        const themeStore = useThemeStore();
        return { themeStore };
    },
    methods:{
        setTheme(theme){
            this.themeStore.setTheme(theme);
        }
    }
}
</script>

<style scoped src="../assets/presentation.css" />