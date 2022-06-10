
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axiosConfig from '../../share/axiosConfig';
import ProjectListComponent from './component/ProjectListComponent'

function ProjectListContainer(props) {
    console.log(JSON.parse(localStorage.getItem('user')))
    const [createFormShow, setCreateFormShow] = useState(false);
    const { data: listProject, isLoading, isError, isSuccess } = useQuery('getListProject', () => axiosConfig.get('/api/user/boardURs/boards'));
    return (
        <ProjectListComponent isLoading={isLoading} listProject={listProject} createFormShow={createFormShow} setCreateFormShow={setCreateFormShow} />
    )
}

export default ProjectListContainer
