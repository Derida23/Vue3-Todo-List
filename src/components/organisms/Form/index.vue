<script setup lang="ts">
import TextArea from "@/components/atom/TextArea/index.vue";
import Select from "@/components/atom/Select/index.vue";
import Input from "@/components/atom/Input/index.vue";
import Field from "@/components/molecules/Field/index.vue";
import ActionSave from "@/components/molecules/ActionSave/index.vue";
</script>

<template>
  <div class="org-form">
    <Field label="Todo Description">
      <TextArea />
    </Field>
    <div class="org-categories">
      <Field label="Category">
        <Select />
      </Field>
      <Field label="Date">
        <Input />
      </Field>
    </div>
  </div>
  <div class="org-save">
    <ActionSave />
  </div>
</template>

<style src="./form.scss" scoped lang="scss"></style>
