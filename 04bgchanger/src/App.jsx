/* import { useState } from 'react'

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
          <button className='bg-red-800 rounded-4xl w-16 p-1 border-4 text-white hover:border-blue-500' onClick={changecolor.bind(null, "bg-red-800")}>Red</button>
          <button className='bg-green-800 rounded-4xl w-16 p-1 border-4 text-white hover:border-blue-500' onClick={changecolor.bind(null, "bg-green-800")}>Green</button>
          <button className='bg-blue-800 rounded-4xl w-16 p-1 border-4 text-white hover:border-blue-500' onClick={changecolor.bind(null, "bg-blue-800")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
 */
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let [color, setColor] = useState("olive")
  const changecolor = (Color = "bg-blue-800") => {
    setColor(Color);
  }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-3
        '>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "red"}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "green"}} onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "blue"}} onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App