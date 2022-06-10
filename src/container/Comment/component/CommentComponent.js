import React from 'react';
import styles from './styles.module.css';
import {format} from 'date-fns';

let stompClient = null;

function CommentComponent(props) {

    function getDate() {
        const updatedDate = new Date(props.dataComment.updatedDate);
        updatedDate.setFullYear(updatedDate.getFullYear() + 52);
        return format(updatedDate, 'dd/MM/yyyy kk:mm:ss');
    }


    return (
        <div className={styles.commentBox}>
            <div className={styles.avatarBox}>
                {props.dataComment.nameUser.substring(0, 3)}
            </div>
            <div className={styles.commentDetailBox}>
                <p className={styles.commentDetailBox_name}>
                    {props.dataComment.nameUser}
                    <span className={styles.commentDetailBox_feature}>
                        {getDate()}
                    </span>
                </p>

                {
                    !props.showHandleComment ? <>
                        <div className={styles.commentDetailBox_comment}>
                            <p className={styles.commentDetail}>
                                {props.commentInput}
                            </p>
                        </div>
                        <div className={styles.commentDetailBox_featureBox}>
                            <span className={styles.commentDetailBox_feature} onClick={
                                function () {
                                    if (props.idUser === props.dataComment.userID) {
                                        props.setShowHandleComment(true);
                                    }
                                }
                            }>Chỉnh sửa</span>{" "} -
                            <span className={styles.commentDetailBox_feature}
                                  onClick={
                                      function () {
                                          if (props.idUser === props.dataComment.userID) {
                                              props.deleteComment(props.dataComment.id, props.commentInput);
                                          }
                                      }
                                  }
                            >Xóa</span>
                        </div>
                    </> : <div className={styles.handleCommentBox}>
                        <input value={props.commentInput} onChange={function (item) {
                            props.setCommentInput(item.target.value);
                        }} className={styles.handleCommentBox_input}/>
                        <div className={styles.buttonBox}>
                            <button className={styles.saveButton} onClick={
                                function () {
                                    props.setShowHandleComment(false);
                                    props.send(props.dataComment.id, props.commentInput, props.dataComment.createdDate, new Date());
                                }
                            }>
                                Lưu
                            </button>
                            <i className={"fa-solid fa-xmark " + styles.exitButton} onClick={function () {
                                props.setShowHandleComment(false);
                            }}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CommentComponent
