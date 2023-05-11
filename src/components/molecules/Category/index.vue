<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  category: {
    type: String,
    default: "general",
  },
  date: {
    type: String,
  },
});

const letterCategory = computed(() => {
  return props.category.charAt(0).toUpperCase() + props.category.slice(1);
});

const iconCategory = computed(() => {
  const icons: Record<string, string> = {
    general: "🧢",
    work: "🎒",
    personal: "🧑‍💻",
    sport: "⚽",
  };

  return icons[props.category];
});
</script>

<template>
  <div class="molecules-category">
    <div class="avatar">
      <span>{{ iconCategory }}</span>
    </div>
    <div class="text">
      <p class="text-category">{{ letterCategory }}</p>
      <p class="text-date">{{ date }}</p>
    </div>
  </div>
</template>

<style src="./category.scss" scoped lang="scss"></style>
