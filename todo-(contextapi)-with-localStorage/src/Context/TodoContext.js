import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Todo msg",
      isComplete: false,
    },
  ],
  addTodo: (todo)=> {},
  updateTodo: (id, todo)=> {},
  deleteTodo: (id)=> {},
  toggleCompTodo: (id)=> {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
