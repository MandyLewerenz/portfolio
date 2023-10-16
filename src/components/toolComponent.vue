<template>
  <div class="squares img-square">
    <img :src="tool.image" :alt="tool.alt">
  </div>
</template>

<script>
export default {
  props: {
    tool: Object
  }
}
</script>