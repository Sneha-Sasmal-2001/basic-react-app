import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function submitHandler(event) {
        event.preventDefault();
        setUser({username, password})
    }

  return (
    <div>
      <h2>Log In</h2>
      <input type='text' placeholder='user name' value={username} onChange={(event)=> setUsername(event.target.value)}/>
      {"               "}
      <input type='password' placeholder='password' value={password} onChange={(event)=> setPassword(event.target.value)}/>
      <br/>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Login
