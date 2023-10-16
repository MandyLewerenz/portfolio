<template>
    

    <div class="first-container"></div>
        <div class="coin-container" :class="{ flipped: isFlipped }">
            <div class="image-flipper">
                <img :src="frontImagePath" class="rounded-circle front" alt="Profile Front" />
                <img :src="backImagePath" class="rounded-circle back" alt="Profile Back" />
            </div>
          <div class="container text-center">
            <h1 class="mt-3">{{ name }}</h1>
            <p>{{ description }}</p>
          </div>
        </div>
  </template>
  
  <script>
  export default {
    props: ['frontImagePath', 'backImagePath'],
    data() {
      return {
        isFlipped: false
      };
    },
    mounted() {
      setTimeout(() => {
        this.isFlipped = true;
  
        setTimeout(() => {
          this.isFlipped = false;
        }, 2000); // Duration for which back image is visible
  
      }, 500); // Initial delay after which flip starts
    }
  };
  </script>
  
  <style scoped>
.image-container {
  perspective: 1000px;
}

.image-flipper {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.front, .back {
  border: 8px solid white;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* optional, for a subtle shadow */
}

.back {
  transform: rotateY(180deg);
}

.flipped .image-flipper {
  transform: rotateY(180deg);
}
  </style>
  