import React, { useEffect, useState } from 'react'
import axiosConfig from '../../share/axiosConfig';
import CardDetailComponent from './component/CardDetailComponent'
import { useQuery } from "react-query";
import { queryClient } from '../../App';

function CardDetailContainer(props) {
    const [memberShow, setMemberShow] = useState(false);
    const [moveShow, setMoveShow] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState('');
    const [showDescriptionInput, setShowDescriptionInput] = useState(false);
    const { data: cardData, isLoading, isError, isSuccess } = useQuery('getCardDetail', () => axiosConfig.get(`/api/user/cards/id=${props.id}`));
    useEffect(() => {
        setDescriptionInput(cardData?.cardDTO?.description);
    }, [cardData])
    const deleteCard = async () => {
        await axiosConfig.delete(`/api/user/cards/id=${cardData?.cardDTO?.id}`);
        props.setCardDetailShow(false);
        queryClient.invalidateQueries('getProjectDetail')
    }
    const moveCard = async (id) => {
        await axiosConfig.put('/api/user/cards', {
            countComment: cardData?.cardDTO?.countComment,
            description: cardData?.cardDTO?.description,
            id: cardData?.cardDTO?.id,
            listID: id,
            title: cardData?.cardDTO?.title
        });
        props.setCardDetailShow(false);
        queryClient.invalidateQueries('getProjectDetail');
    }
    const updateCard = async ()=>{
        await axiosConfig.put('/api/user/cards', {
            countComment: cardData?.cardDTO?.countComment,
            description: descriptionInput,
            id: cardData?.cardDTO?.id,
            listID: cardData?.cardDTO?.listID,
            title: cardData?.cardDTO?.title
        });
        props.setCardDetailShow(false);
        queryClient.invalidateQueries('getProjectDetail');
    }
    return (
        <CardDetailComponent updateCard={updateCard} idCard={props.id}  moveCard={moveCard} setDescriptionInput={setDescriptionInput} descriptionInput={descriptionInput} showDescriptionInput={showDescriptionInput} setShowDescriptionInput={setShowDescriptionInput} projectData={props.projectData} deleteCard={deleteCard} moveShow={moveShow} setMoveShow={setMoveShow} memberShow={memberShow} setMemberShow={setMemberShow} cardData={cardData} setCardDetailShow={props.setCardDetailShow} />
    )
}

export default CardDetailContainer
