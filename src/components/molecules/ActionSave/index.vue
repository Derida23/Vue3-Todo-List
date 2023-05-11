<script setup lang="ts">
import Button from "@/components/atom/Button/index.vue";
</script>

<template>
  <div class="molecules-action-save">
    <Button variant="success" class="mr-2">
      <template #content>
        <span class="mx-7 my-1.5 text-white">Save</span>
      </template>
    </Button>
    <Button variant="error">
      <template #content>
        <span class="mx-7 my-1.5 text-white">Reset</span>
      </template>
    </Button>
  </div>
</template>

<style src="./actionSave.scss" scoped lang="scss"></style>
