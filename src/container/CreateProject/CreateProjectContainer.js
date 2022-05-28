import React, { useState } from 'react'
import CreateProjectComponent from './component/CreateProjectComponent'
import { QueryClient, useMutation } from 'react-query';
import axiosConfig from '../../share/axiosConfig';
function CreateProjectContainer(props) {
    const [colorChoose, setColorChoose] = useState(0);
    const [nameInput, setNameInput] = useState("");
    const arrayColor = ['black', '#0079bf', '#d29034', '#519839', '#b04632', '#89609e'];
    const queryClient =new QueryClient();
    const mutation = useMutation((name,color) => {
        console.log(color)
        return axiosConfig.post('/api/user/boards',
            {
                "background": arrayColor[colorChoose],
                "start": true,
                "title": nameInput
            }
        )
        .then((data)=>{
            console.log(data);
            // queryClient.setQueryData('getListProject');
        })
    })
    return (
        <CreateProjectComponent nameInput={nameInput} mutation={mutation} setNameInput={setNameInput} colorChoose={colorChoose} setColorChoose={setColorChoose} setCreateFormShow={props.setCreateFormShow} />
    )
}

export default CreateProjectContainer
