<style scoped src="../assets/retro.css"></style>

<template>
	<NoiseBackground />
	<img src="/assets/images/bio_man.png" id="bg-img" />
	<img src="/assets/images/medal.png" id="bg-img2" />
	<img src="/assets/images/profession_man.png" id="bg-img3" />

	<div id="retro-container">
		
		<JournalBackground />



		<div id="journal">
			
			<div id="journal-border">
				
				<div id="top-bar">

					<div class="side-topbar">
						<img src="/assets/images/coffee_man.png" class="illustration left-illustration"/>
					</div>
					<div id="center-topbar" class="name">
						WELCOME
					</div>
					<div class="side-topbar">
						<img src="/assets/images/coffee_man.png" class="illustration"/>
					</div>

				</div>

				<Menu @scrollToFESkills="scrollToFESkills" @scollToAbout="scrollToAbout" @scrollToExperiences="scrollToExperiences" @scrollToContacts="scrollToContacts" />
				
				<Separator direction="left" ref="about" />

				<div id="main-journal-body">
					<div id="box-one" class="right-border">
						<h2 class="box-title">BIOGRAPHY</h2>
						<p class="box-text incremental-padding">I'm a {{ this.$myAge }} years old software developer based in Rome, Italy. I have worked with Front-end and Back-end Systems and Technologies to help build great software on the web. During my work experience I have supported various companies in 𝒅𝒊𝒈𝒊𝒕𝒂𝒍𝒊𝒛𝒊𝒏𝒈 their business. I have experience in development, design, testing, bug fixing, maintenance and optimizations of web or mobile applications using the most modern development 𝒇𝒓𝒂𝒎𝒆𝒘𝒐𝒓𝒌𝒔.</p>
						<img src="/assets/images/bio_man.png" class="illustration bio-man"/>
					</div>
					<div id="box-two">
						<div class="box-top-element">
							<img src="/assets/images/profession_man.png" class="illustration profession-man"/>
							<h3 class="profession-name">Front-end developer</h3>
						</div>
						<div class="box-discover-more" @click="scrollToFESkills">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
					<div id="box-three">
						<div class="box-top-element">
							<img src="/assets/images/profession_man.png" class="illustration profession-man"/>
							<h3 class="profession-name">Back-end developer</h3>
						</div>
						<div class="box-discover-more"  @click="scrollToBESkills">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
				</div>

				<Separator direction="right" />

				<Subtitle title="SKILLS" ref="feSkills"/>

				<Separator direction="left" />

				<div class="skill-container">
					<div class="skill-grid-item" id="main-skill">
						<img src="/assets/images/medal.png" class="medal"/>
						<h2 class="skill-name">FRONT-END SKILLS</h2>
					</div>
					<div class="skill-grid-item skill-hover top-border bottom-border">
						<SingleSkill title="Javascript" icon="js">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover bottom-border">
						<SingleSkill title="CSS" icon="css3">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover">
						<SingleSkill title="HTML" icon="html5">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover left-border">
						<SingleSkill title="React" icon="react">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover left-border">
						<SingleSkill title="Vue" icon="vuejs">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover left-border">
						<SingleSkill title="Angular" icon="angular">
							<template #stars>
								<Stars :number="4" />
							</template>
						</SingleSkill>
					</div>
				</div>

				<Separator direction="right" ref="beSkills" />

				<div class="skill-container">
					<div class="skill-grid-item top-border bottom-border right-border" id="main-skill2">
						<h2 class="skill-name">BACK-END SKILLS</h2>
						<img src="/assets/images/medal.png" class="medal"/>
					</div>
					<div class="skill-grid-item skill-hover top-border bottom-border">
						<SingleSkill title="Laravel" icon="laravel">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover bottom-border">
						<SingleSkill title="PHP" icon="php">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover right-border">
						<SingleSkill title="MySQL" icon="mysql.svg" :isIcon="false">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover right-border">
						<SingleSkill title="MongoDB" icon="mongodb.svg" :isIcon="false">
							<template #stars>
								<Stars :number="4" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover right-border">
						<SingleSkill title="C#" icon="c_sharp.svg" :isIcon="false">
							<template #stars>
								<Stars :number="4" />
							</template>
						</SingleSkill>
					</div>  
					<div class="skill-grid-item skill-hover">
						<SingleSkill title="NodeJS" icon="node-js">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>  
				</div>

				<Separator direction="left" />

				<Subtitle title="EXPERIENCES" ref="experiences" />

				<Separator direction="right" />

				<Experiences />

				<Separator direction="left" />

				<Subtitle title="CONTACTS" ref="contacts" />

				<Separator direction="right" />

				<div id="contacts-section">
					<div id="contact-box1" class="left-border">
						<h2 class="contacts-title">CONTACTS</h2>
						<a v-for="contact in contactStore.contacts" target="_blank" :href="contact.url" :key="contact.name" class="contact">
							<span class="contact-name">{{ contact.name }}</span> <FontAwesomeIcon :icon="contact.icon" /> 
						</a>
						<img src="/assets/images/retro_contact.png" class="illustration contact-man"/>
					</div>
					<div id="contact-box2">
						<div class="box-top-element">
							<img src="/assets/images/bio_man.png" class="illustration profession-man"/>
							<h3 class="profession-name">Back-end developer</h3>
						</div>
						<div class="box-discover-more">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
					<div id="contact-box3" class="top-border">
						<div class="box-top-element">
							<img src="/assets/images/bio_man.png" class="illustration profession-man"/>
							<h3 class="profession-name">Restart experience</h3>
						</div>
						<div class="box-discover-more" @click="restartExperience">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
				</div>

				<Separator direction="left" />

				<Menu @scrollToFESkills="scrollToFESkills" @scollToAbout="scrollToAbout" @scrollToExperiences="scrollToExperiences" @scrollToContacts="scrollToContacts" />

				<Separator direction="right" />


			</div>

		</div>

	</div>
</template>

<script>
import Menu from '../components/Retro/Menu.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Separator from '../components/Retro/Separator.vue';
import SingleSkill from '../components/Retro/SingleSkill.vue';
import Subtitle from '../components/Retro/Subtitle.vue';
import Experiences from '../components/Retro/Experiences.vue';
import Stars from '../components/Retro/Stars.vue';
import { useContactStore } from '../stores/contact'
import NoiseBackground from '../components/Retro/NoiseBackground.vue';
import JournalBackground from '../components/Retro/JournalBackground.vue';
import { ref } from 'vue';



export default {
	components: { Separator, FontAwesomeIcon, SingleSkill, Subtitle, Experiences, Stars, Menu, NoiseBackground, JournalBackground },
	setup(){
        const contactStore = useContactStore();

        return { contactStore };
    },
	methods:{
		scrollToFESkills(){
			this.$refs.feSkills.$el.scrollIntoView({ behavior: "smooth" });
		},
		scrollToBESkills(){
			this.$refs.beSkills.$el.scrollIntoView({ behavior: "smooth" });
		},
		scrollToAbout(){
			this.$refs.about.$el.scrollIntoView({ behavior: "smooth" });
		},
		scrollToExperiences(){
			this.$refs.experiences.$el.scrollIntoView({ behavior: "smooth" });
		},
		scrollToContacts(){
			this.$refs.contacts.$el.scrollIntoView({ behavior: "smooth" });
		},
		restartExperience(){
			this.$router.push('/introduction');
		}
	}
}
</script>