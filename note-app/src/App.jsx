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
   newNote.push({name, details})
     setNote(newNote)
     console.log(newNote)
  }
  return (
    <>
      <div className="app">

  <div className="form-section">

    <h1>Create Project</h1>
    <p>Add your project name and details below.</p>

    <form
      onSubmit={(w) => {
        submitHandler(w)
      }}
    >

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        placeholder='Enter your project name'
      />

      <textarea
        placeholder='Enter your project details'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
      ></textarea>

      <button type='submit'>Add Project</button>

    </form>

  </div>


  <div className="cards-container">

    {
      note.length > 0 ?

        note.map(function (elem, idx) {

          return (
            <div key={idx} className="card">

              <div className="card-top">
                <span>Project #{idx + 1}</span>
              </div>

              <h2>{elem.name}</h2>

              <p>{elem.details}</p>

            </div>
          )
        })

        :

        <div className="empty">
          <h2>No Projects Yet</h2>
          <p>Add your first project to see it here.</p>
        </div>
    }

  </div>

</div>

      </>
    
  )
}

export default App