import React from 'react'

const User=(props)=> {
  return (
    <div>
      <p>This is User Componet</p>
      <p>{props.data.name}</p>
    </div>
  )
}

export default User
