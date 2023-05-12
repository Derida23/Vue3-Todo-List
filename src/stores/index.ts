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

  const deleteTodo = (id: number) => {
    const index = lists.value.findIndex((obj) => obj.id === id);

    lists.value.splice(index, 1);
  };

  const doneTodo = () => {
    return true;
  };

  return { lists, addTodo, deleteTodo, doneTodo };
});
