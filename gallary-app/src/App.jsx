import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false);

async function user(){
  setLoading(true)
    const response =await axios.get('https://picsum.photos/v2/list')

 console.log(response.data)
 setUserData(response.data)
 setLoading(false)

}

useEffect(function(){
  user()
}, [])
  

  return (
    <div className="p-8 overflow-hidden">


  <div className="flex flex-wrap gap-4">
    {userData.map((elem) => (
      <div
        key={elem.id}
        className="bg-white rounded-xl shadow-md overflow-hidden w-72"
      >
        <img
          className="w-full h-52 object-cover"
          src={elem.download_url}
          alt={elem.author}
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {elem.author}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Photo ID: {elem.id}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    
  )
}

export default App