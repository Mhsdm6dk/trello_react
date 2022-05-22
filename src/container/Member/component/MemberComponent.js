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
                </div>
            </div>
        </div>
    )
}

export default MemberComponent
