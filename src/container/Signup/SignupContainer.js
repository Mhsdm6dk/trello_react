import React from 'react'
import SignupComponent from './component/SignupComponent'

function SignupContainer(props) {
    return (
        <SignupComponent setShowSignup={props.setShowSignup}/>
    )
}

export default SignupContainer
