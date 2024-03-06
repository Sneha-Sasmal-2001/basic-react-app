import UserContext from '../context/UserContext'
import {useContext} from 'react'
const Profile = () => {

    const {user} = useContext(UserContext);

  if(!user) return <div>Please Log In</div>

  return <div>Welcome {user.username}</div>
}

export default Profile
