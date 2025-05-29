import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch('https://api.github.com/users/TejasD-13')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         setData(data)
//       })
//   }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white px-8 py-6 rounded-xl shadow-md text-3xl font-semibold">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/TejasD-13')
   return response.json()
}