import React, { useState } from 'react'
import BodyComponent from './component/body'

function BodyContainer(props) {
    const [showNavbar,setShowNavbar]=useState(true);
    return (
        <BodyComponent showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
    )
}

export default BodyContainer
