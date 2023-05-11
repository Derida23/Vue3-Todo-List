<script setup lang="ts">
import { ITab } from "@/types";
import { PropType } from "vue";

const props = defineProps({
  options: {
    type: Array as PropType<ITab[]>,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const onTabChange = (value: string | number) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="atom-tab">
    <div
      v-for="(item, i) in options"
      :key="`option ${i}`"
      :class="['tab', { active: modelValue === item.key }]"
      @click="onTabChange(item.key)"
    >
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style src="./tab.scss" scoped lang="scss"></style>
