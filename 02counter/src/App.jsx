import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  //let counter = 5

const addValue = () =>{
    // counter = counter+1 
    console.log("Clicked", counter); 
    setCounter(counter + 1)     
}

const minusValue = () => {
    console.log("Clicked", counter);
    setCounter(counter - 1)
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter }</h2>

      <button
      onClick={addValue}>Add value</button>
      <br /><br />
      <button
      onClick={minusValue}>Remove value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
