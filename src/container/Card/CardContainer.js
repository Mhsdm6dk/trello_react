import React, { useState } from 'react'
import CardComponent from './component/CardComponent'

function CardContainer(props) {
    const [inputShow,setInputShow]=useState(false);
    const [cardNameInput,setCardNameInput]=useState('');
    return (
        <CardComponent inputShow={inputShow} setInputShow={setInputShow} cardNameInput={cardNameInput} setCardNameInput={setCardNameInput}/>
    )
}

export default CardContainer
