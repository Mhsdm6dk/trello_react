import React from 'react'
import styles from './styles.module.css';
import gg from '../../../share/image/gg.jpg';
function LoginComponent(props) {
    return (
        <div className={styles.login}>
            <h4 className={styles.login_headding}>Đăng nhập vào A.iSoft</h4>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} placeholder='Nhập email'>

                </input>
            </div>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} placeholder='Nhập mật khẩu'>

                </input>
            </div>
            <button className={styles.login_button}>
                Đăng nhập
            </button>
            <p className={styles.login_or}>Hoặc</p>
            <button className={styles.login_ggButton}>
                <img className={styles.login_ggIcon} src={gg}/>
                <p className={styles.login_ggButtonText}>Tiếp tục với google</p>
            </button>
            <div className={styles.line}>

            </div>
            <p className={styles.signup} onClick={
                function(){
                    props.setShowSignup(true)
                }
            }>Đăng ký tài khoản</p>
        </div>
    )
}

export default LoginComponent
