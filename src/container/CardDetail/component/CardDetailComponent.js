import React, {useEffect, useState} from 'react'
import CommentContainer from '../../Comment/CommentContainer';
import styles from './styles.module.css';
import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";

let stompClient = null;
function CardDetailComponent(props) {
    const [contentComment, setContentComment] = useState('');
    let dataComment = props.cardData? props.cardData.commentDTOList : [];

    useEffect( () => {
        connect();
    }, []);


    function connect() {
        const socket = new SockJS('http://localhost:9090/trello-stomp-endpoint');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ',frame);

            stompClient.subscribe('/topic/send-comment',function (data) {
                const notification = JSON.parse(data.body);
                console.log(notification);
                dataComment = [...dataComment,notification];
                console.log(dataComment);
            });
        });
    }

    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
        }
    }

    function send() {
        if(stompClient){
            const comment = {
                userID: 1,
                cardID: props.idCard,
                createdDate: new Date(),
                updatedDate: new Date(),
                content: contentComment
            };
            stompClient.send('/ws/chat.sendComment', {}, JSON.stringify(comment));
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
                        </div>

                        <div className={styles.cardBox_describesInputDiv}>
                            <div style={{width: "26px"}}/>
                            {props.cardData?.cardDTO?.description ?
                                <p className={styles.cardDescribes}>{props.cardData?.cardDTO?.description}</p> :

                                <div className={styles.cardBox_describesInputBox}>
                                    <input placeholder='Thêm mô tả chi tiết hơn...'
                                           className={styles.cardBox_describesInput}/>
                                </div>}
                        </div>


                        <div className={styles.cardBox_describesBox}>
                            <i className={"fa-solid fa-list " + styles.cardBox_describesBox_icon}/>
                            <h3 className={styles.cardBox_describesBox_text}>
                                Comment
                            </h3>
                        </div>
                        <div className={styles.commentInputDiv}>
                            <div className={styles.commentAvatarBox}>
                                NH
                            </div>
                            <div className={styles.commentInputBox}>
                                <input placeholder='Viết bình luận...' className={styles.commentInput}
                                       onChange={function (item) {
                                           setContentComment(item.target.value);
                                       }}/>
                                <button className={styles.saveButton} onClick={() => send()}>
                                    Lưu
                                </button>
                            </div>
                        </div>
                        { dataComment.map((comment) => {
                                return (<CommentContainer comment={comment}/>)
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
                        <div className={styles.navbar_feature}>
                            <i className={"fa-solid fa-arrow-right " + styles.navbar_featureIcon}/>
                            <span className={styles.navbar_featureName}>Di chuyển</span>
                        </div>
                        <div className={styles.navbar_feature}>
                            <i className={"fa-solid fa-trash-can " + styles.navbar_featureIcon}/>
                            <span className={styles.navbar_featureName}>Xóa</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardDetailComponent
