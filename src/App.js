import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/Admin/Admin'

function App() {
const currentUser = false;
const RequireAuth = ({ children })=> {
  return currentUser ? (children) : <Navigate to='/login'/>
}

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
