import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /* 
  My attempt uses a generate button to create a password each time
  const [length, setLength] = useState(15);
  const [numallowed, setNumallowed] = useState(0);
  const [charallowed, setCharallowed] = useState(0);
  const [password, setPassword] = useState("");
  const randompassword = (length, numallowed, charallowed) => {
    const loweralpha = 'abcdefghijklmnopqrstuvwxyz';
    const upperalpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    let allChars = loweralpha + upperalpha;
    if (numallowed) allChars += nums;
    if (charallowed) allChars += symbols;
  
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += allChars[Math.floor(Math.random() * allChars.length)];
    }
  
    setPassword(pass);
  };
  return (
    <div class="w-full min-h-screen bg-black flex items-start justify-center p-6">
      <div class="flex-col bg-blue-950 shadow-lg rounded-xl px-6 py-3 flex gap-4 items-center">
        <div className='flex'>
          <div className='bg-white w-150 rounded-l-2xl p-3 text-orange-400 text-xl'>{password}</div>
          <button className=' bg-blue-600 rounded-r-2xl p-3 text-xl font-bold hover:bg-blue-400 active:text-white'>Copy</button>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            type="range"
            min="1"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-64 accent-blue-500"
          />
          <h1 className="text-xl text-orange-400">Length({length})</h1>
          <input
            type='checkbox' id="Numbers" onChange={(e) => setNumallowed(e.target.checked ? 1 : 0)}/>
          <h1 className='text-xl text-orange-400'>Numbers</h1>
          <input
            type='checkbox' id="Characters" onChange={(e) => setCharallowed(e.target.checked ? 1 : 0)} />
          <h1 className='text-xl text-orange-400'>Characters</h1>
          <button className='bg-blue-600 rounded-2xl p-3 text-xl font-bold hover:bg-blue-400 active:text-white ' onClick={() => randompassword(length, numallowed, charallowed)}
          >Generate</button>
        </div>
      </div>
    </div> */


  const [length, setLength] = useState(15);
  const [numallowed, setNumallowed] = useState(0);
  const [charallowed, setCharallowed] = useState(0);
  const [password, setPassword] = useState("");
  const passref = useRef(null);
  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let pass = ""
    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numallowed, charallowed, setPassword])

  const copyToClipboard = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [numallowed, charallowed, length, setPassword]);

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passref}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400 active:bg-gray-600' onClick={copyToClipboard}
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numallowed}
            id="numberInput"
            onChange={() => {
              setNumallowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charallowed}
            id="characterInput"
            onChange={() => {
              setCharallowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
