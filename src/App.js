import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AuthProvider} from './AuthContext'
import HomePage from './HomePage'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
