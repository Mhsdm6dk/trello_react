import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
function NavbarComponent(props) {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_header}>
                <div className={styles.navbar_headerContent}>
                    <div className={styles.navbar_headerLogo}><span style={{position:"relative",top:"5px"}}>A</span></div>
                    <p className={styles.navbar_headerText}>
                        A.iSoft workspace
                    </p>
                </div>
                <i className={"fa-solid fa-angle-left "+styles.icon} onClick={
                    function(){
                        props.setShowNavbar(false);
                    }
                }></i>
            </div>
            <div className={styles.navbar_body}>
                <div className={styles.navbar_ChooseList}>
                    <Link to={'/project'} className={props.choose_chooseList=='Project'?styles.navbar_Choose+" "+styles.choose:styles.navbar_Choose} onClick={
                        function(){
                            props.setChoose_chooseList("Project")
                        }
                    }>
                        <i className={"fa-solid fa-square-poll-vertical "+styles.iconChooseList}></i>
                        <p className={styles.navbar_ChooseListText}>Project</p>
                    </Link>
                    <Link to={'/member'} className={props.choose_chooseList=='member'?styles.navbar_Choose+" "+styles.choose:styles.navbar_Choose} onClick={
                        function(){
                            props.setChoose_chooseList("member")
                        }
                    }>
                        <i className={"fa-regular fa-user "+styles.iconChooseList}></i>
                        <p className={styles.navbar_ChooseListText}>Thành viên</p>
                    </Link>
                    <Link to='/setting' className={props.choose_chooseList=='setting'?styles.navbar_Choose+" "+styles.choose:styles.navbar_Choose} onClick={
                        function(){
                            props.setChoose_chooseList("setting")
                        }
                    }>
                        <i className={"fa-solid fa-gear "+styles.iconChooseList}></i>
                        <p className={styles.navbar_ChooseListText}>Cài đặt</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent
