<script setup lang="ts">
const props = defineProps({
  list: {
    type: String,
    default: "waiting",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="['molecules-list', { completed: completed }]">
    <p>{{ list }}.</p>
  </div>
</template>

<style src="./list.scss" scoped lang="scss"></style>
