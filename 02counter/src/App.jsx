import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    // console.log("val added",Math.random());
    counter = counter+1 
    if(counter > 20) //assuring that counter val. will not be greater than 20 after add val 
      counter = 20

    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter - 1
    if(counter < 0) //assuring that counter val. will not be less than 0 after remove val 
    {
      counter = 0
    }
    setCounter(counter)

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button style={{color:'green',border:'2px solid grey',marginRight:'15px'}} onClick={addValue}>Increment Value : {counter}</button>
      <button style={{color:'red',border:'2px solid grey'}} onClick={removeValue}>Decrement Value : {counter}</button>

    </>
  )
}

export default App
