<template>
  <navbarComponent />

  <div ref="content" class="sections-wrapper" data-bs-spy="scroll" data-bs-target=".navbar-light">

    <section1 />
    <section2 />
    <section3 />

  </div>
</template>

<script>
import '@/css/styles.scss';
import '@/css/navbar.scss';
import '@/css/character.scss';
import '@/css/profile.scss';
import '@/css/projects.scss';

import navbarComponent from './navbarComponent.vue';
import section1 from './section1/section1.vue';
import section2 from './section2/section2.vue';
import section3 from './section3/section3.vue';

export default {
  components: {
    navbarComponent,
    section1,
    section2,
    section3
  },
};
</script>