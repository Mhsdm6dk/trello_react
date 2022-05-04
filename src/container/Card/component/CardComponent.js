import React from 'react'
import styles from './styles.module.css';
function CardComponent(props) {
    return (
        <div style={{display:'flex',flexDirection:"column"}}>
            <div className={styles.projectDetail_listTask}>
            <h5 className={styles.listTaskName}>
                Cần làm
            </h5>
            <div className={styles.taskBox}>
                <p className={styles.taskName}>
                    deploy
                </p>
                <div className={styles.commentCountBox}>
                    <i class="fa-solid fa-comment"></i>
                    <span className={styles.commentCount}>
                        0
                    </span>
                </div>
            </div>
            <div className={styles.taskBox}>
                <p className={styles.taskName}>
                    deploy
                </p>
                <div className={styles.commentCountBox}>
                    <i class="fa-solid fa-comment"></i>
                    <span className={styles.commentCount}>
                        0
                    </span>
                </div>
            </div>
            {
                props.inputShow ? <div className={styles.inputForm}>
                        <div className={styles.inputBox}>
                            <input className={styles.input} placeholder='Nhập tiêu đề cho thẻ này...'/>
                        </div>
                        <div className={styles.buttonBox}>
                            <button className={styles.addCardButton}>
                                Thêm thẻ
                            </button>
                            <button className={styles.exitButton} onClick={
                                function(){
                                    props.setInputShow(false);
                                }
                            }>
                                <i className={"fa-solid fa-xmark "+styles.exitButton_icon}></i>
                            </button>
                        </div>
                </div> : <div className={styles.addTask} onClick={
                    function () {
                        props.setInputShow(true);
                    }
                }>
                    <i className={"fa-solid fa-plus " + styles.addTask_icon}></i><span>Thêm thẻ</span>
                </div>
            }
        </div>
        <div style={{flex:1}}>

        </div>
        </div>
    )
}

export default CardComponent
