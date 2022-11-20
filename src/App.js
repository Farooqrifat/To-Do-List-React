import React, { useState, useEffect } from 'react';
import './App.css';

//importing Components 
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterdTodos, setFilterdTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]
  );

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterdTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterdTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterdTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus} />

      <ToDoList filterdTodos={filterdTodos} setTodos={setTodos} todos={todos} />

    </div>
  );
};

export default App;
