import "./TodoItem.css";

export default function TodoItem(props) {
  return (
    <div className="container-todo-item">
      {props.currentEditing === props.todo.id ? (
        <input value={props.todo.title} />
      ) : (
        <p>{props.todo.title}</p>
      )}
      <p>{props.todo.time}</p>

      {props.currentEditing !== props.todo.id && (
        <button onClick={() => props.handleDeleteTodo(props.todo.id)}>
          DELETE
        </button>
      )}

      {props.currentEditing !== props.todo.id && (
        <button onClick={() => props.setCurrentEditing(props.todo.id)}>
          EDIT
        </button>
      )}

      {props.currentEditing === props.todo.id && <button>SAVE</button>}

      {props.currentEditing === props.todo.id && (
        <button onClick={() => props.setCurrentEditing("")}>CANCEL</button>
      )}
    </div>
  );
}
