import React from 'react';
import styles from './TopStory.module.css';
// import storyData from '../../data/story.json'
import TopStoryItem from './TopStoryItem';

function TopStory({stories}) {


  return (
    <div className={styles.container}>
     {stories.map((data) => <TopStoryItem story = {data}/>)}
    </div>

  )
}

export default TopStory
