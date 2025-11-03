import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(c => c + 1);
  const decrease = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div id="counter" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <div className="counter-container" style={{ display: "inline-flex", gap: "10px" }}>
        <button onClick={decrease}>-</button>
        <span style={{ fontSize: "24px", minWidth: "40px", textAlign: "center" }}>{count}</span>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Count;
