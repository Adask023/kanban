import React from "react";
import Item from "./Item";

const TodoList = ({ todos, setTodos, setStatus }) => {
  let active = todos.filter((task) => task.status === "to-do");
  let inprogress = todos.filter((task) => task.status === "in-progress");
  let done = todos.filter((task) => task.status === "done");

  // todos sorting
  active.sort((a, b) => b.important - a.important);
  inprogress.sort((a, b) => b.important - a.important);
  done.sort((a, b)=> b.important - a.important)

  // todos filter
  let activeItems = active.map((task) => (
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
        <div className="list-name">
          <p>To do</p>
        </div>

        <div className="task-area">
          <div>{activeItems}</div>
        </div>
      </div>

      <div className="list-item in-progress-list">
        <div className="list-name">
          <p>In progress</p>
        </div>
        <div className="task-area">
          <ul>{inprogressItems}</ul>
        </div>
      </div>

      <div className="list-item done-list">
        <div className="list-name">
          <p>Done</p>
        </div>
        <div className="task-area">
          <ul>{doneItems}</ul>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
