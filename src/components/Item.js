import React from "react";

const Item = ({ todos, setTodos, task }) => {
  const deleteItem = () => {
    const newTodos = todos.filter((item) => item.id !== task.id);
    setTodos(newTodos);
  };

  const changeStatus = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === task.id && item.status === "to-do") {
          return {
            ...item,
            status: "in-progress",
          };
        } else if (item.id === task.id && item.status === "in-progress") {
          return {
            ...item,
            status: "done",
          };
        }
        return item;
      })
    );
  };

  return (
    <li className="todo-item">
      <div
        className={task.important ? "task-text important-item" : "task-text"}
        style={
          task.status === "done"
            ? { textDecoration: "line-through", color: "gray" }
            : null
        }
      >
        {task.text}
      </div>
      {task.status !== "done" ? (
        <button onClick={changeStatus} className="next-button">
          <i className="fas fa-arrow-right"></i>
        </button>
      ) : null}
      <button onClick={deleteItem} className="delete-button">
      <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default Item;
