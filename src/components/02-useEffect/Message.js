import React, { useEffect, useState } from "react";

function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    console.log("Componente montado");
    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y };
      console.log(coors);
      setCoords(coors);
      //console.log(" :D ");
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <>
      <h3>Eres Genial</h3>
      <p>
        x:{x} y:{y}
      </p>
    </>
  );
}

export default Message;
