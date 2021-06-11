import React, { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";
import "../02-useEffect/effects.css";

function CallbackHook() {
  const [counter, setCounter] = useState(10);

  /* const incrementar = () => {
    setCounter(counter + 1);
  };
 */
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    //???
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook : {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
}

export default CallbackHook;
