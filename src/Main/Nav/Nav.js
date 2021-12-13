import React from 'react'
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav>
    <span className={styles.logo_wrap}>
        <span className={styles.logo_icon}>
            <i className="fab fa-instagram"></i>
        </span>
        <span className={styles.logo_text}>Instagram</span>
    </span>
    <span className={styles.search}>
        <input type="text" name="search" class={styles.input} placeholder="              🔎검색"/>
        <div className={styles.search_result_container, styles.hide}>
            <div className="box"></div>
            <ul className={styles.search_result_list}>
              {/* search result */}
            </ul>
        </div>
    </span>
    <span className={styles.button_container}>
        <button>
            <img className={styles.button_img} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore"/>
        </button>
        <button>
            <img className={styles.button_img} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="like"/>
        </button>
        <button>
            <img className={styles.button_img} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" id="my__img" alt="my"/>
        </button>
        <ul className={styles.my, styles.hide}>
            <div className={styles.my_ballooon}></div>
            <li className={styles.my_item}>
                <i className="far fa-user-circle"></i>
                <p className={styles.my_item_text}>프로필</p>
            </li>
            <li className={styles.my_item}>
                <i className="far fa-bookmark"></i>
                <p className={styles.my_item_text}>저장됨</p>
            </li>
            <li className={styles.my_item}>
                <i className="fas fa-cog"></i>
                <p className={styles.my_item_text}>설정</p>
            </li>
            <div className={styles.my_logout}>로그아웃</div>
        </ul>
    </span>
</nav>
  )
}

export default Nav
