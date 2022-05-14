import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../share/env';
import LoginComponent from './component/LoginComponent'

function LoginContainer(props) {
    const [userNameInput, setUserNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const history = useHistory();
    const login=()=>{
        axios.post(`${SERVER}/api/auth/login`,{
            password: passwordInput,
            rememberMe: true,
            userName: userNameInput
          })
        .then((data)=>{
            localStorage.setItem('token',data.data.token);
            history.push('/');
        })
        .catch(()=>{
            alert('hello')
        })
    }
    return (
        <LoginComponent login={login} userNameInput={userNameInput} setUserNameInput={setUserNameInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput} setShowSignup={props.setShowSignup}/>
    )
}

export default LoginContainer
