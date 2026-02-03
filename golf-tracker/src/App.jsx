import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/LoginPage.jsx"
import HomePage from './pages/HomePage.jsx'
import ItemFormPage from './pages/AddEditItem.jsx'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path='/add/:type' element={<ItemFormPage />}></Route>
          <Route path='/edit/:type/:id' element={<ItemFormPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
