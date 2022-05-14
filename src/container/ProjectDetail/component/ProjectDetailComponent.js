import React from 'react'
import CardContainer from '../../CardList/CardContainer';
import styles from './styles.module.css';
function ProjectDetailComponent(props) {
    return (
        <div className={styles.projectDetail}>
            <div className={styles.projectDetail_header}>
                <h3 className={styles.projectDetail_name}>Lập trình nodejs</h3>
                <i className={"fa-regular fa-star " + styles.projectDetail_starIcon}></i>
            </div>
            <div className={styles.projectDetail_body}>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>

            </div>
        </div>
    )
}

export default ProjectDetailComponent
