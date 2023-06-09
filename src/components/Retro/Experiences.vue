<template>
    <div>
        <div v-for="(experience, index) in experienceStore.experiences" :key="experience.name" :class="(index+1) % 2 === 0 ? 'experience-even' : 'experience-odd'" :id="index === 0 ? 'first-element' : index+1 === experienceStore.experiences.length ? 'last-element' : ''">
            <div :class="(index+1) % 2 === 0 ? 'experience-description desc-even' : 'experience-description desc-odd'">
                <RouterLink :to="`/retro/experience/${experience.name}`"><h2 :class="(index+1) % 2 === 0 ? 'p-left p-top retro-subtitle' : 'p-right p-top retro-subtitle'">{{ experience.name }}</h2></RouterLink>
                <p :class="(index+1) % 2 === 0 ? 'p-left text-left' : 'p-right text-right'">
                    {{ experience.description }} <br>
                    <RouterLink class="discover-more" :to="`/retro/experience/${experience.name}`"><button class="read-more">{{ $t('discover_more') }} <FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button> </RouterLink>
                </p>
                <div :class="(index+1) % 2 === 0 ? 'experience-actions-left' : 'experience-actions-right'">
                    <div v-for="link in experience.links" :key="link.name" :class="(index+1) % 2 === 0 ? 'single-link-right' : 'single-link-left'">
                        <a target="_blank" :href="link.url" class="action-link" >
                            <FontAwesomeIcon :icon="link.icon" />
                            <p>{{ link.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div :class="(index+1) % 2 === 0 ? 'experience-image image-even' : 'experience-image image-odd'">
                <div class="image-container">
                    <img :src="experience.main_image" :class="experience.is_screenshot ? 'image screenshot' : 'image'" />
                </div>
                <div class="experience-date">
                    {{ experience.date_from }} -> {{ experience.date_to }}
                </div>
            </div>
            <Separator direction="left" :colored="true" />
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useExperienceStore } from '../../stores/experience';
import Separator from './Separator.vue';

export default {
    setup(){
        const experienceStore = useExperienceStore();
        return { experienceStore }
    },
    components: { Separator, FontAwesomeIcon }
}
</script>

<style scoped>
#first-element{
    border-top: 1.5px solid hsl(230, 5%, 23%);
}
#last-element{
    border: none;
}
.experience-odd{
    height: 180px;
    border-bottom: 1.5px solid hsl(230, 5%, 23%);
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
.experience-odd:nth-child(1){
    flex: 20%;
}
.experience-odd:nth-child(2){
    flex: 80%;
}
.experience-even{
    height: 180px;
    border-bottom: 1.5px solid hsl(230, 5%, 23%);
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    position: relative;
}
.experience-even:nth-child(1){
    flex: 20%;
}
.experience-even:nth-child(2){
    flex: 80%;
}
.experience-image{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.desc-even{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 70%;
}
.desc-odd{
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    width: 70%;
}
.image-odd{
    border-left: 1.5px solid hsl(230, 5%, 23%);
}
.image-even{
    border-right: 1.5px solid hsl(230, 5%, 23%);
}
.experience-description{
    width: 80%;
    height: 100%;
    position: relative;
    /* background-color: blue; */
}
.image-container{
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.image{
    width: 50%;
    object-fit: cover;
    /* filter: brightness(0); */
}
.screenshot{
    width: 100%;
    height: 100%;
    /* -webkit-filter: grayscale(100%); 
    filter: grayscale(100%); */
}
.experience-date{
    height: 20%;
    width: 100%;
    border-top: 1.5px solid hsl(230, 5%, 23%);
    background-color: black;
	color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-right{
    padding-right: 20px;
    padding-left: 20px;
}
.p-left{
    padding-left: 20px;
    padding-right: 20px;
}
.p-top{
    padding-top: 20px;
}
.experience-actions-left{
    position: absolute;
    bottom: 0;
    height: 20%;
    border-top: 1.5px solid hsl(230, 5%, 23%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}
.experience-actions-right{
    position: absolute;
    bottom: 0;
    height: 20%;
    border-top: 1.5px solid hsl(230, 5%, 23%);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
}
.single-link-left{
    border-left: 1.5px solid hsl(230, 5%, 23%);
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
}
.single-link-right{
    border-right: 1.5px solid hsl(230, 5%, 23%);
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
}
.action-link{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    text-decoration: none !important;
    color: inherit;

}
.single-link-left:hover,.single-link-right:hover{
    background-color: var(--text-color);
	color: var(--primary-color);
}
.text-left{
    text-align: left;
}
.text-right{
    text-align: right;
}
.discover-more{
    text-decoration: none;
    color: inherit;
    font-size: 13px;
    text-decoration: underline;
    margin-top: 20px;
}
.read-more{
	margin-top: 10px;
	padding: 5px;
	background-color: transparent;
	border: 1px solid black;
	cursor: pointer;
}
.read-more:hover{
	color: white;
	background-color: black;
}
@media screen and (max-width: 450px){
    .experience-image{
        width: 100%;
    }
    .experience-description{
        width: 100%;
    }
    .single-link-left{
        width: 40%;
    }
    .single-link-right{
        width: 40%;
    }
    .experience-even, .experience-odd {
        height: auto;
        flex-direction: column-reverse;
    }
    .p-right{
        text-align: end;
    }
    .p-left, .p-right{
        padding-bottom: 20px;
    }
    .experience-actions-right, .experience-actions-left{
        position: relative;
        height: 40px;
    }
    .screenshot {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-container {
        height: 150px;
        width: 100%;
    }
}
</style>