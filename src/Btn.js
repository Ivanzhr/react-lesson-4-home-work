import React, { useState } from "react";
import style from './app.css'
import Counter from './Counter'

function Btn({ props }) {
  const [count, setCount] = useState(props);

  function handleClick(event) {
    const value = parseInt(event.target.innerText);
    setCount(count + value);
  }

  return (
    <>
    <div
    className="btn"
    onClick={handleClick}
    >
      +1
    </div>
    <div
    className="btn"
    onClick={handleClick}
    >
      +10
    </div>
    <div
    className="btn"
    onClick={handleClick}
    >
      -100
    </div>
    <div
    className="btn"
    onClick={handleClick}
    >
      +25
    </div>
    <Counter props = {count}/>
    </>
  );
}

export default Btn;
