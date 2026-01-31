import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "/pages/LoginPage.jsx"
import HomePage from '../pages/HomePage'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
