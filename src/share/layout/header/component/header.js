import styles from './header.module.css';
import ais from '../../../image/ais.png';
import { Link } from 'react-router-dom';
export default function HeaderComponent(props){
    return <div className={styles.header}>
        <div className={styles.buttonLogo}>
        <i className={"fa-solid fa-list " + styles.listicon}></i>
        </div>
        <Link to="/home">
            <div className={styles.buttonLogo}>
                <img className={styles.logo} src={ais}></img>
            </div>
        </Link>
        <div className={styles.buttonLogo+" "+styles.left}>
            <p className={styles.textButton}>Project</p><i className="fa-solid fa-angle-down"></i>
        </div>
        <div className={styles.buttonLogo+" "+styles.left}>
            <p className={styles.textButton}>Gần đây</p><i className="fa-solid fa-angle-down"></i>
        </div>
        <div className={styles.buttonLogo+" "+styles.left}>
            <p className={styles.textButton}>Đã đánh dấu sao</p><i className="fa-solid fa-angle-down"></i>
        </div>
        <div className={styles.buttonLogo+" "+styles.left} >
            <p className={styles.textButton}>Tạo mới</p>
        </div>
        <div className={styles.headerRight}>
            <div className={styles.search}>
                <input value={props.input} placeholder="Tìm kiếm" className={props.searchInputShow?styles.searchInput+" "+styles.show:styles.searchInput} onChange={props.handleInput}/>
                <button className={styles.searchButton} onClick={props.search}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className={styles.buttonLogo} >
                <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className={styles.buttonLogo} >
                <i className="fas fa-bell"></i>
            </div>
            <div className={styles.avatar}>
                NH
            </div>
        </div>
    </div>
}