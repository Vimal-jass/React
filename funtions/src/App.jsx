import React from 'react'

const App = () => {
 
  function inputcall(elem){
    console.log(elem.target.value)
  }

  function box(elem){
    console.log(elem.clientX, elem.clientY)
  }

  return (
    <>
    <input onChange={function(elem){
      inputcall(elem)
      
    }} type="text" />

    <div onClick={function(elem){
      box(elem)
    }} className='box'>
      
    </div>
    </>
  )
}

export default App