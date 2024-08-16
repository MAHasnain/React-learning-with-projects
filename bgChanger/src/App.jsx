import { useState } from 'react'

function App() {

  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-200 flex flex-wrap justify-center p-8'
        style={{ backgroundColor: color }}
      >
        <div className='bg-white fixed flex px-10 text-white flex-wrap justify-center p-2 rounded-xl shadow-lg'>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-800 transition duration-200'
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >Yellow</button>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >Lavender</button>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >Pink</button>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >Brown</button>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >Purple</button>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "crimson" }}
            onClick={() => setColor("crimson")}
          >Crimson</button>
          <button className='text-white p-3 rounded-2xl mr-4 shadow-md
          hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >Green</button>
          <button className='text-white p-3 rounded-2xl shadow-md
            hover:bg-gray-200 hover:text-gray-600 transition duration-200'
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >Orange</button>
        </div>
      </div>
    </>
  )
}

export default App
