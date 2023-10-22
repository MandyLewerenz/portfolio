<template>
  <div v-if="isMobile" class="container-fluid" id="section2">
    <div class="row">
      <div class="d-flex flex-row justify-content-center section-height">

        <div class="carousel carousel-dark slide character-div custom-border align-self-center" ref="pixelatedBg" id="carouselExample">
          <div class="carousel-inner">

            <!-- SKILLS -->
            <div class="skills align-self-center carousel-item active">
              <h2 class="heading my-4 text-center">Skills</h2>
              <div class="tools-progres nested-row">
                <skill-component v-for="skill in skills" :key="skill.id" :skill="skill">
                </skill-component>
              </div>
            </div>

            <!-- TOOLS -->
            <div class="tools carousel-item">
              <h2 class="heading my-4 text-center">Tools</h2>
              <div class="nested-row-img">
                <tool-component v-for="tool in tools" :key="tool.id" :tool="tool">
                </tool-component>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
  </div>

  <div v-else class="container-fluid" id="section2">
    <div class="row justify-content-center">
      <div class="col-12 d-flex flex-row align-items-center justify-content-center section-height">

        <div class="d-flex flex-row character-div custom-border align-self-center" ref="pixelatedBg">

          <!-- SKILLS -->
          <div class="d-flex flex-column skills col-4 mt-5">
            <h2 class="heading mb-5 align-self-center">Skills</h2>
            <div class="tools-progres nested-row ps-5">
              <skill-component v-for="skill in skills" :key="skill.id" :skill="skill">
              </skill-component>
            </div>
          </div>

          <div class="d-flex flex-column avatar col-4 align-self-center">
            <img :src="avatarImage" alt="avatar" class="avatar-img" />
            <h2 class="heading align-self-center">Mandy Lewerenz</h2>
          </div>

          <!-- TOOLS -->
          <div class="d-flex flex-column tools col-4 mt-5">
            <h2 class="heading mb-5 align-self-center">Tools</h2>
            <div class="nested-row-img">
              <tool-component v-for="tool in tools" :key="tool.id" :tool="tool">
              </tool-component>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import skillComponent from './skillComponent.vue';
  import toolComponent from './toolComponent.vue';

  export default {
    props: {
      tool: Object
    },
    components: {
      skillComponent,
      toolComponent
    },
    data() {
        return {
          isMobile: window.innerWidth <= 768,
          pixelImage: require('@/assets/pixelBg.jpg'),
          avatarImage: require('@/assets/avatar.png'),
          skills: [
            { id: 1, name: 'HTML', class: 'bg-lnir html', width: '95%' },
            { id: 2, name: 'CSS/SASS', class: 'bg-lnir css', width: '95%' },
            { id: 3, name: 'JavaScript', class: 'bg-lnir js', width: '70%' },
            { id: 4, name: 'JSF', class: 'bg-lnir jsf', width: '70%' },
            { id: 5, name: 'Vue.js', class: 'bg-lnir vue', width: '30%' },
            { id: 6, name: 'Node', class: 'bg-lnir node', width: '30%' }
          ],
          tools: [
            { id: 1, image: require('@/assets/docker.png'), alt: 'Docker Logo' },
            { id: 2, image: require('@/assets/jenkins.png'), alt: 'Jenkins Logo' },
            { id: 3, image: require('@/assets/jira.png'), alt: 'Jira Logo' },
            { id: 4, image: require('@/assets/confluence.png'), alt: 'Confluence Logo' },
            { id: 5, image: require('@/assets/git.png'), alt: 'Git Logo' }
          ]
        }
    }
  }
</script>