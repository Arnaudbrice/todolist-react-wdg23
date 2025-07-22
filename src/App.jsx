import React, { useState } from "react";

import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";

const App = () => {
  // useState hook to manage the local storage todos array(use an arrow function with return statement to initialize the state with the todos array from the local storage)
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [filter, setFilter] = useState("all");

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );

    // toggle complete property of the todo item  to true or false in the local storage array based on the input checkbox checked status of this todo item

    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    // update(overwrite) the local storage with the updated todos array
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });
  return (
    <div className="max-w-3xl mx-auto p-4">
      <AddToDo setTodos={setTodos} />
      <FilterComponent setFilter={setFilter} />
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
