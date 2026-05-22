import React from 'react'
import { useState } from 'react'
const App = () => {

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [note, setNote] = useState([])
  
  function saveNote (){
   
  }


  function submitHandler(w){
    w.preventDefault()
    console.log('clicked ', name , details)
     const newNote = [...note]
    newNote.name
    newNote.details
     console.log(newNote)
  }
  return (
      <div className="form">
        <form action="" onSubmit={(w)=>{
          submitHandler(w)      
          }}>
          <input type="text"
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
           placeholder='enter your project name' 
           />
        <textarea name="" 
        placeholder='enter your project details' 
        id=""
         value={details}
          onChange={(e)=>{
            setDetails(e.target.value)}}
        ></textarea>
        <button>submit</button>
        
        </form>
      </div>
    
  )
}

export default App