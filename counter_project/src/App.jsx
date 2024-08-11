import { useState } from 'react'  /// useState se 2 values milti array k format me

import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // let counter = 0;

  const addValue = () => {
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
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
