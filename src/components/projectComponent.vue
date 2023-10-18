<template>
  <div v-if="isMobile" :class="project.class">
    <div class="d-flex justify-content-center">
      <img :src="project.image" :alt="project.altText" class="project-img d-block w-50" >
    </div>
    <div class="col-10 text-center mx-auto">
      <h1 class="heading mt-3">{{ project.name }}</h1>
      <span class="">{{ project.description }}</span>
    </div>
  </div>

  <div v-else class="col d-flex flex-column align-items-center text-center mx-5">
    <img :src="project.image" :alt="project.altText" class="project-img">
    <h2 class="heading mt-4">{{ project.name }}</h2>
    <span>{{ project.description }}</span>
  </div>
</template>
  
<script> 
export default {
  props: {
    project: Object
  },
  data() {
      return {
        isMobile: window.innerWidth <= 768,
      }
  }
}
</script>
  