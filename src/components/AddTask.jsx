import React, { useState } from 'react'
import { useTask } from '../context/TaskProvider'


const AddTask = () => {
    const { setTasks, task, setTask } = useTask()

    const handleInputTaskName = (e) => {
        const { value } = e.target
        setTask(prevTask => ({...prevTask, taskName: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prevTask => [...prevTask, task])
        setTask({ taskName: '', isDone: false})
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='taskName' 
                id='taskName' 
                value={task.taskName} 
                onChange={handleInputTaskName} 
                className='py-1 pl-2 rounded-l-md'
            />
            <button 
                type="submit" 
                className='bg-slate-200 rounded-r-md mx-2 p-1'
            >Add Task</button>
        </form>
    </>
  )
}

export default AddTask