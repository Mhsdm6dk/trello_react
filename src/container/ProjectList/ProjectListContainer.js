import React, { useState } from 'react'
import ProjectListComponent from './component/ProjectListComponent'

function ProjectListContainer(props) {
    const [createFormShow,setCreateFormShow]=useState(false);
    return (
        <ProjectListComponent createFormShow={createFormShow} setCreateFormShow={setCreateFormShow}/>
    )
}

export default ProjectListContainer
