import React from 'react'
import styles from './styles.module.css';
function MemberComponent(props) {
    return (
        <div className={styles.memberPage}>
            <div className={styles.memberBox}>
                <div className={styles.memberNavbarBox}>
                    <p className={styles.memberNabar_content}>Thành viên của các bảng Không gian làm việc</p>
                    <div className={styles.workspaceNameBox}>
                        <strong>
                            Các thành viên A.iSoft workspace
                        </strong>
                    </div>
                </div>
                <div className={styles.memberBody}>
                    <h2 className={styles.memberBody_heading}>
                        Các thành viên Không gian làm việc (1)
                    </h2>
                    <p className={styles.memberBody_describes}>
                        Các thành viên trong Không gian làm việc có thể xem và tham gia tất cả các bảng Không gian làm việc hiển thị và tạo ra các bảng mới trong Không gian làm việc.
                    </p>
                    <div className={styles.memberBody_line}>

                    </div>
                    <h2 className={styles.memberBody_heading}>
                        Mời các thành viên tham gia cùng bạn
                    </h2>

                    <p className={styles.memberBody_describes}>
                        Bất kỳ ai có liên kết duy nhất đều có thể tham gia Không gian làm việc này, với 3 bảng. Bạn sẽ bị tính phí cho mỗi thành viên được thêm vào. Bạn có thể tắt và tạo liên kết mới cho Không gian làm việc này bất kỳ lúc nào.
                    </p>

                    <div className={styles.memberBody_line}>

                    </div>
                    <div className={styles.searchBox}>
                        <input className={styles.searchNameInput} placeholder="Lọc theo tên" />
                        <div style={{ position: "relative" }}>
                            <div className={styles.addMemberButton} onClick={
                                () => props.setShowSearch(show => !show)
                            }>
                                <i className={"fa-solid fa-user-plus " + styles.addMemberIcon}></i>
                                Mời các thành viên trong A.iSoft
                            </div>
                            {
                                props.showSearch ? <div className={styles.resultBox}>
                                    <div className={styles.resultBox_header}>
                                        Thêm thành viên
                                        <i className={"fa-solid fa-xmark " + styles.exitIcon} onClick={() => props.setShowSearch(false)}></i>

                                    </div>
                                    <div className={styles.resultBox_body}>
                                        <div className={styles.resultBoxTitle}>
                                            <i className={"fa-regular fa-user " + styles.resultBoxTitle_icon}></i>Nhập Địa chỉ Email
                                        </div>
                                    </div>
                                    <input onChange={props.nhap} placeholder="Email" autoFocus className={styles.resultBox_search} />
                                    <div className={styles.listUserBox}>
                                        {
                                            props.listSearchUser.map((user, index) => <div key={index} className={styles.memberElementBox}>
                                                <div className={styles.memberNameBox}>
                                                    <div className={styles.avatarBox}>
                                                        NH
                                                    </div>
                                                    <div className={styles.emailBox}>
                                                        <div className={styles.name}>
                                                            {user?.name}
                                                        </div>
                                                        <div className={styles.email}>
                                                            {user?.email}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.buttonList}>
                                                    <div className={styles.exitButton}>
                                                        thêm
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>

                                    
                                    <div className={styles.addButton}>
                                        Thêm vào A.iSoft workspace
                                    </div>
                                </div> : <></>
                            }
                        </div>
                    </div>
                    <div className={styles.listMember}>
                        {
                            props.listUser.map((user, index) => <div key={index} className={styles.memberElementBox}>
                                <div className={styles.memberNameBox}>
                                    <div className={styles.avatarBox}>
                                        NH
                                    </div>
                                    <div className={styles.emailBox}>
                                        <div className={styles.name}>
                                            {user?.name}
                                        </div>
                                        <div className={styles.email}>
                                            {user?.email}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.buttonList}>
                                    <div className={styles.exitButton}>
                                        Rời đi
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberComponent
