<script setup lang="ts">
import TextArea from "@/components/atom/TextArea/index.vue";
import Select from "@/components/atom/Select/index.vue";
import Input from "@/components/atom/Input/index.vue";
import Field from "@/components/molecules/Field/index.vue";
import ActionSave from "@/components/molecules/ActionSave/index.vue";

import { reactive } from "vue";
import { categories } from "@/utils/constants";

const todo = reactive({
  id: 0,
  category: "",
  item: "",
  completed: false,
  date: "",
});
</script>

<template>
  <div class="org-form">
    <Field label="Todo Description">
      <TextArea v-model="todo.item" />
    </Field>
    <div class="org-categories">
      <Field label="Category">
        <Select :options="categories" v-model="todo.category" />
      </Field>
      <Field label="Date">
        <Input v-model="todo.date" />
      </Field>
    </div>
  </div>
  <div class="org-save">
    <ActionSave />
  </div>
</template>

<style src="./form.scss" scoped lang="scss"></style>
