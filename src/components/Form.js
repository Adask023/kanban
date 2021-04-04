import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  important,
  setImportant,
}) => {
  const addTask = (e) => {
    e.preventDefault();
    if (inputText.length > 2) {
      setTodos([
        ...todos,
        {
          text: inputText,
          status: "to-do",
          id: Math.random() * 1000,
          important: important,
        },
      ]);
      setInputText("");
      setImportant(false);
      console.log(todos);
    } else {
      alert("text is to short");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setImportant(e.target.checked);
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="logo-wrapper">
          <p>Add task</p>
        </div>

        <div className="input-wrapper">
          <input
            className="text-input"
            type="text"
            onChange={handleInputChange}
            value={inputText}
            placeholder="Task title..."
          />
          <button className="add-task-btn" onClick={addTask}>
            +
          </button>
        </div>

        <div className="checkbox-wrapper">
          <input
            className="form-checkbox"
            type="checkbox"
            checked={important}
            onChange={handleCheckboxChange}
            name="important"
          />
          <label htmlFor="important">important</label>
        </div>
      </form>
    </div>
  );
};
export default Form;