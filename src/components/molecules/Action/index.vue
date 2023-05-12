<script setup lang="ts">
import Button from "@/components/atom/Button/index.vue";
import FluentCheckmark12Filled from "~icons/fluent/checkmark-12-filled";
import FluentDelete12Filled from "~icons/fluent/delete-12-filled";

const props = defineProps({
  completed: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["delete"]);
</script>

<template>
  <div class="molecules-action">
    <Button variant="success" :disabled="props.completed" class="mr-2">
      <template #content>
        <FluentCheckmark12Filled color="white " />
      </template>
    </Button>
    <Button variant="error" :disabled="completed" @click="() => emit('delete')">
      <template #content>
        <FluentDelete12Filled color="white " />
      </template>
    </Button>
  </div>
</template>

<style src="./action.scss" scoped lang="scss"></style>
