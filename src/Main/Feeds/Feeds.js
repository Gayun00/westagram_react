import React, { useEffect, useState } from 'react'
import Feed from './Feed/Feed'
import feedsData from '../../data/feed.json';
import styles from './Feeds.module.css'

function Feeds() {

  const [feedsState, setFeedsState] = useState([]);

  useEffect(() => {
    setFeedsState(feedsData)
  }, [])

  // const feeds = feedData;

  return (
    <div className={styles.container}>
      {feedsState.map((data) => <Feed feed = {data}/>)}
    </div>
  )
}

export default Feeds
