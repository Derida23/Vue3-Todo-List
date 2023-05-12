<script setup lang="ts">
import { PropType, computed } from "vue";
import { ISelect } from "@/types";

const props = defineProps({
  options: {
    type: Array as PropType<ISelect[]>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
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
  <div class="atom-select">
    <div class="select">
      <select v-model="vModel">
        <option value="" data-default hidden>Choose category</option>

        <option
          v-for="(option, i) in options"
          :key="`option ${i}`"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style src="./select.scss" scoped lang="scss"></style>
