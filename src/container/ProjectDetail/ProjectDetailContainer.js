import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SERVER } from '../../share/env';
import ProjectDetailComponent from './component/ProjectDetailComponent'

function ProjectDetailContainer(props) {
    let {id} =useParams();
    const [projectData,setProjectData] = useState();
    useEffect(()=>{
        axios.get(`${SERVER}/api/user/boards/id=${id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            console.log(response.data);
            setProjectData(response.data);
        })
        .catch(()=>{
            alert('Có lỗi xảy ra, vui lòng thử lại sau');
        })
    },[id]);
    return (
        <ProjectDetailComponent projectData={projectData} id={id}/>
    )
}

export default ProjectDetailContainer
