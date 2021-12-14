import React, { useRef, useState } from 'react';
import styles from './Login.module.css';
import '../App.css'

function Login() {
  const idRef = useRef();
  const pwRef = useRef();
  const formRef = useRef();
  const buttonRef = useRef();
  const noticeRef = useRef();

  const [validState, setValidState] = useState();

  function handleInput() {
    const idInputVal = idRef.current.value;
    const pwInputVal = pwRef.current.value;
    const regex = new RegExp("@");
    const validId = regex.exec(idInputVal)
    if(validId && pwInputVal.length >= 5) {
      setValidState(true)
    } else {
      setValidState(false)
    }
  }

  return (

    <>
    <div className={styles.login}>
      <h1 className={styles.logo}>Westagram</h1>
      <form action="" className={styles.form} ref={formRef} onChange={handleInput}>
        <div className={styles.input}>
          <input type="text" className={styles.id} ref={idRef}
            placeholder="  전화번호, 사용자 이름 또는 이메일"/>
          <input type="password" className={styles.password} ref={pwRef}
              placeholder="  비밀번호"/>
        </div>
        <button className={styles.button} ref={buttonRef}>로그인</button>
        {validState ?'': <p className={styles.notice} ref={noticeRef}>아이디는 @를 포함하고, 비밀번호는 5글자 이상이어야 합니다.</p> }
      </form>
      <div className={styles.forgot_password}>비밀번호를 잊으셨나요?</div>
    </div>
    </>


  )
}

export default Login
