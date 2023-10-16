<template>
    <div class="projects-container">
      <img :src="project.image" :alt="project.altText" class="project-img">
      <h2 class="heading">{{ project.name }}</h2>
      <span>{{ project.description }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: Object
    }
  }
  </script>
  