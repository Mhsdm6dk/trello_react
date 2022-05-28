
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosConfig from '../../share/axiosConfig';

import ProjectDetailComponent from './component/ProjectDetailComponent'

function ProjectDetailContainer(props) {
    let { id } = useParams();
    const [projectData, setProjectData] = useState();
    useEffect(() => {
        axiosConfig.get(`/api/user/boards/id=${id}`)
            .then((response) => {
                console.log(response);
                setProjectData(response);
            })
            .catch(() => {
                alert('Có lỗi xảy ra, vui lòng thử lại sau');
            })
    }, [id]);
    return (
        <ProjectDetailComponent projectData={projectData} id={id} />
    )
}

export default ProjectDetailContainer
