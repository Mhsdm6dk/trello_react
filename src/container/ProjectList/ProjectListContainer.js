import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectListComponent from './component/ProjectListComponent'

function ProjectListContainer(props) {
    const [createFormShow,setCreateFormShow]=useState(false);
    const [listProject, setListProject]= useState([]);
    useEffect(()=>{
        axios.get('https://trello-like-vip.herokuapp.com/api/user/boardURs/boards',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            setListProject(response.data);
        })
        .catch(()=>{
            alert('Có lỗi xảy ra, vui lòng thử lại sau')
        })
    },[])
    return (
        <ProjectListComponent listProject={listProject} createFormShow={createFormShow} setCreateFormShow={setCreateFormShow}/>
    )
}

export default ProjectListContainer
