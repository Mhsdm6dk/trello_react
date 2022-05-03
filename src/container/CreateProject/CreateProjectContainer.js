import React, { useState } from 'react'
import CreateProjectComponent from './component/CreateProjectComponent'

function CreateProjectContainer(props) {
    const [colorChoose, setColorChoose] = useState(0);
    const [nameInput, setNameInput] = useState("");
    return (
        <CreateProjectComponent nameInput={nameInput} setNameInput={setNameInput} colorChoose={colorChoose} setColorChoose={setColorChoose} setCreateFormShow={props.setCreateFormShow} />
    )
}

export default CreateProjectContainer
