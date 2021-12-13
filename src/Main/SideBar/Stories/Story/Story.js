import React from 'react'
import styles from './Story.module.css'

function Story({story}) {
  // console.log(story)
  return (
    <li class={styles.item}>
      <span class={styles.img_container, styles.profile_container}>
        <img src={story.profileImg} alt="story-profile-img" class={styles.img, styles.profile_img}/>
      </span>
      <span class={styles.text}>
        <p class={styles.id}>{story.profileId}</p>
        {/* <p class="story__item--time">{calculateDateGap(i.uploadDate)}일 전</p> */}
      </span>
    </li>
  )
}

export default Story
