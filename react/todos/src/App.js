import { useState } from "react";
import "./App.css";
import Title from "./Components/Title/Title";
import TodoInput from "./Components/TodoInput.jsx/TodoInput";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./Components/TodoList/TodoList";
import Counter from "./Components/Counter/Counter";

function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentEditing, setCurrentEditing] = useState('') // tood id

  const submitTodo = () => {
    const temp = [...todos];

    const todo = {
      id: uuidv4(),
      title: currentTodo,
      time: new Date().toLocaleTimeString(),
    };

    temp.push(todo);

    setTodos(temp);
    setCurrentTodo("");
  };

  const handleDeleteTodo = (todoId) => {
    
    const temp = [...todos];

    const todoIndex = temp.findIndex((todo) => todo.id === todoId);

    temp.splice(todoIndex, 1);

    setTodos(temp);
  };

  return (
    <div className="App">
      <Title titleText="Todos app" />

      <Counter counter={todos.length}/>

      <TodoInput
        currentValue={currentTodo}
        setCurrentTodo={setCurrentTodo}
        submitTodo={submitTodo}
      />

      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} currentEditing={currentEditing} setCurrentEditing={setCurrentEditing}/>
    </div>
  );
}

export default App;
