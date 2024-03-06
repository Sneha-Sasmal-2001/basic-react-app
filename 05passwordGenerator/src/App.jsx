import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passWordRef = useRef(null)

  //useCallback() -> use to make func run and optimized by memoizing and putting it in cache. { write func in this} so that if any cahnge in dependencies like [length,charAllowed,numAllowed] and func runs then put that in cache.

  //usecallback()'s dependencies are those on which the output is dependent and there is possibility of func run for that,so optimize that func
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{};:~`"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass+=str[char];
    }

    setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])


 //useEffect -> if any change in any dependencies like [length,numAllow,charAllow,passwordGenetaor func] then call {passwordGenerator()} func
useEffect(() => {
  passwordGenerator()
},
[length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
      <div className="w-full mx-auto shadow-md rounded-lg px-4 my-8 max-w-md flex flex-row justify-center flex-wrap text-orange-400 bg-gray-700">
        <h1 className='text-4xl text-center text-white my-4'>Password Generator</h1>

        <div className="flex w-full shadow rounded-lg overflow-hidden mb-0 my-4">
          <input  
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passWordRef}
          readOnly
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 text-white outline-none px-3 py-0.5 shrink-0 active:bg-slate-900 ">
            Copy
           </button>
        
          </div>

        <div className="flex text-sm gap-x-2 my-6">
            <input 
                type="range"
                min = {6}
                max = {100}
                value = {length}
                className='text-white cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>

            <input 
                type="checkbox"
                defaultChecked = {numberAllowed}
                id='numInput'
                className='text-white cursor-pointer'
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
            }}/>
            <label htmlFor='numInput'>Number</label>

            <input 
                type="checkbox"
                defaultChecked = {charAllowed}
                id='charInput'
                className='text-white cursor-pointer'
                onChange={() => {
                  setCharAllowed((prev) => !prev);
            }}/>
            <label htmlFor='charInput'>Character</label>
        </div>

      </div>
    </>
  )
}

export default App
