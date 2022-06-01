import React, { useState } from 'react'
import CardComponent from './component/CardComponent'
import { useMutation } from 'react-query';
import axiosConfig from '../../share/axiosConfig';
import { queryClient } from '../../App';
function CardContainer(props) {
    const [inputShow, setInputShow] = useState(false);
    const [cardNameInput, setCardNameInput] = useState('');
    const [cardDetailShow, setCardDetailShow] = useState('');
    console.log(props.card);
    const { data, isLoading, mutate } = useMutation(async () => {
        const res = await axiosConfig.post('/api/user/cards', {
            countComment: 0,
            description: "description",
            listID: props.card.listDTO.id,
            title: cardNameInput
        })
        queryClient.prefetchQuery('getProjectDetail')
        setInputShow(false);
    });
    const deleteFunction =async()=>{
        await axiosConfig.delete(`/api/user/lists/id=${props.card.listDTO.id}`)
        .then(()=>{
            queryClient.prefetchQuery('getProjectDetail')
        })
    }
    return (
        <CardComponent mutate={mutate} deleteFunction={deleteFunction} cardDetailShow={cardDetailShow} card={props.card} setCardDetailShow={setCardDetailShow} inputShow={inputShow} setInputShow={setInputShow} cardNameInput={cardNameInput} setCardNameInput={setCardNameInput} />
    )
}

export default CardContainer
