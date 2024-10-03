import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} >

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
