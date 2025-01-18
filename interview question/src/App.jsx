import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  // const [multiplied, setMultiplied] = useState(5);

  const multiplied = value * 5;
  let multiplyByFive = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <div>
        <h3>Multiply : {value}</h3>
      </div>
      <button onClick={multiplyByFive}>Multiply By Five</button>
      <p>result: {multiplied}</p>
    </div>
  );
};

export default App;
