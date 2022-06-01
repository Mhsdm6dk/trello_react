import React, { useState } from 'react'
import CreateProjectComponent from './component/CreateProjectComponent'
import { QueryClient, useMutation } from 'react-query';
import axiosConfig from '../../share/axiosConfig';
import { queryClient } from '../../App';
function CreateProjectContainer(props) {
    const [colorChoose, setColorChoose] = useState(0);
    const [nameInput, setNameInput] = useState("");
    const arrayColor = ['black', '#0079bf', '#d29034', '#519839', '#b04632', '#89609e'];
    const mutation = useMutation(() => {
        return axiosConfig.post('/api/user/boards',
            {
                "background": arrayColor[colorChoose],
                "star": true,
                "title": nameInput
            }
        )
        .then((data)=>{
            console.log(props.listProject);
            
            queryClient.setQueryData('getListProject',[...props.listProject,data]);
            props.setCreateFormShow(false);
        })
        .catch(error=>{
            console.log(error);
    })
    })
    return (
        <CreateProjectComponent nameInput={nameInput} mutation={mutation} setNameInput={setNameInput} colorChoose={colorChoose} setColorChoose={setColorChoose} setCreateFormShow={props.setCreateFormShow} />
    )
}

export default CreateProjectContainer
