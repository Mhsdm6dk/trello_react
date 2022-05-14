import React, { useState } from 'react'
import CardComponent from './component/CardComponent'

function CardContainer(props) {
    const [inputShow,setInputShow]=useState(false);
    const [cardNameInput,setCardNameInput]=useState('');
    const [cardDetailShow,setCardDetailShow]=useState('');
    return (
        <CardComponent cardDetailShow={cardDetailShow} setCardDetailShow={setCardDetailShow} inputShow={inputShow} setInputShow={setInputShow} cardNameInput={cardNameInput} setCardNameInput={setCardNameInput}/>
    )
}

export default CardContainer
