// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)
  const obj = {
    name:"Sneha",
    course:"React"
  }

  const arr = [1,2,3];
  return (
    <>
      <h1 className="bg-green-300 font-bold rounded-xl mb-6">Tailwind Test</h1>
      <Card channel="chaiaurcode" btnText="visit me" myObj={obj} myArr={arr}/>
      <Card channel="reactSikho" btnText="learn me"/>

    </>
  )
}

export default App
