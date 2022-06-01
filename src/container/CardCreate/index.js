import React from 'react'
import { useState } from 'react'
import CardCreateComponent from './component'
import {useMutation} from 'react-query';
import axiosConfig from '../../share/axiosConfig';
import { queryClient } from '../../App';
function CardCreatContainer({boardId}) {
    const [nameInput, setNameInput] = useState('');
    const [showName, setShowName] = useState(false);
    const {data,isSuccess,isError,mutate}=useMutation(()=>axiosConfig.post('/api/user/lists',{
        boardID:boardId,
        title:nameInput
    })
    .then((response)=>{
        // console.log(response);
        setShowName(false);
        queryClient.setQueryData('getProjectDetail',(project)=>{
            return{
                ...project,
                list:[...project.list,response]
            }
        });
    })
    );
    return (

        <CardCreateComponent mutate={mutate} showName={showName} setShowName={setShowName} nameInput={nameInput} setNameInput={setNameInput} />
    )
}

export default CardCreatContainer
