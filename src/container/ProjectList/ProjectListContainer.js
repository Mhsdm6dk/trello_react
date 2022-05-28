
import React, { useEffect, useState } from 'react'
import axiosConfig from '../../share/axiosConfig';
import ProjectListComponent from './component/ProjectListComponent'

function ProjectListContainer(props) {
    const [createFormShow, setCreateFormShow] = useState(false);
    const [listProject, setListProject] = useState([]);
    useEffect(() => {
        axiosConfig.get('/api/user/boardURs/boards')
            .then((response) => {
                setListProject(response);
            })
            .catch(() => {
                alert('Có lỗi xảy ra, vui lòng thử lại sau')
            })
    }, [])
    return (
        <ProjectListComponent listProject={listProject} createFormShow={createFormShow} setCreateFormShow={setCreateFormShow} />
    )
}

export default ProjectListContainer
