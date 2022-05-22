import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER } from '../../share/env'
import CardDetailComponent from './component/CardDetailComponent'

function CardDetailContainer(props) {
    const [cardData,setCardData]=useState();
    useEffect(()=>{
        axios.get(`${SERVER}/api/user/cards/id=${props.id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            console.log(response.data);
            setCardData(response.data);
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
