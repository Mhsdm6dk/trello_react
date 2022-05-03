import React from 'react'
import CreateProjectContainer from '../../CreateProject/CreateProjectContainer';
import styles from './styles.module.css';
function ProjectListComponent(props) {
    const a = ['Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test','Lập trình nodejs', 'test']
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
                        function(){
                            props.setCreateFormShow(true);
                        }
                    }>
                        <span className={styles.project_create}>
                            Tạo project mới
                        </span>
                    </div>
                </div>
                {a.map(name => {
                    return <div className={styles.projectBox}>
                        <div className={styles.project}>
                            <span className={styles.project_title}>
                                {name}
                            </span>
                            <i className={"fa-regular fa-star "+styles.project_icon}></i>
                        </div>
                    </div>
                })}
            </div>
            {
                props.createFormShow?<CreateProjectContainer setCreateFormShow={props.setCreateFormShow}/>:<></>
            }
        </div>
    )
}

export default ProjectListComponent
