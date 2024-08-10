import { useState } from 'react'  /// useState se 2 values mmilti array k format me

import './App.css'

function App() {

  let [counter, setCounter] = useState(50);
  // let counter = 0;

  const addValue = () => {
    setCounter(counter + 1)
    console.log("clicked")
  }

  const removeVal = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>
        Counter
      </h1>
      <h5>Counter value : {counter}</h5>
      <br />
      <button onClick={addValue}
      >Add value</button>
      <button onClick={removeVal}>remove value</button>
    </>
  )
}

export default App
