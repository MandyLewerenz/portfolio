<template>
  <div v-if="isMobile">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container flex-row">
        <!-- Logo auf der linken Seite -->
        
        <a class="navbar-logo" href="#">
          <img src="../assets/logo.png" alt="avatar" class="" style="width: auto; height: 40px;"/>
        </a>

        <!-- Burger-Icon auf der rechten Seite -->
        <button
          class="navbar-toggler ml-auto justify-content-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
          style="z-index:100; "
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        
      </div>
    </nav>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav" :class="{ show: isMenuOpen }" style="box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1); width:100%; background-color: #f2f2f2; z-index:1;position: absolute;" >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item text-center" style="border-bottom: 1px solid lightgrey;">
          <a class="nav-link" href="#">Startseite</a>
        </li>
        <li class="nav-item text-center" style="border-bottom: 1px solid lightgrey;">
          <a class="nav-link" href="#">Über mich</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link" href="#">Projekte</a>
        </li>
      </ul>
    </div>
  </div>

  <nav v-else class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid h-100">
      <a class="navbar-logo" href="#">
        <img src="../assets/logo.png" alt="avatar" class=""/>
      </a>

      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Startseite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Über mich</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projekte</a>
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
