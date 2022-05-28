import React from 'react'
import styles from './styles.module.css';
import project from '../../../share/image/project.svg';
function CreateProjectComponent(props) {
    const arrayColor = ['black', '#0079bf', '#d29034', '#519839', '#b04632', '#89609e'];
    return (
        <div className={styles.createForm}>
            <div className={styles.createForm_header}>
                Tạo project
                <i className={"fa-solid fa-xmark " + styles.createForm_headerIcon} onClick={
                    function () {
                        props.setCreateFormShow(false);
                    }
                }></i>
            </div>
            <div className={styles.createForm_body}>
                <div className={styles.backgroundShow} style={{ background: arrayColor[props.colorChoose] }}>
                    <img className={styles.project} src={project} />
                </div>
                <h5 className={styles.headding}>Phông nền</h5>
                <div className={styles.backgroundChoose}>
                    {arrayColor.map((color, index) => {
                        return <div className={styles.backgroundChoose_colorBox}>
                            <div className={styles.backgroundChoose_color} style={{ background: color }} onClick={
                                function () {
                                    props.setColorChoose(index);
                                }
                            }>
                                {
                                    index == props.colorChoose ? <i className={"fa-solid fa-check " + styles.backgroundChoose_icon}></i> : <></>
                                }
                            </div>
                        </div>
                    })}
                </div>
                <h5 className={styles.headding2}>Tiêu đề project</h5>
                <div className={styles.createForm_inputNameBox}>
                    <input value={props.nameInput} onChange={
                        function (item) {
                            props.setNameInput(item.target.value);
                        }
                    } className={styles.createForm_inputName}>

                    </input>
                </div>
                <button className={props.nameInput != '' ? styles.createForm_body_button : styles.createForm_body_button + " " + styles.block} onClick={() => {
                    props.mutation.mutate()
                }}>
                    Tạo mới
                </button>
            </div>

        </div>
    )
}

export default CreateProjectComponent
