import React, { useEffect, useState } from 'react'
import axiosConfig from '../../share/axiosConfig';
import CardDetailComponent from './component/CardDetailComponent'
import { useQuery } from "react-query";

function CardDetailContainer(props) {
    const [memberShow,setMemberShow]=useState(false);
    const {data: cardData, isLoading, isError, isSuccess} = useQuery('getCardDetail', () => axiosConfig.get(`/api/user/cards/id=${props.id}`));


    return (
        <CardDetailComponent memberShow={memberShow} setMemberShow={setMemberShow} cardData={cardData}
                             setCardDetailShow={props.setCardDetailShow} idCard={props.id}/>
    )
}

export default CardDetailContainer
