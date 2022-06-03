import React from 'react'
import CardContainer from '../../List/CardContainer';
import styles from './styles.module.css';
import FadeLoader from 'react-spinners/FadeLoader';
import CardCreatContainer from '../../CardCreate';
function ProjectDetailComponent({ isLoading, projectData, id }) {
    return (
        isLoading?<div className={styles.loadingDiv}>
        <FadeLoader loading={isLoading} color={'#1641a1'}/>
    </div>:
        <div className={styles.projectDetail}>
            <div className={styles.projectDetail_header}>
                <h3 className={styles.projectDetail_name}>Lập trình nodejs</h3>
                <i className={"fa-regular fa-star " + styles.projectDetail_starIcon}></i>
            </div>
            <div className={styles.projectDetail_body}>
                {
                    projectData?.list.map((card) => <CardContainer card={card} projectData={projectData}/>)
                }
                <CardCreatContainer boardId={id}/>
            </div>
        </div>
    )
}

export default ProjectDetailComponent
