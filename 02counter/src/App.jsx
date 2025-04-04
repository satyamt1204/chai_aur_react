import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  const addvalue = () => {
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
    }
  }
  const decvalue = () => {
    if(counter > 0)
    {
      counter -= 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Satyam</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addvalue}>Up</button>
      <button onClick={decvalue}>Down</button>
    </>
  )
}

export default App
