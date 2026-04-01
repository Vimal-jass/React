import React from 'react'

const Card = (props) => {
  return (
    
   
        <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1747851576159-8d483776648d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h2>{props.user}</h2>
        <p>{props.para}</p>
        <button>view</button>
    </div>
  
    
  )
}

export default Card