import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-indigo-800 border-black border-4 text-black p-4 rounded-3xl hover:bg-indigo-500 hover:border-white hover:text-white transition duration-150 active:bg-gray-700'>Chai aur satyam</h1>
      <Card />
    </>
  )
}

export default App
