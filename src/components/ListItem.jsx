import React from 'react'

const ListItem = ({ task }) => {
  return (
    <>
        <div className='mx-24 my-2 p-2 bg-teal-200 rounded-lg' >
            <li>{task}</li>
            {/* <button className='mx-1 px-1 bg-gray-400 rounded-md' >Done</button> */}
            <button className='mx-1 px-1 bg-gray-400 rounded-md' >Edit</button>
            <button className='mx-1 px-1 bg-gray-400 rounded-md' >Delete</button>
        </div>
    </>
  )
}

export default ListItem