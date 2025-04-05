import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [color, setColor] = useState("bg-gray-700")
  const changecolor = (Color = "bg-blue-800") => {
    setColor(Color);
  }
  return (
    <>
      <div className={`w-full flex items-end justify-center min-h-screen p-6 ${color}`} >
        <div className='flex rounded-2xl bg-white px-6 py-3 gap-5 shadow-lg items-center'>
          <button className='bg-red-800 rounded-4xl w-16 p-1 border-2 text-white hover:border-blue-500' onClick={changecolor.bind(null, "bg-red-800")}>Red</button>
          <button className='bg-green-800 rounded-4xl w-16 p-1 border-2 text-white hover:border-blue-500' onClick={changecolor.bind(null, "bg-green-800")}>Green</button>
          <button className='bg-blue-800 rounded-4xl w-16 p-1 border-2 text-white hover:border-blue-500' onClick={changecolor.bind(null, "bg-blue-800")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
