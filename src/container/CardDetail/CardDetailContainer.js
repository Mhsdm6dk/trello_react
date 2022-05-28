import React, { useEffect, useState } from 'react'
import axiosConfig from '../../share/axiosConfig';
import CardDetailComponent from './component/CardDetailComponent'

function CardDetailContainer(props) {
    const [cardData,setCardData]=useState();
    useEffect(()=>{
        axiosConfig.get(`/api/user/cards/id=${props.id}`)
        .then((response)=>{
            console.log(response);
            setCardData(response);
        })
        .catch(()=>{
            alert('Có lỗi xảy ra, vui lòng thử lại')
        })
    },[])
    return (
        <CardDetailComponent cardData={cardData} setCardDetailShow={props.setCardDetailShow}/>
    )
}

export default CardDetailContainer
