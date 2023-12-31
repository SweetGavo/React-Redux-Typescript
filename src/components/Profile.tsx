import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector((state:any) => state.user.value);
    const themeColor = useSelector((state:any) => state.theme.value);

  return (
    <div style={{color:themeColor}}>
        <h1>Profile</h1>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>Age : {user.age}</p>
    </div>
  )
}

export default Profile;