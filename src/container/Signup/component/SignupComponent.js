import React from 'react'
import styles from '../../Login/component/styles.module.css';
import gg from '../../../share/image/gg.jpg';
function SignupComponent(props) {
    return (
        <div className={styles.login}>
            <h4 className={styles.login_headding}>Đăng ký cho tài khoản của bạn</h4>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} value={props.userNameInput} placeholder='Nhập email' onChange={
                    function(item){
                        props.setUserNameInput(item.target.value);
                    }
                }/>
            </div>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} type='password' value={props.passwordInput}  placeholder='Nhập mật khẩu' onChange={
                    function(item){
                        props.setPasswordInput(item.target.value);
                    }
                }/>
            </div>
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} type='password' value={props.passwordAgainInput} placeholder='Nhập lại mật khẩu' onChange={
                    function(item){
                        props.setPasswordAgainInput(item.target.value);
                    }
                }/>
            </div>
            {
                props.passwordInput!==props.passwordAgainInput?<p style={{
                    margin:"-10px 0 10px 0",
                    fontSize:"12px",
                    color:"red"
                }}>Nhập lại mật khẩu chưa đúng*</p>:<></>
            }
            <div className={styles.login_inputBox}>
                <input className={styles.login_input} type='number' value={props.telephoneInput} placeholder='Nhập số điện thoại' onChange={
                    function(item){
                        props.setTelephoneInput(item.target.value);
                    }
                }/>
            </div>
            <button className={styles.login_button} onClick={props.signup}>
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
