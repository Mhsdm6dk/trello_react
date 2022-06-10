import React, {useEffect, useState} from 'react'
import CommentContainer from '../../Comment/CommentContainer';
import styles from './styles.module.css';
import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import axiosConfig from "../../../share/axiosConfig";

let stompClient = null;

function CardDetailComponent(props) {
    const [contentComment, setContentComment] = useState('');
    let dataComment = props.cardData ? props.cardData.commentDTOList : [];
    const [dataChange, setDataChange] = useState(dataComment);
    const [user, setUser] = useState({});

    const loadComment = () => {
        axiosConfig.get(`/api/user/comments/card=${props.idCard}`)
            .then((data) => {
                setDataChange(data);
            })
    }


    const loadToken = () => {
        axiosConfig.get(`/api/user/token`)
            .then((data) => {
                setUser(data);
            })
    }

    useEffect(() => {
        connect();
        loadToken();
    }, []);

    useEffect(() => {
        setDataChange(dataComment);
    }, [dataComment]);


    function connect() {
        const socket = new SockJS('https://trello-like-vip.herokuapp.com/trello-stomp-endpoint');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ', frame);

            stompClient.subscribe('/topic/send-comment', function (data) {
                const notification = JSON.parse(data.body);
                loadComment();
            });

            stompClient.subscribe('/topic/delete-comment', function () {
                loadComment();
            });

        });
    }

    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
        }
    }

    function send(id, content,createdDate, updatedDate) {
        if (stompClient) {
            const comment = {
                id : id,
                userID: user.id,
                cardID: props.idCard,
                createdDate: createdDate,
                updatedDate: updatedDate,
                content: content
            };
            stompClient.send('/ws/chat.sendComment', {}, JSON.stringify(comment));
            setContentComment('')
        }
    }

    function deleteComment(id,content) {
        if (stompClient) {
            const comment = {
                id : id,
                userID: user.id,
                cardID: props.idCard,
                content: content
            };
            stompClient.send('/ws/chat.deleteComment', {}, JSON.stringify(comment));
        }
    }

    return (
        <div className={styles.cardDetail}>
            <div className={styles.cardBox}>
                <div className={styles.cardBox_header}>
                    <i className={"fa-solid fa-xmark " + styles.exitIcon} onClick={function () {
                        props.setCardDetailShow('');
                        disconnect();
                    }}/>
                    <i className={"fa-solid fa-credit-card " + styles.cardBox_headerIcon}/>
                    <div className={styles.cardNameBox}>
                        <h3 className={styles.cardNameBox_name}>
                            {
                                props.cardData?.cardDTO?.title
                            }
                        </h3>
                        <p className={styles.cardNameBox_describes}>
                            Trong danh sách Cần làm
                        </p>
                    </div>
                </div>
                <div className={styles.cardBox_body}>
                    <div className={styles.cardBox_bodyDetail}>
                        <div className={styles.cardBox_describesBox}>
                            <i className={"fa-solid fa-list " + styles.cardBox_describesBox_icon}/>
                            <h3 className={styles.cardBox_describesBox_text}>
                                Mô tả
                            </h3>
                            <div className={styles.handleButton} onClick={() => props.setShowDescriptionInput(true)}>
                                Chỉnh sửa
                            </div>
                        </div>

                        <div className={styles.cardBox_describesInputDiv}>
                            <div style={{width: "26px"}}></div>
                            {!props.showDescriptionInput ?
                                <p className={styles.cardDescribes}>{props.cardData?.cardDTO?.description}</p> :
                                <div style={{width: "100%"}}>
                                    <div className={styles.cardBox_describesInputBox}>
                                        <input placeholder='Thêm mô tả chi tiết hơn...' autoFocus
                                               value={props.descriptionInput}
                                               onChange={(e) => props.setDescriptionInput(e.target.value)}
                                               className={styles.cardBox_describesInput}/>

                                    </div>
                                    <div className={styles.buttonList}>
                                        <div className={styles.saveButton} onClick={() => props.updateCard()}>
                                            Lưu
                                        </div>
                                        <div className={styles.cancleButton}
                                             onClick={() => props.setShowDescriptionInput(false)}>
                                            Hủy
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>


                        <div className={styles.cardBox_describesBox}>
                            <i className={"fa-solid fa-list " + styles.cardBox_describesBox_icon}/>
                            <h3 className={styles.cardBox_describesBox_text}>
                                Comment
                            </h3>
                        </div>
                        <div className={styles.commentInputDiv}>
                            <div className={styles.commentAvatarBox}>
                                {user.name ? user.name.substring(0, 3) : ''}
                            </div>
                            <div className={styles.commentInputBox}>
                                <input placeholder='Viết bình luận...' className={styles.commentInput} value={contentComment}
                                       onChange={function (item) {
                                           setContentComment(item.target.value);
                                       }}/>
                                <button className={styles.saveButton} onClick={() => send(null, contentComment, new Date(), new Date())}>
                                    Comment
                                </button>
                            </div>
                        </div>
                        {dataChange.map((comment) => {
                            return (<CommentContainer comment={comment} idUser={user.id} idCard={props.idCard} send={send}
                                                      setContentComment={setContentComment} deleteComment={deleteComment}/>)
                        })
                        }
                    </div>
                    <div className={styles.cardBox_bodyNavbar}>
                        <h6 className={styles.navbar_hedding}>Thêm vào thẻ</h6>
                        <div style={{position: "relative"}}>
                            <div className={styles.navbar_feature} onClick={() => {
                                props.setMemberShow(show => !show);
                            }}>
                                <i className={"fa-regular fa-user " + styles.navbar_featureIcon}/>
                                <span className={styles.navbar_featureName}>Thành viên</span>

                            </div>
                            {
                                props.memberShow ? <div className={styles.listMember}>
                                    <div className={styles.listMember_header}>
                                        <i className={"fa-solid fa-xmark " + styles.memberExitIcon}
                                           onClick={function () {
                                               props.setMemberShow(false);
                                           }}/>
                                        Thành viên
                                    </div>
                                    <div className={styles.listMember_body}>

                                    </div>
                                </div> : <></>
                            }
                        </div>
                        <div style={{position: "relative"}}>
                            <div className={styles.navbar_feature} onClick={() => {
                                props.setMoveShow(show => !show);
                            }}>
                                <i className={"fa-solid fa-arrow-right " + styles.navbar_featureIcon}></i>
                                <span className={styles.navbar_featureName}>Di chuyển</span>
                            </div>
                            {
                                props.moveShow ? <div className={styles.listMember}>
                                    <div className={styles.listMember_header}>
                                        <i className={"fa-solid fa-xmark " + styles.memberExitIcon}
                                           onClick={function () {
                                               props.setMoveShow(false);
                                           }}></i>
                                        Di chuyển thẻ
                                    </div>
                                    <div className={styles.listMember_body}>
                                        <p className={styles.listMember_content}>
                                            Chọn đích đến
                                        </p>
                                        {
                                            props.projectData?.list.map(list =>
                                                <div className={styles.listChoose}
                                                     onClick={
                                                         () => {
                                                             props.moveCard(list?.listDTO?.id)
                                                         }
                                                     }>
                                                    {
                                                        list?.listDTO?.title
                                                    }
                                                </div>)
                                        }
                                    </div>
                                </div> : <></>
                            }
                        </div>
                        <div className={styles.navbar_feature} onClick={props.deleteCard}>
                            <i className={"fa-solid fa-trash-can " + styles.navbar_featureIcon}></i>
                            <span className={styles.navbar_featureName}>Xóa</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardDetailComponent
