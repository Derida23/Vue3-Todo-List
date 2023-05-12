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
  <div class="atom-input">
    <div class="input">
      <input type="date" placeholder="select date" v-model="vModel" />
    </div>
  </div>
</template>

<style src="./input.scss" scoped lang="scss"></style>
