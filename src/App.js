import React, { useState } from "react";
import "./app.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

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

  return (
    <div className="app">
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={onTodoClick} />
    </div>
  );
}

export default App;
