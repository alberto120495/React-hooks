import React from "react";

function TodoListItem({ todo, index, handleDelete, handleToggle }) {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "completed"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default TodoListItem;
