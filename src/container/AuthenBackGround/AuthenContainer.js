import React, { useState } from 'react'
import Authencomponent from './component/AuthenComponent'

function AuthenContainer(props) {
    const [showSignup,setShowSignup]=useState(false);
    return (
        <Authencomponent showSignup={showSignup} setShowSignup={setShowSignup}/>
    )
}

export default AuthenContainer
