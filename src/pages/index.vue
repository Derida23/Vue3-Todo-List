<script setup lang="ts">
import Filter from "@/components/molecules/Filter/index.vue";
import Card from "@/components/organisms/Card/index.vue";
import Form from "@/components/organisms/Form/index.vue";

import { ref } from "vue";

import { useTodoStore } from "@/stores";
import { storeToRefs } from "pinia";

const { list } = storeToRefs(useTodoStore());

const category = ref("all");

const onCategory = (value: string) => {
  category.value = value;
};
</script>

<template>
  <div class="todo">
    <div class="todo-wrapper todo-list">
      <div><Filter :active="category" @change="onCategory" /></div>
      <div class="todo-list-card">
        <Card v-for="(item, i) in list" :key="`schedule + ${i}`" :data="item" />
      </div>
    </div>
    <div class="todo-input">
      <div class="todo-wrapper">
        <Form />
      </div>
    </div>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
