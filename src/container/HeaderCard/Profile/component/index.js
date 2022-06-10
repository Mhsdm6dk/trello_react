import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.css';
function ProfileComponent(props) {
    const history = useHistory();
    return (
        <div className={styles.ProfileCard}>
            <div className={styles.header}>
                <i className={"fa-solid fa-xmark " + styles.exitButton} onClick={
                    () => {
                        props.setShowProfile(false);
                    }
                }></i>
                <p>Tài khoản</p>
            </div>
            <div className={styles.body}>
                <div className={styles.infoBox}>
                    <div className={styles.avatarBox}>
                        NH
                    </div>
                    <div className={styles.emailBox}>
                        <div className={styles.name}>
                            Nguyễn Văn Hạnh
                        </div>
                        <div className={styles.email}>
                            hanh1452001@gmail.com
                        </div>
                    </div>
                </div>
                <div className={styles.listDiv}>
                    <Link to={'/profile'} className={styles.div} onClick={
                        ()=>props.setShowProfile(false)
                    }>
                        Hồ sơ và hiển thị
                    </Link>
                    <p className={styles.div}>
                        Hoạt động
                    </p>
                    <p className={styles.div}>
                        Thẻ
                    </p>
                    <p className={styles.div}>
                        Cài đặt
                    </p>
                </div>
                <div className={styles.listDiv}>
                    <p className={styles.div}>
                        Trợ giúp
                    </p>
                    <p className={styles.div}>
                        Phím tắt
                    </p>
                </div>
                <div className={styles.logout} onClick={
                    function () {
                        localStorage.clear();
                        history.push('/login');
                    }
                }>
                    <p className={styles.div}>
                        Đăng xuất
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
