<template>
  <div v-if="isMobile" class="container-fluid" id="section3">
    <div class="row justify-content-center align-items-center section-height">
      <div class="col-12">
        <div id="carouselExampleProjects" class="carousel carousel-dark slide">
          <div class="carousel-inner align-items-center">
            <project-component />
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleProjects"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleProjects"
            data-bs-slide="next">
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
        <project-component />
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
    }
  }
}
</script>