import React from "react";
import useForm from "../../hooks/useForm";

function TodoAdd({ handleAddTodo }) {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender ..."
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-outline-success mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
}

export default TodoAdd;
