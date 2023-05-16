<script setup lang="ts">
import Button from "@/components/atom/Button/index.vue";
import { ISchedule } from "@/types";
import { PropType, computed } from "vue";

const emit = defineEmits(["save", "reset"]);

const props = defineProps({
  data: {
    type: Object as PropType<ISchedule>,
    required: true,
  },
});

const isEmpty = computed(() => {
  const todo = props.data;
  if (todo.item && todo.date && todo.category) {
    return false;
  }
  return true;
});

const isReset = computed(() => {
  const todo = props.data;
  if (todo.item || todo.date || todo.category) {
    return false;
  }
  return true;
});

const onSave = () => {
  emit("save");
};
</script>

<template>
  <div class="molecules-action-save">
    <Button variant="success" class="mr-2" :disabled="isEmpty" @click="onSave">
      <template #content>
        <span class="mx-7 my-1.5 text-white">Save</span>
      </template>
    </Button>
    <Button variant="error" :disabled="isReset" @click="() => emit('reset')">
      <template #content>
        <span class="mx-7 my-1.5 text-white">Reset</span>
      </template>
    </Button>
  </div>
</template>

<style src="./actionSave.scss" scoped lang="scss"></style>
