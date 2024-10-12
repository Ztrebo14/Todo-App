import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import AddTask from '../components/AddTask'
import { useTask } from '../context/TaskProvider'
import ListItem from '../components/ListItem'

const Dashboard = () => {
    const { tasks } = useTask()
    console.log(tasks)
  return (
    <>
        <div className='min-h-screen bg-cyan-500 text-center'>
            <h1>Todo List App</h1>
            <NavBar />
            <br />
            <AddTask />
            {tasks.map((task, index) => (
                <ul key={index}>
                    <ListItem id={index} taskName={task.taskName} isDone={task.isDone} />
                </ul>
            ))}
        </div>
    </>
  )
}

export default Dashboard