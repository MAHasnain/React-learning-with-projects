import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
