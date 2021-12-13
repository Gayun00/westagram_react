import React from 'react'
import styles from './TopStoryItem.module.css'
// import 'src/Main/Main.module.css'

function TopStoryItem({story}) {
  return (
    <span class={styles.container}>
      <div class={styles.img_container, styles.profile_container}>
        <img class={styles.img ,styles.profile_img} src={story.profileImg} alt="story-img"/>
      </div>
      <div class="top-story__id">{story.profileId}
      </div>
    </span>
  )
}

export default TopStoryItem
