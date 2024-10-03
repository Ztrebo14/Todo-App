import React, { useState } from 'react'
import { useTask } from '../context/TaskProvider'


const AddTask = () => {
    const { setTasks } = useTask()
    const [ taskName, setTaskName ] = useState("")

    const handleInputTaskName = (e) => {
        setTaskName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prevTask => [...prevTask, taskName])
        setTaskName('')
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name='taskName' id='taskName' onChange={handleInputTaskName} />
            <button type="submit" className='bg-slate-200 rounded-md mx-2 p-1'>Add Task</button>
        </form>
        <p>{taskName}</p>
    </>
  )
}

export default AddTask