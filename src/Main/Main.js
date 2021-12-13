import React from 'react'
import Feeds from './Feeds/Feeds'
import Nav from './Nav/Nav'
import SideBar from './SideBar/SideBar'
import TopStory from './TopStory/TopStory'
import feedData from '../data/feed.json'
import storyData from '../data/story.json'
import styles from './Main.module.css'

function Main() {
  const feeds = feedData;
  const stories = storyData;

  return (
    <div className={styles.container}>
      <Nav/>
      <TopStory stories = {stories}/>
      <div className={styles.main_container}>
        <Feeds feeds={feeds}/>
        <SideBar stories = {stories}/>
      </div>
    </div>
  )
}

export default Main
