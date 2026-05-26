import React from 'react'
import axios from 'axios'
import { useState } from 'react'



const App = () => {

const [data, setData] = useState([])
  async function ApiCalling(){
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(data)
    setData(data.data)
  }

  return (
    <>
   <button onClick={ApiCalling}>
  Fetch Data
</button>

<div className="posts-container">
  {data.length > 0 ? (
    data.map((elem) => (
      <div key={elem.id} className="card">
        <h2>{elem.title}</h2>
        <p>User ID: {elem.userId}</p>
      </div>
    ))
  ) : (
    <h3 className="empty">No Data Found</h3>
  )}
</div>


    </>
  )
}

export default App