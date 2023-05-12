import { defineStore } from "pinia";
import { ref } from "vue";

import { schedules } from "@/utils/constants";
import { ISchedule } from "@/types";

export const useTodoStore = defineStore("todos", () => {
  const list = ref<ISchedule[]>(schedules);

  const addTodo = (payload: ISchedule) => {
    payload.id = list.value.length + 1;
    list.value.push(payload);
  };

  const deleteTodo = () => {
    return true;
  };

  const doneTodo = () => {
    return true;
  };

  return { list, addTodo, deleteTodo, doneTodo };
});
