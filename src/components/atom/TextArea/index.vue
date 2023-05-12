<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const vModel = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="atom-text-area">
    <div class="text-area">
      <textarea
        placeholder="insert your daily task, and have fun :)"
        class="w-full"
        rows="3"
        v-model="vModel"
      />
    </div>
  </div>
</template>

<style src="./textArea.scss" scoped lang="scss"></style>
