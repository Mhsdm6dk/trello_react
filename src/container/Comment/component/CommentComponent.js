import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";

let stompClient = null;
function CommentComponent(props) {

    function connect() {
        const socket = new SockJS('https://trello-like-vip.herokuapp.com/trello-stomp-endpoint');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ', frame);

            stompClient.subscribe('/topic/send-comment', function (data) {
                const notification = JSON.parse(data.body);
            });
        });
    }

    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
        }
    }

    function send() {
        if (stompClient) {
            const comment = {
                id:props.dataComment.id,
                userID: 1,
                cardID: props.idCard,
                createdDate: new Date(),
                updatedDate: new Date(),
                content: props.commentInput
            };
            stompClient.send('/ws/chat.sendComment', {}, JSON.stringify(comment));
        }
    }

    const date = props.dataComment ? new Date(props.dataComment.updatedDate) : new Date();

    return (
        <div className={styles.commentBox}>
            <div className={styles.avatarBox}>
                {props.dataComment.userID}
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
                                    connect();
                                    props.setShowHandleComment(true);
                                }
                            }>Chỉnh sửa</span> -{" "}
                            <span className={styles.commentDetailBox_feature}>Xóa</span>
                            <span
                                className={styles.commentDetailBox_feature}>   {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}</span>
                        </div>
                    </> : <div className={styles.handleCommentBox}>
                        <input value={props.commentInput} onChange={function (item) {
                            props.setCommentInput(item.target.value);
                        }} className={styles.handleCommentBox_input}/>
                        <div className={styles.buttonBox}>
                            <button className={styles.saveButton} onClick={
                                async function () {
                                    props.setShowHandleComment(false);
                                    await send();
                                    await disconnect();
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
