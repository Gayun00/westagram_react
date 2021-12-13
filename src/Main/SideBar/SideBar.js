import React from 'react'
import Recommends from './Recommends/Recommends'
import Stories from './Stories/Stories'
import styles from './SideBar.module.css'

function SideBar({stories}) {
  return (
    <div className={styles.container}>
      <Stories stories={stories}/>
      <Recommends/>
    </div>
  )
}

export default SideBar
