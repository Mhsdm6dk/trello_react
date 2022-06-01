import React from 'react'
import CardCreatContainer from '../../CardCreate';
import CardDetailContainer from '../../CardDetail/CardDetailContainer';
import styles from './styles.module.css';
function CardComponent(props) {
    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <div className={styles.projectDetail_listTask}>
                <i className={"fa-solid fa-trash-can " + styles.deleteIcon} onClick={
                    () => props.deleteFunction()
                }></i>
                <h5 className={styles.listTaskName}>
                    {props.card?.listDTO?.title}
                </h5>
                {
                    props.card?.cardDTOList.map((card) => <div className={styles.taskBox} onClick={function () {
                        props.setCardDetailShow(card.id);
                    }}>
                        <p className={styles.taskName}>
                            {
                                card?.title
                            }
                        </p>
                        <div className={styles.commentCountBox}>
                            <i className="fa-solid fa-comment"></i>
                            <span className={styles.commentCount}>
                                {
                                    card?.countComment
                                }
                            </span>
                        </div>
                    </div>)
                }

                {
                    props.inputShow ? <div className={styles.inputForm}>
                        <div className={styles.inputBox}>
                            <input value={props.cardNameInput} onChange={(e) => {
                                props.setCardNameInput(e.target.value);
                            }} className={styles.input} autoFocus placeholder='Nhập tiêu đề cho thẻ này...' />
                        </div>
                        <div className={styles.buttonBox}>
                            <button className={styles.addCardButton} onClick={
                                () => {
                                    props.mutate();
                                }
                            }>
                                Thêm thẻ
                            </button>
                            <button className={styles.exitButton} onClick={
                                function () {
                                    props.setInputShow(false);
                                }
                            }>
                                <i className={"fa-solid fa-xmark " + styles.exitButton_icon}></i>
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
            <div style={{ flex: 1 }}>

            </div>
            {props.cardDetailShow && <CardDetailContainer id={props.cardDetailShow} setCardDetailShow={props.setCardDetailShow} />}
        </div>
    )
}

export default CardComponent
