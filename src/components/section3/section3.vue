<template>
  <!-- PROJEKTE -->
  <div v-if="isMobile" class="container-fluid g-0" id="section3"  >
      <div class="row justify-content-center">
        <div class="col-12 d-flex align-items-center section-height">
          <div id="carouselExampleProjects" class="carousel carousel-dark slide" >
            <div class="carousel-inner d-flex align-items-center h-100">
              <project-component v-for="project in projects" :key="project.id" :project="project">
              </project-component>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleProjects" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleProjects" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container-fluid" id="section3">
      <div class="row justify-content-center">
        <div class="col-8 d-flex align-items-center section-height">
          <project-component 
            v-for="project in projects" 
            :key="project.id" 
            :project="project">
          </project-component>
        </div>
      </div>
    </div>
</template>


<script>
  import projectComponent from './projectComponent.vue'

  export default {
    props: {
      tool: Object
    },
    components: {
        projectComponent,
    },
    data() {
        return {
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
        }
    }
  }
</script>