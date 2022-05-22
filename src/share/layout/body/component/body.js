import React from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MemberContainer from '../../../../container/Member/MemberContainer';
import ProjectDetailContainer from '../../../../container/ProjectDetail/ProjectDetailContainer';
import ProjectListContainer from '../../../../container/ProjectList/ProjectListContainer';
import NavbarContainer from '../../navbar/navbar';
import styles from './body.module.css';
function BodyComponent(props) {
    return (
        <div className={styles.body}>
            <div className={styles.navbarBox}>
                {
                    props.showNavbar?<NavbarContainer setShowNavbar={props.setShowNavbar}/>:<div className={styles.hiddenNavbar}>
                        <i className={"fa-solid fa-angle-right "+styles.navbarIcon} onClick={
                            function(){
                                props.setShowNavbar(true);
                            }
                        }></i> 
                    </div>
                }
            </div>
            <div className={styles.showBox}>
                <div className={styles.body_header}>
                    <div className={styles.body_headerContent}>
                        <div className={styles.body_headerLogo}>
                            A
                        </div>
                        <p className={styles.body_headerText}>
                        A.iSoft workspace
                        <br/>
                        <span className={styles.body_headerIconText}><i className={"fa-solid fa-lock "+styles.body_headerIcon}></i>Riêng tư</span>
                        </p>
                    </div>
                </div>
                <div className={styles.body_body}>
                    <Switch>
                        <Route path='/member'>
                            <MemberContainer/>
                        </Route>
                        <Route path='/setting'>
                            <div>st</div>
                        </Route>
                        <Route path='/projectDetail/:id'>
                            <ProjectDetailContainer/>
                        </Route>
                        <Route path='*'>
                            <ProjectListContainer/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default BodyComponent
