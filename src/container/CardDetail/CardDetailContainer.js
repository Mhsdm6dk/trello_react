import React, { useEffect, useState } from 'react'
import axiosConfig from '../../share/axiosConfig';
import CardDetailComponent from './component/CardDetailComponent'
import { useQuery } from "react-query";

function CardDetailContainer(props) {
    const {data: cardData, isLoading, isError, isSuccess} = useQuery('getCardDetail', () => axiosConfig.get(`/api/user/cards/id=${props.id}`));

    return (
        <CardDetailComponent cardData={cardData} setCardDetailShow={props.setCardDetailShow} />
    )
}

export default CardDetailContainer
