import React from 'react'
import LoginComponent from './component/LoginComponent'

function LoginContainer(props) {
    return (
        <LoginComponent setShowSignup={props.setShowSignup}/>
    )
}

export default LoginContainer
