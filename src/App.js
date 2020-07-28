import React, { useState } from "react";
import "./app.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  function onTodoClick(item) {
    const NewTodoList = [...todoList];
    const index = NewTodoList.indexOf(item);
    console.log(index);
    NewTodoList.splice(index, 1)
    setTodoList(NewTodoList);
  };

  function onTodoFormSubmit(formValues) {
    const NewTodoList = [...todoList];
    const newTodo = {
      id: NewTodoList.length+1,
      ...formValues
    }
    NewTodoList.push(newTodo);
    console.log(newTodo);
    setTodoList(NewTodoList);
  }

  return (
    <div className="app">
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={onTodoClick} />
      <TodoForm onSubmit={onTodoFormSubmit}/>
    </div>
  );
}

export default App;
