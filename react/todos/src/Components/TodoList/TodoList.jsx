import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

export default function TodoList(props) {
  return (
    <div className="container-todo-list">
      {props.todos.length === 0 && <p>No todos, you can add a Todo </p>}

      {props.todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={index}
          handleDeleteTodo={props.handleDeleteTodo}
          setCurrentEditing={props.setCurrentEditing}
          currentEditing={props.currentEditing}
        />
      ))}
    </div>
  );
}
