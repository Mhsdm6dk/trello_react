import React from 'react'
import styles from './styles.module.css';
function CommentComponent(props) {
    return (
        <div className={styles.commentBox}>
            <div className={styles.avatarBox}>
                NH
            </div>
            <div className={styles.commentDetailBox}>
                <p className={styles.commentDetailBox_name}>
                    Nguyễn Văn Hạnh
                </p>
                {
                    !props.showHandleComment ? <>
                        <div className={styles.commentDetailBox_comment}>
                            <p className={styles.commentDetail}>
                                Đây là comment
                            </p>
                        </div>
                        <div className={styles.commentDetailBox_featureBox}>
                            <span className={styles.commentDetailBox_feature} onClick={
                                function(){
                                    props.setShowHandleComment(true);
                                }
                            }>Chỉnh sửa</span> -{" "}
                            <span className={styles.commentDetailBox_feature}>Xóa</span>
                        </div>
                    </> : <div className={styles.handleCommentBox}>
                            <input value={props.commentInput} onChange={function(item){
                                props.setCommentInput(item.target.value);
                            }} className={styles.handleCommentBox_input}/>
                            <div className={styles.buttonBox}>
                                <button className={styles.saveButton}>
                                    Lưu
                                </button>
                                <i className={"fa-solid fa-xmark "+styles.exitButton} onClick={function(){
                                    props.setShowHandleComment(false);
                                }}></i>
                            </div>    
                    </div>
                }
            </div>
        </div>
    )
}

export default CommentComponent
