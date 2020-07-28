import React, { useState, useEffect } from "react";
import "./app.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const apiUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(apiUrl);
        const responeJSON = await response.json();
        
        const { data } = responeJSON;
        setPostList(data);
      } catch (error) {
        console.log("failed to fetch data : " + error.message);
      }
    }
    fetchPostList();
  },[])


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
      <PostList posts={postList} />
    </div>
  );
}

export default App;
