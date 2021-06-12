import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
const init = () => {
  /* return [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ]; */

  return JSON.parse(localStorage.getItem("todos")) || [];
};

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //Grabar en local store
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos?.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
