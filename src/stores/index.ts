import { defineStore } from "pinia";
import { ref } from "vue";

import { ISchedule } from "@/types";

export const useTodoStore = defineStore("todos", () => {
  const lists = ref<ISchedule[]>([]);

  const addTodo = (payload: ISchedule) => {
    payload.id = lists.value.length + 1;
    lists.value.push(payload);
  };

  const deleteTodo = (id: number) => {
    const index = lists.value.findIndex((obj) => obj.id === id);

    lists.value.splice(index, 1);
  };

  const doneTodo = (id: number) => {
    const index = lists.value.findIndex((obj) => obj.id === id);

    lists.value[index].completed = true
  };

  return { lists, addTodo, deleteTodo, doneTodo };
});
