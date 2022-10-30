import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/Admin/Admin'
import {AuthContext} from './context/AuthContext'
import {useContext} from 'react'

function App() {
  const {currentUser} = useContext(AuthContext)

const RequireAuth = ({ children })=> {
  return currentUser ? (children) : <Navigate to='/login'/>
}
console.log(currentUser)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login'  element={<LoginPage/>}/>
          <Route path='/admin' element={<RequireAuth><AdminPage/></RequireAuth>}/>
          <Route/>
          <Route/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
