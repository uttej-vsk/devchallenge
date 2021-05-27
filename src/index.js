import React, { useState } from "react";
import reactDom from "react-dom";
import "./style.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const handleButtonClick = () => {
    setNumbers([...numbers, Math.random() * 100]);
  };
  return (
    <div>
      {numbers.map((el) => {
        return <h1>{el}</h1>;
      })}
      <h1>test</h1>
      <button onClick={handleButtonClick}>generate new numbers</button>
    </div>
  );
};
reactDom.render(<App />, document.getElementById("root"));
