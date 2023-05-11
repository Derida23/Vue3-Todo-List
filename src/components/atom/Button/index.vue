<script setup lang="ts">
import { PropType, computed } from "vue";

const props = defineProps({
  variant: {
    type: String as PropType<"primary" | "success" | "warning" | "error">,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => {
  let className = `${props.variant} ${props.rounded} ${props.height}`;

  return className;
});
</script>

<template>
  <div class="atom-button">
    <button :class="buttonClass" :disabled="disabled">
      <div class="content">
        <slot name="content" />
      </div>
    </button>
  </div>
</template>

<style src="./button.scss" scoped lang="scss"></style>
