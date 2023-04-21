<template>
    <div id="ill-exp">
        
        <div class="ill-text">
            <div class="shadows">
                <span v-for="(letter, index) in experience.name" :key="index">
                  {{ letter }}
                </span>
              </div>

              <div v-for="role in experience.roles" :key="role.name">
                    <h2 class="ill-exp-title-desc">{{ role.name }}</h2><br>
                    <p class="ill-exp-desc">{{ role.description }}</p>
                    <br>
                </div>
        </div>
        <div>
            <img src="/assets/images/illustrated3.jpg" class="ill-exp-img" />
        </div>

    </div>
    <div id="ill-skills">

        <div class="ill-text">
            <div class="shadows">
                <span v-for="(letter, index) in ['s', 'k', 'i', 'l', 'l', 's']" :key="index">
                  {{ letter }}
                </span>
            </div>

            <div>
                <span>{{ experience.skills?.map(skill => skill).join(', ') }}</span>
            </div>
            <br>
            <div class="shadows">
                <span v-for="(letter, index) in ['l', 'i', 'n', 'k', 's']" :key="index">
                  {{ letter }}
                </span>
            </div>
            <div id="illustrated-exp-links">
                <div v-for="link in experience.links" :key="link.name" class="illustrated-single-link">
                    <a target="_blank" :href="link.url" class="illustrated-action-link" >
                        <FontAwesomeIcon :icon="link.icon" />
                        <p>{{ link.name }}</p>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <img src="/assets/images/illustrated2.jpg" class="ill-exp-img" />
        </div>

    </div>
</template>

<script>
import { useExperienceStore } from '../stores/experience';

export default {
    data(){
        return {
            experience: {},
            nextExperienceName: ''
        }
    },
    setup(){
        const experienceStore = useExperienceStore();
        return { experienceStore }
    },
    mounted(){
        this.experience = this.experienceStore.experiences.filter( experience => experience.name === this.$route.params.experienceName )[0];
        const elementPosition = this.experienceStore.experiences.map(experience => experience.name).indexOf(this.experience.name);

        if(this.experienceStore.experiences.length === elementPosition+1){
            this.nextExperienceName = this.experienceStore.experiences[0].name;
        }else{
            this.nextExperienceName = this.experienceStore.experiences[elementPosition+1].name;
        }
    }
}
</script>

<style scoped>
#ill-exp{
    height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    /* max-height: 100vh; */
    /* overflow-y: hidden; */
}
#ill-exp>div, #ill-skills>div{
    width: 50%;
    height: 100vh;
}
.ill-text{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 40px;
}
.shadows {
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px var(--secondary-color);
    color: var(--text-color);
    letter-spacing: -0.05em;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    font-size: 80px;
    transition: all 0.25s ease-out;
    font-weight: 700;
}
.ill-exp-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.ill-exp-title-desc{
    font-size: 18px;
}
.ill-exp-desc{
    font-size: 14px;
}
#ill-skills{
    height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    color: var(--text-color);
    overflow-y: hidden;
}
.illustrated-single-link{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 0.3px solid var(--text-color);
    padding: 3px;
    border-radius: 5px;
    background-color: var(--text-color);
    color: var(--primary-color);
}
#illustrated-exp-links{
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
}
.illustrated-action-link{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
@media screen and (max-width: 450px){
    #ill-exp, #ill-skills{
        flex-direction: column;
        height: auto;
    }
    #ill-exp>div, #ill-skills>div{
        width: 100%;
        height: auto;
    }
    .shadows {
        font-size: 50px;
    }
    .ill-exp-img{
        height: 50vh;
    }
}
</style>