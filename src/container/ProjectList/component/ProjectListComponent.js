import React from 'react'
import { Link } from 'react-router-dom';
import CreateProjectContainer from '../../CreateProject/CreateProjectContainer';
import styles from './styles.module.css';
import FadeLoader from "react-spinners/FadeLoader";
function ProjectListComponent({ isLoading, listProject, createFormShow, setCreateFormShow }) {

    return (
        isLoading?<div className={styles.loadingDiv}>
            <FadeLoader loading={isLoading} color={'#1641a1'}/>
        </div>:
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
                            setCreateFormShow(true);
                        }
                    }>
                        <span className={styles.project_create}>
                            Tạo project mới
                        </span>
                    </div>
                </div>
                {listProject.map((project, index) => {
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
                createFormShow ? <CreateProjectContainer setCreateFormShow={setCreateFormShow} /> : <></>
            }
        </div>
    )
}

export default ProjectListComponent
