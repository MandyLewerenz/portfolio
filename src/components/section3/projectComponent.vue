<template>
  <div v-for="project in projects" :key="project.id" class="col-12 col-md-6">

    <div v-if="isMobile" :class="project.class">
      <div class="col-9 text-center mx-auto" style="overflow: hidden;">
        <img :src="project.image" :alt="project.altText" class="project-img d-block mx-auto">
        <h1 class="heading mt-3">{{ project.name }}</h1>
        <a class="git-link" v-bind:href="project.git">{{ project.git }}</a><br />
        <span class="project-text">{{ project.description }}</span>
      </div>
    </div>

    <div v-else class="col d-flex flex-column align-items-center text-center mx-5">
      <img :src="project.image" :alt="project.altText" class="project-img">
      <h2 class="heading mt-4">{{ project.name }}</h2>
      <a class="git-link" v-bind:href="project.git">{{ project.git }}</a>
      <span class="description">{{ project.description }}</span>
    </div>

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
      projects: [
        {
          id: 1,
          image: require('@/assets/appLogoCloud.png'),
          class: 'carousel-item active',
          altText: 'Wetter Logo',
          name: 'Wetter App',
          git: 'https://github.com/MandyLewerenz/weatherly.git',
          description: 'Singe-Page-Application with API integration to retrieve weather data based on city input'
        },
        {
          id: 2,
          image: require('@/assets/memoryLogo1.png'),
          class: 'carousel-item',
          altText: 'Memory',
          name: 'Memory',
          git: 'https://github.com/MandyLewerenz/memory.git',
          description: 'Single-Page-Application for playing the game Memory.'
        },
      ],
    }
  }
}
</script>
  