import React ,{useContext} from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div>Login ......</div>
    return <div>Welcome {user.username}  {user.name}</div>
}

export default Profile
