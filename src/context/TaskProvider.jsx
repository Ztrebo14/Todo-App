import React, { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export const useTask = () => {
    return useContext(TaskContext)
}

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    console.log(tasks)
  return (
    <>
        <TaskContext.Provider value={{ tasks, setTasks }} >
        {children}
        </TaskContext.Provider>
    </>
  )
}

export default TaskProvider