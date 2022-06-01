import React, { memo, useCallback } from "react";
import GoogleLogin from "react-google-login";
import styles from './styles.module.css';
import gg from '../share/image/gg.jpg';
function HandleLogin() {
  const handleSuccess = useCallback(async (res) => {
    // create heanders include tokenGG send to server
    console.log(res.tokenId);
    
  }, []);

  const handleFailure = useCallback(() => {

  });

  return (
 
          <a href="https://trello-like-vip.herokuapp.com/oauth2/authorization/google?redirect_url=facebook.com">
            <button className={styles.login_ggButton}>
                <img className={styles.login_ggIcon} src={gg} />
                <p className={styles.login_ggButtonText}>Tiếp tục với google</p>
            </button>
          </a>

  );
}

export default memo(HandleLogin);
