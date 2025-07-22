import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleTodo }) => {
  console.log("todos", todos);

  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
