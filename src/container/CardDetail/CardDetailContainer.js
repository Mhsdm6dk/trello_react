import React from 'react'
import CardDetailComponent from './component/CardDetailComponent'

function CardDetailContainer(props) {
    return (
        <CardDetailComponent setCardDetailShow={props.setCardDetailShow}/>
    )
}

export default CardDetailContainer
