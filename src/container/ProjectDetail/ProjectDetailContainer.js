
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosConfig from '../../share/axiosConfig';
import { useQuery } from 'react-query';
import ProjectDetailComponent from './component/ProjectDetailComponent'

function ProjectDetailContainer(props) {
    let { id } = useParams();
    const {data: projectData,isLoading, isError}= useQuery('getProjectDetail',()=>axiosConfig.get(`/api/user/boards/id=${id}`));
    console.log(projectData);
    return (
        <ProjectDetailComponent isLoading={isLoading} projectData={projectData} id={id} />
    )
}

export default ProjectDetailContainer
