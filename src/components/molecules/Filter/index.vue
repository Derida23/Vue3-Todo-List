<script setup lang="ts">
import PrivyIcon from "@/assets/icon/privy-icon.vue";
import Tab from "@/components/atom/Tab/index.vue";
import { ITab } from "@/types";
import { computed, markRaw } from "vue";

const props = defineProps({
  active: {
    type: String,
    required: true,
  },
});

const tabOptions: Array<ITab> = markRaw([
  {
    key: "all",
    label: "All",
  },
  {
    key: "done",
    label: "Done",
  },
  {
    key: "todo",
    label: "Todo",
  },
]);

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const isActive = computed({
  get() {
    return props.active;
  },
  set(value: string) {
    emit("change", value);
  },
});
</script>

<template>
  <div class="molecules-filter">
    <PrivyIcon height="30" class="logo-privy" />
    <Tab :options="tabOptions" v-model="isActive" />
  </div>
</template>

<style src="./filter.scss" scoped lang="scss"></style>
