import React from 'react'
import { useTask } from '../context/TaskProvider'

const ListItem = ({id, taskName, isDone }) => {
    const { setTasks, task, setTask } = useTask()

  return (
    <>
        <div className='mx-24 my-2 p-2 bg-teal-200 rounded-lg' >
            <li>
                <p>{taskName}</p>                
                <input 
                  type="checkbox" 
                  checked={isDone}
                  onChange={e => {
                    setTasks(prevTasks => prevTasks.map((task, index) => 
                      index === id ? {...task, isDone: !task.isDone} : task
                    ))
                  }}
                />
            </li>
            {/* <button className='mx-1 px-1 bg-gray-400 rounded-md' >Done</button> */}
            <button className='mx-1 px-1 bg-gray-400 rounded-md' >Edit</button>
            <button className='mx-1 px-1 bg-gray-400 rounded-md' >Delete</button>
        </div>
    </>
  )
}

export default ListItem