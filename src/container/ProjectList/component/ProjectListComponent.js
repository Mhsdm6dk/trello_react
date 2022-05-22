import React from 'react'
import { Link } from 'react-router-dom';
import CreateProjectContainer from '../../CreateProject/CreateProjectContainer';
import styles from './styles.module.css';
function ProjectListComponent(props) {

    return (
        <div className={styles.projectList}>
            <div className={styles.searchBox}>
                <p className={styles.searchTitle}>
                    Tìm kiếm
                </p>
                <div className={styles.searchInputBox}>
                    <i className={"fa-solid fa-magnifying-glass " + styles.searchIcon}></i>
                    <input className={styles.searchInput} placeholder='Tìm kiếm các project'>

                    </input>
                </div>

            </div>
            <p className={styles.searchCount}>
                Hiển thị {2 + '/' + 2} project
            </p>
            <div className={styles.projectList_listProject}>
                <div className={styles.projectBox}>
                    <div className={styles.project} onClick={
                        function () {
                            props.setCreateFormShow(true);
                        }
                    }>
                        <span className={styles.project_create}>
                            Tạo project mới
                        </span>
                    </div>
                </div>
                {props.listProject.map((project, index) => {
                    return <div key={index} className={styles.projectBox}>
                        <Link className={styles.projectBox_link} to={`/projectDetail/${project?.id}`}>
                            <div className={styles.project}>
                                <span className={styles.project_title}>
                                    {project?.title}
                                </span>
                                <i className={"fa-regular fa-star " + styles.project_icon}></i>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
            {
                props.createFormShow ? <CreateProjectContainer setCreateFormShow={props.setCreateFormShow} /> : <></>
            }
        </div>
    )
}

export default ProjectListComponent
