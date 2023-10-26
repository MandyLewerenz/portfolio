<template>
  <div v-if="isMobile">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container flex-row">
        
        <a class="navbar-logo" href="#">
          <img src="../assets/logo.png" alt="avatar" class="mh-100" />
        </a>

        <button ref="toggleButton" 
                class="navbar-toggler ml-auto justify-content-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggleMenu"
                style="z-index:100;">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav" :class="{ show: isMenuOpen }">
      <ul class="navbar-nav ml-auto" v-for="navigation in navigation" 
            :key="navigation.id" :navigation="navigation">
        <li class="nav-item text-center nav-border">
          <a class="nav-link" :href="navigation.href">{{ navigation.page }}</a>
        </li>
      </ul>
    </div>
  </div>

  <nav v-else class="navbar navbar-expand-lg navbar-light stroke">
    <div class="container-fluid h-100">

      <a class="navbar-logo h-100" href="#">
        <img src="../assets/logo.png" alt="avatar" class="mh-100"/>
      </a>

      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav" v-for="navigation in navigation" 
            :key="navigation.id" :navigation="navigation">
          <li class="nav-item me-5">
            <a class="nav-link" :href="navigation.href">{{ navigation.page }}</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>

</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isMobile: window.innerWidth <= 768,
        navigation: [
          {
            id: 1,
            href: '#section1',
            page: 'Über mich'
          },
          {
            id: 2,
            href: '#section2',
            page: 'Startseite'
          },
          {
            id: 3,
            href: '#section3',
            page: 'Projekte'
          },
        ]
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        if(!this.isMenuOpen){
          this.$refs.toggleButton.blur();
        }
      },
    },
  };
</script>
