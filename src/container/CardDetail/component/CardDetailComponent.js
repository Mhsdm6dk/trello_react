import React from 'react'
import CommentContainer from '../../Comment/CommentContainer';
import styles from './styles.module.css';
function CardDetailComponent(props) {
    return (
        <div className={styles.cardDetail}>
            <div className={styles.cardBox}>
                <div className={styles.cardBox_header}>
                    <i className={"fa-solid fa-xmark " + styles.exitIcon} onClick={function () {
                        props.setCardDetailShow('');
                    }}></i>
                    <i className={"fa-solid fa-credit-card " + styles.cardBox_headerIcon}></i>
                    <div className={styles.cardNameBox}>
                        <h3 className={styles.cardNameBox_name}>
                            {
                                props.cardData?.cardDTO?.title
                            }
                        </h3>
                        <p className={styles.cardNameBox_describes}>
                            trong danh sách Cần làm
                        </p>
                    </div>
                </div>
                <div className={styles.cardBox_body}>
                    <div className={styles.cardBox_bodyDetail}>
                        <div className={styles.cardBox_describesBox}>
                            <i className={"fa-solid fa-list " + styles.cardBox_describesBox_icon}></i>
                            <h3 className={styles.cardBox_describesBox_text}>
                                Mô tả
                            </h3>
                            <div className={styles.handleButton} onClick={() => props.setShowDescriptionInput(true)}>
                                Chỉnh sửa
                            </div>
                        </div>

                        <div className={styles.cardBox_describesInputDiv}>
                            <div style={{ width: "26px" }}></div>
                            {!props.showDescriptionInput ? <p className={styles.cardDescribes}>{props.cardData?.cardDTO?.description}</p> :
                                <div style={{width:"100%"}}>
                                    <div className={styles.cardBox_describesInputBox}>
                                        <input placeholder='Thêm mô tả chi tiết hơn...' autoFocus value={props.descriptionInput} onChange={(e) => props.setDescriptionInput(e.target.value)} className={styles.cardBox_describesInput} />

                                    </div>
                                    <div className={styles.buttonList}>
                                        <div className={styles.saveButton} onClick={()=>props.updateCard()}>
                                            Lưu
                                        </div>
                                        <div className={styles.cancleButton} onClick={()=>props.setShowDescriptionInput(false)}>
                                            Hủy
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>


                        <div className={styles.cardBox_describesBox}>
                            <i className={"fa-solid fa-list " + styles.cardBox_describesBox_icon}></i>
                            <h3 className={styles.cardBox_describesBox_text}>
                                Comment
                            </h3>
                        </div>
                        <div className={styles.commentInputDiv}>
                            <div className={styles.commentAvatarBox}>
                                NH
                            </div>
                            <div className={styles.commentInputBox}>
                                <input placeholder='Viết bình luận...' className={styles.commentInput} />
                            </div>
                        </div>
                        <CommentContainer />
                    </div>
                    <div className={styles.cardBox_bodyNavbar}>
                        <h6 className={styles.navbar_hedding}>Thêm vào thẻ</h6>
                        <div style={{ position: "relative" }}>
                            <div className={styles.navbar_feature} onClick={() => {
                                props.setMemberShow(show => !show);
                            }}>
                                <i className={"fa-regular fa-user " + styles.navbar_featureIcon}></i>
                                <span className={styles.navbar_featureName}>Thành viên</span>

                            </div>
                            {
                                props.memberShow ? <div className={styles.listMember}>
                                    <div className={styles.listMember_header}>
                                        <i className={"fa-solid fa-xmark " + styles.memberExitIcon} onClick={function () {
                                            props.setMemberShow(false);
                                        }}></i>
                                        Thành viên
                                    </div>
                                    <div className={styles.listMember_body}>

                                    </div>
                                </div> : <></>
                            }
                        </div>
                        <div style={{ position: "relative" }}>
                            <div className={styles.navbar_feature} onClick={() => {
                                props.setMoveShow(show => !show);
                            }}>
                                <i className={"fa-solid fa-arrow-right " + styles.navbar_featureIcon}></i>
                                <span className={styles.navbar_featureName}>Di chuyển</span>
                            </div>
                            {
                                props.moveShow ? <div className={styles.listMember}>
                                    <div className={styles.listMember_header}>
                                        <i className={"fa-solid fa-xmark " + styles.memberExitIcon} onClick={function () {
                                            props.setMoveShow(false);
                                        }}></i>
                                        Di chuyển thẻ
                                    </div>
                                    <div className={styles.listMember_body}>
                                        <p className={styles.listMember_content}>
                                            Chọn đích đến
                                        </p>
                                        {
                                            props.projectData?.list.map(list => <div className={styles.listChoose} onClick={
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
