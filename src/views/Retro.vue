<style scoped src="../assets/retro.css"></style>

<template>
	<NoiseBackground />
	<div id="pattern-container">
		<img src="/assets/images/character3.png" id="bg-img" />
		<img src="/assets/images/character7.png" id="bg-img2" />
		<img src="/assets/images/character2.png" id="bg-img3" />
		<img src="/assets/images/character1.png" id="bg-img4" />
	</div>

	<div id="retro-container">
		
		<JournalBackground />



		<div id="journal">
			
			<div id="journal-border">
				
				<div id="top-bar">

					<div class="side-topbar">
						<img src="/assets/images/character1.png" class="illustration left-illustration"/>
					</div>
					<div id="center-topbar" class="name retro-title">
						WELCOME
					</div>
					<div class="side-topbar">
						<img src="/assets/images/character1.png" class="illustration"/>
					</div>

				</div>

				<Menu @scrollToFESkills="scrollToFESkills" @scollToAbout="scrollToAbout" @scrollToExperiences="scrollToExperiences" @scrollToContacts="scrollToContacts" />
				
				<Separator direction="left" ref="about" :colored="true" />

				<div id="main-journal-body">
					<div id="box-one" class="right-border">
						<h2 class="box-title retro-title">BIOGRAPHY</h2>
						<p class="box-text incremental-padding">I'm a {{ this.$myAge }} years old software developer based in Rome, Italy. I have worked with Front-end and Back-end Systems and Technologies to help build great software on the web. During my work experience I have supported various companies in 𝒅𝒊𝒈𝒊𝒕𝒂𝒍𝒊𝒛𝒊𝒏𝒈 their business. I have experience in development, design, testing, bug fixing, maintenance and optimizations of web or mobile applications using the most modern development 𝒇𝒓𝒂𝒎𝒆𝒘𝒐𝒓𝒌𝒔.</p>
						<img src="/assets/images/character4.png" class="illustration bio-man"/>
					</div>
					<div id="box-two">
						<div class="box-top-element">
							<img src="/assets/images/character2.png" class="illustration profession-man"/>
							<h3 class="profession-name retro-subtitle">Front-end developer</h3>
						</div>
						<div class="box-discover-more" @click="scrollToFESkills">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
					<div id="box-three">
						<div class="box-top-element">
							<img src="/assets/images/character3.png" class="illustration profession-man"/>
							<h3 class="profession-name retro-subtitle">Back-end developer</h3>
						</div>
						<div class="box-discover-more"  @click="scrollToBESkills">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
				</div>

				<Separator direction="right" :colored="true" />

				<Subtitle title="SKILLS" ref="feSkills"/>

				<Separator direction="left" :colored="true" />

				<div class="skill-container">
					<div class="skill-grid-item" id="main-skill">
						<img src="/assets/images/character5.png" class="medal"/>
						<h2 class="skill-name retro-title">FRONT-END SKILLS</h2>
					</div>
					<div class="skill-grid-item skill-hover top-border bottom-border js">
						<SingleSkill title="Javascript" icon="js">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover bottom-border css">
						<SingleSkill title="CSS" icon="css3">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover html">
						<SingleSkill title="HTML" icon="html5">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover left-border react">
						<SingleSkill title="React" icon="react">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover left-border vue">
						<SingleSkill title="Vue" icon="vuejs">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover left-border angular">
						<SingleSkill title="Angular" icon="angular">
							<template #stars>
								<Stars :number="4" />
							</template>
						</SingleSkill>
					</div>
				</div>

				<Separator direction="right" ref="beSkills" :colored="true" />

				<div class="skill-container">
					<div class="skill-grid-item top-border bottom-border right-border" id="main-skill2">
						<h2 class="skill-name retro-title">BACK-END SKILLS</h2>
						<img src="/assets/images/character6.png" class="medal"/>
					</div>
					<div class="skill-grid-item skill-hover top-border bottom-border laravel">
						<SingleSkill title="Laravel" icon="laravel">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover bottom-border php">
						<SingleSkill title="PHP" icon="php">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover right-border mysql">
						<SingleSkill title="MySQL" icon="mysql.svg" :isIcon="false">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover right-border mongo">
						<SingleSkill title="MongoDB" icon="mongodb.svg" :isIcon="false">
							<template #stars>
								<Stars :number="4" />
							</template>
						</SingleSkill>
					</div>
					<div class="skill-grid-item skill-hover right-border csharp">
						<SingleSkill title="C#" icon="c_sharp.svg" :isIcon="false">
							<template #stars>
								<Stars :number="4" />
							</template>
						</SingleSkill>
					</div>  
					<div class="skill-grid-item skill-hover node">
						<SingleSkill title="NodeJS" icon="node-js">
							<template #stars>
								<Stars :number="5" />
							</template>
						</SingleSkill>
					</div>  
				</div>

				<Separator direction="left" :colored="true" />

				<Subtitle title="EXPERIENCES" ref="experiences" />

				<Separator direction="right" :colored="true" />

				<Experiences />

				<Separator direction="left" :colored="true" />

				<Subtitle title="CONTACTS" ref="contacts" />

				<Separator direction="right" :colored="true" />

				<div id="contacts-section">
					<div id="contact-box1" class="left-border">
						<h2 class="contacts-title retro-title">CONTACTS</h2>
						<a v-for="contact in contactStore.contacts" target="_blank" :href="contact.url" :key="contact.name" class="contact">
							<span class="contact-name">{{ contact.name }}</span> <FontAwesomeIcon :icon="contact.icon" /> 
						</a>
						<img src="/assets/images/character7.png" class="illustration contact-man"/>
					</div>
					<div id="contact-box2">
						<div class="box-top-element">
							<img src="/assets/images/character2.png" class="illustration profession-man"/>
							<h3 class="profession-name retro-subtitle">Back-end developer</h3>
						</div>
						<div class="box-discover-more">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
					<div id="contact-box3" class="top-border">
						<div class="box-top-element">
							<img src="/assets/images/character3.png" class="illustration profession-man"/>
							<h3 class="profession-name retro-subtitle">Restart experience</h3>
						</div>
						<div class="box-discover-more" @click="restartExperience">
							<p>Check Skills</p>
							<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" class="box-discover-icon" />
						</div>
					</div>
				</div>

				<Separator direction="left" :colored="true" />

				<Menu @scrollToFESkills="scrollToFESkills" @scollToAbout="scrollToAbout" @scrollToExperiences="scrollToExperiences" @scrollToContacts="scrollToContacts" />

				<Separator direction="right" :colored="true" />


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