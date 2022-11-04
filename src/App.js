import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/Admin/Admin'
import {AuthContext} from './context/AuthContext'
import {useContext} from 'react'
import Register from './pages/RegisterPage/Register';
import AdminProducts from './pages/AdminProducts/AdminProducts';
import AdminAdd from './pages/AdminAdd/AdminAdd';
import About from './pages/About/About';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AdminEdit from './pages/AdminEdit/AdminEdit';



function App() {
  const {currentUser} = useContext(AuthContext)

const RequireAuth = ({ children }) => {
  return currentUser ? children : <Navigate to='/login'/>
}
console.log(currentUser)


  // TODO: Role based Auth, seperate all admin route into its own Routes? 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login'  element={<LoginPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/admin' element={<RequireAuth><AdminPage/></RequireAuth>}/>
          <Route path='/admin/products' element={<RequireAuth><AdminProducts/></RequireAuth>}/>
          <Route path='/admin/add' element={<RequireAuth><AdminAdd/></RequireAuth>}/>
          <Route path='/admin/:id/edit' element={<RequireAuth><AdminEdit/></RequireAuth>}/>
          <Route/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
