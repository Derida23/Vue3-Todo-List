<script setup lang="ts">
import { PropType } from "vue";
import Action from "@/components/molecules/Action/index.vue";
import Category from "@/components/molecules/Category/index.vue";
import List from "@/components/molecules/List/index.vue";

import { ISchedule } from "@/types";

const props = defineProps({
  data: {
    type: Object as PropType<ISchedule>,
    default: {},
  },
});

// const onDelete = () => {};

// const onCompleted = () => {};
</script>

<template>
  <div class="org-card">
    <Category :category="props.data.category" :date="data.date" />
    <List :list="data.item" :completed="data.completed" />
    <Action :completed="data.completed" />
  </div>
</template>

<style src="./card.scss" scoped lang="scss"></style>
