import React from 'react'
import Feed from './Feed/Feed'
import feedData from '../../data/feed.json';
import styles from './Feeds.module.css'

function Feeds({feeds}) {

  return (
    <div className={styles.container}>
      {feeds.map((data) => <Feed feed={data}/>)}
    </div>
  )
}

export default Feeds
