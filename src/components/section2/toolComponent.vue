<template>
  <div class="squares img-square d-flex justify-content-center align-items-center text-center p-1">
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