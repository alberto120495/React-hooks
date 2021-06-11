import React, { useRef } from "react";
import "../02-useEffect/effects.css";
function FocusScreen() {
  const inputRef = useRef();
  console.log(inputRef);
  const handleClick = () => {
    //document.querySelector("input").select();
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        palceholder="Su nombre"
        className="form-control"
      />
      <button onClick={handleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
}

export default FocusScreen;
