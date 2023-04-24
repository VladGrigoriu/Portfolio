<style scoped src="../assets/retro.css"></style>

<template>
    <NoiseBackground />
    <div id="retro-container">
        <JournalBackground />
        <div id="journal">
			
			<div id="journal-border">
                <div id="top-bar">

                    <!-- <div class="experience-side-topbar">
                        <img :src="experience.main_image" :class="experience.is_screenshot ? 'illustration experience-screenshot' : 'illustration experience-image'"/>
                    </div> -->
                    <div id="experience-topbar" class="name retro-title">
                        <h2 id="job-desc" class="retro-title">{{ $t('menu.about').toUpperCase() }}</h2>
                    </div>
                </div>

                <Separator :colored="true" />

                <div id="body">

                    <div id="center-body">
                        <h2 id="job-desc" class="retro-title">DESCRIPTION</h2>

                        <div v-html="meStore.longBio"></div>

                    </div>

                </div>

                <Separator :colored="true" />

                <SecondaryMenu :isExperience="false" :nextExperienceName="nextExperienceName" />

                <Separator :colored="true" />

            </div>

        </div>
    </div>
</template>

<script>
import JournalBackground from '../components/Retro/JournalBackground.vue';
import NoiseBackground from '../components/Retro/NoiseBackground.vue';
import SecondaryMenu from '../components/Retro/SecondaryMenu.vue';
import Separator from '../components/Retro/Separator.vue';
import { useMeStore } from '../stores/me';

export default {
    components: { NoiseBackground, JournalBackground, SecondaryMenu, Separator },
    data(){
        return {
            experience: {},
            nextExperienceName: ''
        }
    },
    setup(){
        const meStore = useMeStore();
        return { meStore }
    }
}
</script>

<style scoped>
/* .experience-side-topbar{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
} */
#experience-topbar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* border-left: 1.5px solid hsl(230, 5%, 23%); */
}
.experience-image{
    width: 50%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0);
}
.experience-screenshot{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#body{
    display: flex;
	align-items: flex-start;
	justify-content: center;
    border-top: 1.5px solid hsl(230, 5%, 23%);
}
/* .side-body{
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
    padding: 20px;
} */
#center-body{
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    height: 100%;
    border-left: 1.5px solid hsl(230, 5%, 23%);
}
#job-desc{
    font-size: 40px;
}

@media screen and (max-width: 450px){
    #experience-topbar {
        width: 100%;
        border-top: 1.5px solid hsl(230, 5%, 23%);
        border-left: none;
        text-align: center;
        padding: 10px;
    }
    #body {
        flex-direction: column-reverse;
    }
    #center-body {
        width: 100%;
        border-bottom: 1.5px solid hsl(230, 5%, 23%);
        border-left: none;
    }
    .side-body {
        width: 100%;
    }
}
</style>