
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axiosConfig from '../../share/axiosConfig';

import LoginComponent from './component/LoginComponent'

function LoginContainer(props) {
    const [userNameInput, setUserNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const history = useHistory();
    const login = () => {

        axiosConfig.post(`/api/auth/login`, {
            password: passwordInput,
            rememberMe: true,
            userName: userNameInput
        })
            .then((data) => {
                localStorage.setItem('token', data.token);
                history.push('/');
            })
    }
    return (
        <LoginComponent login={login} userNameInput={userNameInput} setUserNameInput={setUserNameInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput} setShowSignup={props.setShowSignup} />
    )
}

export default LoginContainer
