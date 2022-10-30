import React, { useContext, useState } from 'react'
import './LoginForm.scss'
import {useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { AuthContext } from '../../context/AuthContext';



export default function LoginForm() {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault()
    }
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    console.log(user)
    navigate('/')
  })
  .catch((error) => {
setError(true)
  });

  return (

    <div className='login'>
        <form onSubmit={handleLogin} className='login__form'>
            <input type='email' placeholder='Johndoe@gmail.com' className='login__input' onChange={e=>setEmail(e.target.value)}/>
            <input type='password' placeholder='password123' className='login__input' onChange={e=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
            {error && <span className='login__error'>Wrong email or password!</span>}
        </form>


    </div>
  )
}
