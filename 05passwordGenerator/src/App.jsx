import { useState, useCallback , useEffect, useRef} from 'react'
import './App.css'
import React from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
     window.navigator.clipboard.writeText(password)
  },
[password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$*_+-%^"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
     
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 my-10 text-white bg-gray-700'>
        <h2 className="text-center text-2xl font-semibold mb-6">Password Generator</h2>
        
        <div className='bg-white flex shadow-md rounded-md overflow-hidden mb-6'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            className='w-full px-4 py-2 text-gray-800 outline-none'
            ref = {passwordRef}
          />
          <button 
          onClick= {copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
              <input 
              type="range" 
              min={8}
              max={15}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}} />
              <label >Length: {length}</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked= {numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }} 
              />
              <label htmlFor="">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked= {charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} 
              />
              <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
