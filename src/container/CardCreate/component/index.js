import React from 'react'
import styles from './styles.module.css';
function CardCreateComponent({ mutate, showName, setShowName, nameInput, setNameInput }) {
    return (
        <div style={{ flexDirection: 'column' }} >
            <div className={styles.addCardBox}>
                {
                    showName ? <div className={styles.inputForm}>
                        <div className={styles.inputBox}>
                            <input value={nameInput} onChange={
                                (e) => {
                                    setNameInput(e.target.value);
                                }
                            } className={styles.input} autoFocus />
                        </div>
                        <div className={styles.buttonList}>
                            <div className={styles.addButton} onClick={() => {
                                mutate();
                            }}>
                                Thêm danh sách
                            </div>
                            <div className={styles.exitIconBox}>
                                <i className={"fa-solid fa-xmark " + styles.exitIcon} onClick={
                                    () => {
                                        setShowName(false);
                                    }
                                }></i>
                            </div>
                        </div>
                    </div> : <div className={styles.addButton1} onClick={() => {
                        setShowName(show => !show)
                    }}><i className={"fa-solid fa-plus " + styles.addCard_icon}></i>Thêm danh sách khác</div>
                }
            </div>
            <div style={{ flex: 1 }}>

            </div>
        </div>
    )
}

export default CardCreateComponent
