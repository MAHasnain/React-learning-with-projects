import React, { useState } from "react";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos(todoInput);
    setTodoInput("");
    console.log(todos);
  };

  return (
    <>
      <div className="w-full items-center">
        <div className="bg-gray-400 pt-4 ">
          <form className="flex justify-center items-center p-5 ">
            <label htmlFor="todoInput" className="m-5 selection:bg-none">
              Tasks List
            </label>
            <input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              id="todoInput"
              className="p-1 m-2 bg-gray-500 rounded-lg text-white hover:text-black hover:bg-gray-200"
            />
            <button
              type="submit"
              className="p-1 m-2 bg-gray-500 rounded-lg text-white hover:text-black hover:bg-gray-200"
              onClick={addTodo}
            >
              Add
            </button>
          </form>
        </div>
        <div className="p-10 bg-slate-200">
          {/* <h2>Tasks</h2> */}
          <div className="grid-flow-col">{todos}</div>
        </div>
      </div>
    </>
  );
};

export default App;
