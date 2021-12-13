import React from 'react'
import Recommend from './Recommend/Recommend'
import styles from './Recommends.module.css'

function Recommends() {
  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <h4 class={styles.title}>회원님을 위한 추천</h4>
        <button class={styles.spread_button}>모두 보기</button>
      </div>
      <li class={styles.list}>
        <Recommend/>
      </li>
    </div>
  )
}

export default Recommends
