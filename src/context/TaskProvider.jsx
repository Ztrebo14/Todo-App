import React, { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export const useTask = () => {
    return useContext(TaskContext)
}

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({
      taskName: '',
      isDone: false
    })

  return (
    <>
        <TaskContext.Provider value={{ tasks, setTasks, task, setTask }} >
        {children}
        </TaskContext.Provider>
    </>
  )
}

export default TaskProvider