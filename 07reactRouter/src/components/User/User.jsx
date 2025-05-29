import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div className="bg-gray-800 text-white text-4xl p-6 rounded-2xl shadow-lg max-w-md mx-auto mt-5 text-center">
      User: <span className="font-semibold text-blue-400">{userid}</span>
    </div>
  )
}

export default User
