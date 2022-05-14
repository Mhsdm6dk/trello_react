import React from 'react'
import styles from './styles.module.css';
import gg from '../../../share/image/gg.jpg';
import GoogleLogin from '../../../component/GoogleLogin';
function LoginComponent(props) {
    return (
        <div className={styles.login}>
            <h4 className={styles.login_headding}>Đăng nhập vào A.iSoft</h4>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} value={props.userNameInput} placeholder='Nhập email' onChange={
                    function(item){
                        props.setUserNameInput(item.target.value);
                    }
                }/>
            </div>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} type='password' value={props.passwordInput} placeholder='Nhập mật khẩu' onChange={
                    function(item){
                        props.setPasswordInput(item.target.value);
                    }
                }/>
            </div>
            <button className={styles.login_button} onClick={props.login}>
                Đăng nhập
            </button>
            <p className={styles.login_or}>Hoặc</p>
            <GoogleLogin/>
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
