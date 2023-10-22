<template>
  <div class="grid-item">
    <div class="progres grid-progress">
      <p>{{ skill.name }}</p>
      <div class="prog">
        <span :class="skill.class" :style="{width: skill.width}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object
  }
}
</script>

