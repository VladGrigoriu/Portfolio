    
<template>
    <section id="language-switcher-container">
        <img aria-label="Flag Icon" :src="`/assets/flags/${this.$i18n.locale}.svg`" @click="dropdown ? closeDropdown() : openDropdown()" class="static-flag-icon" />
        <section id="locales-dropdown">
            <div class="arrow-up"></div>
            <div class="single-locale-container" v-for="(locale, i) in localeStore.locales.sort()" :key="`locale-${i}`" role="button" @click="changeLocale(locale)">
                <div :id="localeStore.locales.length-1 === i ? 'last-flag' : ''" :class="locale === this.$i18n.locale ? 'flags-container flag-active' : 'flags-container'">
                    <img :src="`/assets/flags/${locale}.svg`" aria-label="Flag Icons" class="flag-icon" />
                    <div class="locale-name">{{ locale.toUpperCase() }}</div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { useLocaleStore } from '../../stores/locale'

export default {
    data() {
        return { 
            dropdown: false
        };
    },
    setup(){
        const localeStore = useLocaleStore();
        return { localeStore };
    },
    methods: {
        changeLocale(locale){
            this.localeStore.setLocale(locale);
            document.getElementById('locales-dropdown').style.opacity=0;
            document.getElementById('locales-dropdown').style.pointerEvents='none';
        },
        closeDropdown(){
            document.getElementById('locales-dropdown').style.opacity=0;
            document.getElementById('locales-dropdown').style.pointerEvents='none';
            this.dropdown=false;
        },
        openDropdown(){
            document.getElementById('locales-dropdown').style.opacity=1;
            document.getElementById('locales-dropdown').style.pointerEvents='all';
            this.dropdown=true;
        }
    },
};
</script>

<style scoped>
.single-locale-container{
    width: 100%;
}
.flags-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* flex-direction: column; */
    padding: 10px 20px;
    /* border-radius: 10px; */
    border-right: 0.5px solid var(--text-color);
    cursor: pointer;
}
#last-flag{
    border-right: none;
}
.flags-container:hover{
    background-color: var(--secondary-color);
}
.static-flag-icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    /* padding: 3px; */
    border: 1px solid var(--text-color);
    /* margin-top: -5px; */
}
.flag-icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
}
#language-switcher-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: show 1.5s 750ms linear forwards;
    animation-delay: 3s;
    opacity: 0;
}
#locales-dropdown{
    pointer-events: none;
    transition: opacity 300ms ease;
    opacity: 0;
    position: absolute;
    top: 82%;
    right: 0;
    margin-top: 10px;
    background-color: var(--primary-color);
    border: 0.5px solid var(--text-color);
    border-radius: 10px;
    width: 49.9%;
    box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.locale-name{
    color: var(--text-color);
    font-size: 14px;
    margin-left: 5px;
}
.arrow-up {
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;  
    border-bottom: 5px solid var(--primary-bg-color);
    box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: absolute;
    left: 45%;
    top: -2%;
  }
  .flag-active{
    background-color: var(--primary-border-color);
  }
  @media screen and (max-width:450px){

    #language-switcher-container{
        width: 50px;
    }

  }
</style>