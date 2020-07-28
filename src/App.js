import React, { useState, useEffect } from "react";
import queryString from "query-string";

import "./app.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    async function fetchPostList() {
      const { _page, _limit } = pagination;
      //_limit=10&_page=1
      const queryParam = queryString.stringify(filter);
      try {
        const apiUrl = `http://js-post-api.herokuapp.com/api/posts?${queryParam}`;
        const response = await fetch(apiUrl);
        const responeJSON = await response.json();
        
        const { data, pagination } = responeJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("failed to fetch data : " + error.message);
      }
    }
    fetchPostList();
  }, [filter]);

  function handleOnPageChange(newPage) {
    console.log("new page :" +newPage);
    setFilter({
      ...filter,
      _page : newPage,
    })
  }


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
      <Pagination onPageChange={handleOnPageChange} pagination={pagination}/>
    </div>
  );
}

export default App;
