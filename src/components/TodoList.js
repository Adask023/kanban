import React from "react";
import Item from "./Item";

const TodoList = ({ todos, setTodos, setStatus }) => {
  const active = todos.filter((task) => task.status === "to-do");
  const inprogress = todos.filter((task) => task.status === "in-progress");
  const done = todos.filter((task) => task.status === "done");
  // console.log(todos);

  // todos filter
  const activeItems = active.map((task) => (
    <Item
      key={task.id}
      todos={todos}
      setTodos={setTodos}
      task={task}
      setStatus={setStatus}
    />
  ));
  const inprogressItems = inprogress.map((task) => (
    <Item
      key={task.id}
      todos={todos}
      setTodos={setTodos}
      task={task}
      setStatus={setStatus}
    />
  ));
  const doneItems = done.map((task) => (
    <Item
      key={task.id}
      todos={todos}
      setTodos={setTodos}
      task={task}
      setStatus={setStatus}
    />
  ));

  return (
    <div className="lists-container">
      <div className="list-item to-do-list">
        <p>To do tasks</p>
        <div>{activeItems}</div>
      </div>

      <div className="list-item in-progress-list">
        <p>In progress</p>
        <ul>{inprogressItems}</ul>
      </div>

      <div className="list-item done-list">
        <p>Done tasks</p>
        <ul>{doneItems}</ul>
      </div>
    </div>
  );
};
export default TodoList;
