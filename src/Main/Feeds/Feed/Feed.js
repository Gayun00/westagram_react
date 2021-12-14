import React from 'react'
import Comment from './Comment/Comment';
import styles from './Feed.module.css'
import { BsSuitHeart } from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import { FiShare2 } from 'react-icons/fi'
import { FaRegCommentDots } from 'react-icons/fa'

function Feed({feed}) {
  console.log(feed)
  function handleTextContent(text) {
    if(text.length > 30) {
        text = text.slice(0, 30);
        return(
          <>
            <p>{text}</p>
            <button class={styles.feed_more_text}>...더보기</button>
          </>
        )
    } else {
        return text;
    }

}
  return (
    <div>
      <section class={styles.header}>
        <span class={styles.uploader}>
          <span class={styles.header_img_container, styles.profile_container}>
            <img class={styles.header_img, styles.profile_img} src={feed.profileImg} alt=""/>
          </span>
          <span class={styles.header_id}>{feed.feedId}
          </span>
        </span>
        <button class={styles.header_button}>
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </section>
      <section class={styles.feed_img_container}>
        <img src={feed.imgContent} alt="" class={styles.img_content}/>
      </section>
      <section class={styles.contents_wrap}>
        <div class={styles.button_container}>
          <span class="feed__buttons1">
            <button class="feed__button">
              <BsSuitHeart/>
            </button>
            <button class="feed__button">
              <FaRegCommentDots/>
            </button>
            <button class="feed__button">
              <FiShare2/>
            </button>
          </span>
          <span class="feed__buttons2">
            <button class="feed__button">
              <BsBookmark/>
            </button>
          </span>
        </div>
        <div class={styles.people_who_like}>
          <img src="images/profile-img2.jpg" alt="" class={styles.people_who_like_img}/>
          <p class={styles.people_who_like_comment} data-num="">{feed.likesCount[0]}님 외 {feed.likesCount.length}명이 좋아합니다.</p>
        </div>
        <div class={styles.textContent}>{handleTextContent(feed.textContent)}</div>
          <li class={styles.comments}>
            {feed.comment.map((com) => <Comment comment={com}/>)}
          </li>
        </section>
      <form class={styles.comment_input}>
        <input type="text" placeholder=" 댓글 달기..." name="" id="" class={styles.comment_input_text}/>
        <button class={styles.comment_input_button}>게시</button>
      </form>
    </div>
  )
}

export default Feed
