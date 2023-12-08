<template>
  <nav v-if="isMobile" class="navbar fixed-top navbar-expand-lg navbar-light">

    <a class="navbar-logo ps-1" href="#section1">
      <img src="../assets/logo.png" alt="avatar" class="mh-100" />
    </a>

    <div class="pe-1" id="toggleButton">
      <button ref="toggleButton" class="navbar-toggler ml-auto collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item text-center nav-border" v-for="navigation in navigation" :key="navigation.id">
          <a class="nav-link" :href="navigation.href" @click="closeNavbar">{{ navigation.page }}</a>
        </li>
      </ul>
    </div>

  </nav>

  <nav v-else class="navbar navbar-expand-lg navbar-light stroke">
    <div class="container-fluid h-100">

      <a class="navbar-logo h-100" href="#section1">
        <img src="../assets/logo.png" alt="avatar" class="mh-100" />
      </a>

      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item me-5" v-for="navigation in navigation" :key="navigation.id">
            <a class="nav-link" :href="navigation.href" :class="{ 'active': currentPage === navigation.page }">{{
              navigation.page }}
            </a>
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
      currentPage: '',
      navigation: [
        {
          id: 1,
          href: '#section1',
          page: 'Homepage'
        },
        {
          id: 2,
          href: '#section2',
          page: 'About me'
        },
        {
          id: 3,
          href: '#section3',
          page: 'Projects'
        },
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        // this.$refs.toggleButton.blur();
      }
    },
    closeNavbar() {
      this.isMenuOpen = false;
      this.$refs.toggleButton.click();

    }
  }

};
</script>
