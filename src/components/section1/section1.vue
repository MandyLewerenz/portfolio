<template>
  <div class="container-fluid g-0" id="section1">
    <div class="row justify-content-center g-0 section-height">
      <div class="col-12 g-0 colored-container"></div>
      <div
        class="col-md-8 col-10 g-0 image-container d-flex flex-column align-items-center justify-content-md-center justify-content-end text-center">

        <img :src="avatarImage" class="rounded-circle img-fluid rounded-circle-image" alt="Profilbild" />
        <div class="mt-50">
          <h1>{{ name }}</h1>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      name: 'Mandy Lewerenz',
      description: 'Hi! I am a passionate Frontend Developer focused on creating engaging and visually appealing interfaces. Utilizing my expertise in HTML, CSS, JavaScript, and modern frameworks like Vue.js, I strive for excellence in every project, big or small. My design philosophy blends creativity with functionality to deliver a seamless user experience. Feel free to explore my portfolio, and don\'t hesitate to get in touch!',
      avatarImage: require('@/assets/bewerbungsbild2.jpg'),
    }
  }
}
</script>