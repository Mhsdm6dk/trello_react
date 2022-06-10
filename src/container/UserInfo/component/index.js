import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import styles from './styles.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
function UserInfoComponent({ }) {
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('user')))
    }, [])
    return (
        <div className={styles.userInfoBox}>
            <div className={styles.userInfo}>
                <div className={styles.formGroup} controlId="title">
                    <label>Họ và tên</label>
                    <div className={styles.inputBox}>
                        <input className={styles.formInput} required={true} placeholder="Nhập họ và tên" name="title" />
                    </div>
                </div>

                <div className={styles.formGroup} controlId="slug">
                    <label>Số điện thoại</label>
                    <div className={styles.inputBox}>
                        <input className={styles.formInput} required={true} placeholder="số điện thoại" name="slug" />
                    </div>
                </div>
                <div className={styles.formGroup} >
                    <label>Giới tính</label>
                    <div className={styles.inputBox}>
                        <select className={styles.formInput}>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                </div>
                <div className={styles.saveButtonBox}>
                    <button className={styles.saveButton}>
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoComponent
