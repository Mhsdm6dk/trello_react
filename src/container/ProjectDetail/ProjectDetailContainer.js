import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailComponent from './component/ProjectDetailComponent'

function ProjectDetailContainer(props) {
    let {id} =useParams();
    return (
        <ProjectDetailComponent id={id}/>
    )
}

export default ProjectDetailContainer
