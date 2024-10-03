import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/App'
import './styles/index.css'
import TaskProvider from './context/TaskProvider'

createRoot(document.getElementById('root')).render(
    <TaskProvider>
        <App />
    </TaskProvider>
)
