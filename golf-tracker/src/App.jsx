import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/LoginPage.jsx"
import HomePage from './pages/HomePage.jsx'
import AddClubPage from './pages/AddClubPage.jsx'
import AddCoursePage from './pages/AddCoursePage.jsx'
import AddRoundPage from './pages/AddRoundPage.jsx'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path='/add-club' element={<AddClubPage />}></Route>
          <Route path='/add-course' element={<AddCoursePage />}></Route>
          <Route path='/add-round' element={<AddRoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
