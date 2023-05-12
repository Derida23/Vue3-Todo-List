import { defineStore } from "pinia";
import { ref } from "vue";

import { schedules } from "@/utils/constants";
import { ISchedule } from "@/types";

export const useTodoStore = defineStore("todos", () => {
  const lists = ref<ISchedule[]>(schedules);

  const addTodo = (payload: ISchedule) => {
    payload.id = lists.value.length + 1;
    lists.value.push(payload);
  };

  const deleteTodo = () => {
    return true;
  };

  const doneTodo = () => {
    return true;
  };

  return { lists, addTodo, deleteTodo, doneTodo };
});
