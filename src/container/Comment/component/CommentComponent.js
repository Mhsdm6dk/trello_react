import React, {Component} from 'react';
import styles from './styles.module.css';
import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";

function CommentComponent(props) {
    // const socket = new SockJS('https://trello-like-vip.herokuapp.com/trello-stomp-endpoint');
    // const stompClient = Stomp.over(socket);
    //
    // function connect() {
    //     stompClient.connect({}, function(frame) {
    //         console.log('Connected: ' + frame);
    //
    //         stompClient.subscribe('/topic/send-comment', function(data) {
    //             const notification= JSON.parse(data.body);
    //             console.log(notification);
    //         });
    //     });
    // }
    //
    // function disconnect() {
    //     if (stompClient != null) {
    //         stompClient.disconnect();
    //     }
    // }
    //
    // function send() {
    //     const comment = {userID:1,cardID:1,createdDate:"2022-01-10T15:23:44Z",updatedDate:"2022-01-10T15:23:44Z",content:"abc"};
    //     stompClient.send('/ws/chat.sendComment', {}, JSON.stringify(comment));
    // }

    return (
        <div className={styles.commentBox}>
            <div className={styles.avatarBox}>
                { props.dataComment.userID}
            </div>
            <div className={styles.commentDetailBox}>
                <p className={styles.commentDetailBox_name}>
                    {props.dataComment.userID}
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
                                     props.setShowHandleComment(true);
                                }
                            }>Chỉnh sửa</span> -{" "}
                            <span className={styles.commentDetailBox_feature}>Xóa</span>
                            <span className={styles.commentDetailBox_feature}>  {props.dataComment.updatedDate}</span>
                        </div>
                    </> : <div className={styles.handleCommentBox}>
                        <input value={props.commentInput} onChange={function (item) {
                            props.setCommentInput(item.target.value);
                        }} className={styles.handleCommentBox_input}/>
                        <div className={styles.buttonBox}>
                            <button className={styles.saveButton} onClick={
                                function () {
                                    props.setShowHandleComment(false);
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
