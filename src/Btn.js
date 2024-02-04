import React, { useState } from "react";

function Btn({ props }) {
  const [count, setCount] = useState(props);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div
      className="btn"
      style={{
        width: "200px",
        backgroundColor: "#c9c9c9",
        padding: "15px",
        textAlign: "center",
        margin: "auto",
        cursor: "pointer"
      }}
      onClick={handleClick}
    >
      {count}
    </div>
  );
}

export default Btn;
