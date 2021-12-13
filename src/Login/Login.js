import React from 'react';
import styles from './Login.module.css';
import '../App.css'

function Login() {
  return (

    <>
    <div className={styles.container}>
      <h1 className={styles.logo}>Westagram</h1>
      <form action="" className={styles.form}>
        <div className={styles.input_wrapper}>
          <input type="text" className={styles.id}
            placeholder="  전화번호, 사용자 이름 또는 이메일"/>
          <input type="password" className={styles.password}
              placeholder="  비밀번호"/>
        </div>
        <button className={styles.login_button}>로그인</button>
        <p className={styles.notice, styles.hide}>아이디는 @를 포함하고, 비밀번호는 5글자 이상이어야 합니다.</p>
      </form>
      <div className={styles.forgot_password}>비밀번호를 잊으셨나요?</div>
    </div>
    </>


  )
}

export default Login
