import React, { useState } from "react";

const AddToDo = ({ setTodos }) => {
  // value from the input is managed by the component state
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return alert("Please enter a todo item");
    }

    setTodos(prevTodos => [
      { id: Date.now(), text: newTodo, completed: false },
      ...prevTodos
    ]);

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    // add the new todo to the local storage
    let updatedTodos = [
      { id: Date.now(), text: newTodo, completed: false },
      ...todos
    ];

    // update(overwrite) the local storage with the updated todos array
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // reset the form input
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
