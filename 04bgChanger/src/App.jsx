import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("greenyellow")


  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-3 rounded-3xl'>
              <button  style={{backgroundColor:"red"}} className='text-gray-50 outline-none rounded-xl shadow-2xl shadow-black px-4 py-1' onClick={() => setColor("red")}>Red</button>
              <button  style={{backgroundColor:"green"}} className='text-gray-50 outline-none rounded-xl shadow-2xl shadow-black px-4 py-1' onClick={() => setColor("green")}>Green</button>
              <button  style={{backgroundColor:"blue"}} className='text-gray-50 outline-none rounded-xl shadow-2xl shadow-black px-4 py-1' onClick={() => setColor("blue")}>Blue</button>
              <button  style={{backgroundColor:"purple"}} className='text-gray-50 outline-none rounded-xl shadow-2xl shadow-black px-4 py-1' onClick={() => setColor("purple")}>Purple</button>
          </div>
        </div>
      </div>

  )
}

export default App
