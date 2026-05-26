import React from 'react'
import { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState([])
 
   async function api(){
    const response =await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    console.log(response)
    const data  =await response.json()
    console.log(data)
    setfirst(data)
  }

  return (
    <>
    <div onClick={api}> get data</div>
    {first.map(function(elem, idx){
      return <div>
        <h1 key={idx}> {idx} <span>{elem}</span></h1>

      </div>
    })}
    </>
    
  )
}

export default App