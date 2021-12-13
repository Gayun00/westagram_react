import React from 'react'
import Story from './Story/Story'
import styles from './Stories.module.css'

function Stories({stories}) {
  return (
    <div class={styles.story}>
      <div class={styles.header}>
        <h4 class={styles.title}>스토리</h4>
        <button class={styles.spread_button}>모두 보기</button>
      </div>
      <ul class={styles.list, styles.collapse}>
        {stories.map((story) => <Story story = {story}/>)}
      </ul>
    </div>
  )
}

export default Stories
