import React from 'react'

function Card({username,btnText="something"}) {
    console.log(username);
    
    
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
        <img
          src="https://images.unsplash.com/photo-1744654733851-d9c3276f42b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='mt-2 inline-flex cursor-pointer'> {btnText }</button>
      </div>
  )
}

export default Card