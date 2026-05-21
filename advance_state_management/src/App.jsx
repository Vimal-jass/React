import React, { useState } from 'react'

const App = () => {

  const [user, setuser] = useState(
    {name: "vimal", age:23}
  )

  function User(){
    const newUser = {...user}
    newUser.name = "manoj",
    newUser.age = "18"
    setuser(newUser)
  }

  function newUser(){

    setuser(prev => ({...prev, age :98}))

  }

  return (
    <div>
      <h1>my name is {user.name} and age is {user.age}</h1>
      <button onClick={User} >click</button>
    </div>
  )
}

export default App