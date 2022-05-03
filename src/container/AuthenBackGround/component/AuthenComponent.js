import React from 'react'
import LoginContainer from '../../Login/LoginContainer';
import SignupContainer from '../../Signup/SignupContainer';
import styles from './styles.module.css';
function AuthenComponent(props) {
    return (
        <div className={styles.authen}>
            <div className={styles.authen_header}>
                <i className={"fa-solid fa-square-poll-vertical "+styles.authen_icon}></i>
                <p className={styles.authen_headding}>A.iSoft</p>
            </div>
            <div className={props.showSignup?styles.authen_body+" "+styles.show:styles.authen_body}>
                <div className={props.showSignup?styles.showBox+" "+styles.show:styles.showBox}>
                <LoginContainer setShowSignup={props.setShowSignup}/>
                <SignupContainer setShowSignup={props.setShowSignup}/>
                </div>
            </div>
        </div>
    )
}

export default AuthenComponent
