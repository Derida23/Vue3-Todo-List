<script setup lang="ts">
import Label from "@/components/atom/Label/index.vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <Label>{{ label }}</Label>
    <slot />
  </div>
</template>

<style src="./field.scss" scoped lang="scss"></style>
