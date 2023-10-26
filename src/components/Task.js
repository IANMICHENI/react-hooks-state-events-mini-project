import React from "react";

function Task({ task, onDeleteTask }) {
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDeleteTask(task)}>
        X
      </button>
    </div>
  );
}

export default Task;
