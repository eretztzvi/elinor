import "./TodoInput.css";

export default function TodoInput(props) {

  return (
    <div className="container">
      <input
        value={props.currentValue}
        onChange={(e) => props.setCurrentTodo(e.target.value)}
      />
      <button onClick={props.submitTodo}>ADD</button>
    </div>
  );
}
