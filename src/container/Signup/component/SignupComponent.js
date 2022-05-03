import React from 'react'
import styles from '../../Login/component/styles.module.css';
import gg from '../../../share/image/gg.jpg';
function SignupComponent(props) {
    return (
        <div className={styles.login}>
            <h4 className={styles.login_headding}>Đăng ký cho tài khoản của bạn</h4>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} placeholder='Nhập email'>

                </input>
            </div>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} placeholder='Nhập mật khẩu'>

                </input>
            </div>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} placeholder='Nhập lại mật khẩu'>

                </input>
            </div>
            <button className={styles.login_button}>
                Đăng ký
            </button>
            <p className={styles.login_or}>Hoặc</p>
            <button className={styles.login_ggButton}>
                <img className={styles.login_ggIcon} src={gg} />
                <p className={styles.login_ggButtonText}>Tiếp tục với google</p>
            </button>
            <div className={styles.line}>

            </div>
            <p className={styles.signup} onClick={
                function(){
                    props.setShowSignup(false);
                }
            }>Bạn đã có tài khoản? Đăng nhập</p>
        </div>
    )
}

export default SignupComponent
