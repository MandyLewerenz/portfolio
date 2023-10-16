<template>

  <navbarComponent/>
  <sidebarComponent/>

  <div class="sections-wrapper">

    <div class="full-screen" id="section1">
      <section class="section-profile">
        <div class="first-container"></div>
        <div class="image-container">
          <img :src="imagePath" class="rounded-circle" alt="Profilbild" /> 
          <div class="container text-center">
            <h1 class="mt-3">{{ name }}</h1>
            <p>{{ description }}</p>
          </div>
        </div>
      </section>
    </div>

    <div class="full-screen" id="section2">
      <section class="section-character">
        <div class="character-flex">
            
            <div class="character-grid custom-border" ref="pixelatedBg">

              <!-- SKILLS -->
              <div class="skills">
                <div class="nested-row">
                  <h2 class="heading" style="align-self: end;">Skills</h2>
                </div>
                <div class="nested-row" style="padding-left: 30px;">
                  <div class="tools-progres">
                    <skill-component 
                      v-for="skill in skills" 
                      :key="skill.id" 
                      :skill="skill">
                    </skill-component>
                  </div>
                </div>
              </div>

              <div class="avatar">
                  <img :src="avatarImage" alt="avatar" class="avatar-img"/>
                  <h2 class="heading">Mandy Lewerenz</h2>
              </div>

              <!-- TOOLS -->
              <div class="tools">
                <div class="nested-row">
                  <h2 class="heading-tools">Tools</h2>
                </div>
                <div class="nested-row-img">
                  <tool-component 
                    v-for="tool in tools" 
                    :key="tool.id" 
                    :tool="tool">
                  </tool-component>
                </div>
              </div>

            </div>

        </div>
      </section>
    </div>

    <!-- PROJEKTE -->
    <div class="full-screen" id="section3">
      <section class="section-projects">
        <project-component 
          v-for="project in projects" 
          :key="project.id" 
          :project="project">
        </project-component>
      </section>
    </div>

  </div>
</template>



<script>
  import '@/css/styles.scss';
  import '@/css/navbar.scss';
  import '@/css/character.scss';
  import '@/css/profile.scss';
  import '@/css/projects.scss';

  import '@/js/js.js';
  import { createSquares } from '@/js/js.js';
  import projectComponent from './projectComponent.vue'
  import skillComponent from './skillComponent.vue';
  import toolComponent from './toolComponent.vue';
  import navbarComponent from './navbarComponent.vue';
  import sidebarComponent from './sidebarComponent.vue';

  export default {
    components: {
      projectComponent,
      skillComponent,
      toolComponent,
      navbarComponent,
      sidebarComponent
    },
    data() {
      return {
        name: 'Mandy Lewerenz',
        description: 'Hi! I am a passionate Frontend Developer focused on creating engaging and visually appealing interfaces. Utilizing my expertise in HTML, CSS, JavaScript, and modern frameworks like Vue.js, I strive for excellence in every project, big or small. My design philosophy blends creativity with functionality to deliver a seamless user experience. Feel free to explore my portfolio, and don\'t hesitate to get in touch!',
        pixelImage: require('@/assets/pixelBg.jpg'),
        avatarImage: require('@/assets/avatar.png'),
        colors: ['#e0e0e0', '#e7b7b7', 'darkgrey'],
        squares: 200,
        size: 10,
        projects: [
        { 
          id: 1,
          image: require('@/assets/appLogoCloud.png'), 
          altText: 'Wetter Logo',
          name: 'Wetter App',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        { 
          id: 2,
          image: require('@/assets/docker.png'), 
          altText: 'Docker Logo',
          name: 'Memorie',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        { 
          id: 3,
          image: require('@/assets/docker.png'),
          altText: 'Docker Logo',
          name: 'To-Do',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        },
        ],
        skills: [
          { id: 1, name: 'HTML', class: 'bg-lnir html', width: '95%' },
          { id: 2, name: 'CSS/SASS', class: 'bg-lnir css', width: '95%' },
          { id: 3, name: 'JavaScript', class: 'bg-lnir js', width: '70%' },
          { id: 4, name: 'JSF', class: 'bg-lnir jsf', width: '70%' },
          { id: 5, name: 'Vue.js', class: 'bg-lnir vue', width: '30%' },
          { id: 6, name: 'Node', class: 'bg-lnir node', width: '30%' }
        ],
        tools: [
          { id: 1, image: require('@/assets/docker.png'), alt: 'Docker Logo' },
          { id: 2, image: require('@/assets/jenkins.png'), alt: 'Jenkins Logo' },
          { id: 3, image: require('@/assets/jira.png'), alt: 'Jira Logo' },
          { id: 4, image: require('@/assets/confluence.png'), alt: 'Confluence Logo' },
          { id: 5, image: require('@/assets/git.png'), alt: 'Git Logo' }
        ]
      };
    },
    mounted() {
      this.scrollHandler();
      this.sectionsWrapper.addEventListener('scroll', this.scrollHandler);
      createSquares(document.querySelector('.pixel-container'), ['#e0e0e0', '#e7b7b7', 'darkgrey'], 80, [7, 10, 13]);
    },
    beforeUnmount() {
      this.sectionsWrapper.removeEventListener('scroll', this.scrollHandler);
    },
    methods: {
      scrollHandler() {
        const sections = document.querySelectorAll('.full-screen');
        const links = document.querySelectorAll('.sidebar a');

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
          }
        });
      },
    },
    computed: {
      sectionsWrapper() {
        return document.querySelector('.sections-wrapper');
      }
    },
  };
</script>
