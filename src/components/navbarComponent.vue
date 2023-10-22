<template>
  <div v-if="isMobile">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container flex-row">
        
        <a class="navbar-logo" href="#">
          <img src="../assets/logo.png" alt="avatar" class="mh-100" />
        </a>

        <button class="navbar-toggler ml-auto justify-content-end"
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item text-center nav-border">
          <a class="nav-link" href="#section1">Startseite</a>
        </li>
        <li class="nav-item text-center nav-border">
          <a class="nav-link" href="#section2">Über mich</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link" href="#section3">Projekte</a>
        </li>
      </ul>
    </div>
  </div>

  <nav v-else class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid h-100">
      <a class="navbar-logo h-100" href="#">
        <img src="../assets/logo.png" alt="avatar" class="mh-100"/>
      </a>

      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#section1">Startseite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section2">Über mich</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section3">Projekte</a>
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
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>
