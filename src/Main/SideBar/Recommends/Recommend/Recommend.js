import React from 'react'
import styles from './Recommend.module.css'

function Recommend() {
  return (
    <ul class={styles.item}>
      <span class={styles.profile}>
        <img src="images/profile-img2.jpg" alt="" class={styles.img}/>
        <span class={styles.text}>
          <p class={styles.id}>bysle_990</p>
          <p class={styles.follower}>this_this외 2명이 팔로우</p>
        </span>
      </span>
      <button class={styles.follow_button}>팔로우</button>
    </ul>
  )
}

export default Recommend
