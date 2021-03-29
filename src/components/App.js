import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "../styles/App.css";

function App() {
  // hooks declarations:
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [important, setImportant] = useState(false);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

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
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        important={important}
        setImportant={setImportant}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <footer></footer>
    </div>
  );
}

export default App;
