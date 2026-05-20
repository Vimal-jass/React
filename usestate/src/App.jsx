import React from 'react'
import { useState } from 'react'


const App = () => {

const [num, setnum] = useState(0)

function increase(){
  setnum(num+1)
}
function decrease(){
  setnum(num-1)
}
function jumpBy5(){
  setnum(num+5)
}
  return (
    <div>
  

      <div className="num">
        <h1>{num}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={jumpBy5}>jump by 5</button>
      </div>
    </div>
  )
}

export default App