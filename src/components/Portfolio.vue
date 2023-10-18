<template>
  <navbarComponent />
  <sidebarComponent />

  <div class="sections-wrapper">

    <!-- <div class="full-screen" id="section1">
      <section class="section-profile">
        <div class="first-container"></div>
        <div class="image-container">
          <div class="col-sm-12">          
            <img :src="avatarImage" class="rounded-circle" alt="Profilbild" /> 
          </div>
          <div class="container text-center">
            <h1 class="mt-3">{{ name }}</h1>
            <p>{{ description }}</p>
          </div>
        </div>
      </section>
    </div> -->

    <div class="container-fluid g-0" id="section1">
      <div class="row justify-content-center g-0" style="height: calc(100vh - 60px);">
        <div class="col-12 g-0 first-container"></div>
        <!-- <div class="col-10 g-0 image-container d-flex flex-column justify-content-center align-items-end"> -->
        <div class="col-md-8 col-10 g-0 image-container d-flex flex-column align-items-center justify-content-md-center justify-content-end text-center">

          <img :src="avatarImage" class="rounded-circle img-fluid rounded-circle-image" alt="Profilbild" />
          <div class="mt-50">
            <h1>{{ name }}</h1>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
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
                  <skill-component v-for="skill in skills" :key="skill.id" :skill="skill">
                  </skill-component>
                </div>
              </div>
            </div>

            <div class="avatar">
              <img :src="avatarImage" alt="avatar" class="avatar-img" />
              <h2 class="heading">Mandy Lewerenz</h2>
            </div>

            <!-- TOOLS -->
            <div class="tools">
              <div class="nested-row">
                <h2 class="heading-tools">Tools</h2>
              </div>
              <div class="nested-row-img">
                <tool-component v-for="tool in tools" :key="tool.id" :tool="tool">
                </tool-component>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>

    <!-- PROJEKTE -->
    <div v-if="isMobile" class="container-fluid g-0" id="section3"  >
      <div class="row justify-content-center">
        <div class="col-12 d-flex align-items-center" style="height: calc(100vh - 60px);">
          <div id="carouselExample" class="carousel carousel-dark slide" >
            <div class="carousel-inner d-flex align-items-center h-100">
              <project-component v-for="project in projects" :key="project.id" :project="project">
              </project-component>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container-fluid" id="section3">
      <div class="row justify-content-center">
        <div class="col-8 d-flex align-items-center" style="height: calc(100vh - 60px);">
          <project-component 
            v-for="project in projects" 
            :key="project.id" 
            :project="project">
          </project-component>
        </div>
      </div>
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
        isMobile: window.innerWidth <= 768,
        projects: [
          {
            id: 1,
            image: require('@/assets/appLogoCloud.png'),
            class: 'carousel-item active',
            altText: 'Wetter Logo',
            name: 'Wetter App',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
          },
          {
            id: 2,
            image: require('@/assets/docker.png'),
            class: 'carousel-item',
            altText: 'Docker Logo',
            name: 'Memorie',
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
  };
</script>
