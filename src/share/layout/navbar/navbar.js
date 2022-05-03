import React, { useState } from 'react'
import NavbarComponent from './component/navbar'

function NavbarContainer(props) {
    const [choose_chooseList, setChoose_chooseList] = useState("Project");
    return (
        <NavbarComponent choose_chooseList={choose_chooseList} setChoose_chooseList={setChoose_chooseList} setShowNavbar={props.setShowNavbar} />
    )
}

export default NavbarContainer
