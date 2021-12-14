import React from 'react'
import styles from './Comment.module.css'

function Comment({comment}) {
console.log(comment)
  return (
    <>
    <ul class={styles.comment}>
      {/* <div class={styles.comment_item}> */}
        <p class={styles.comment_id}>{comment.commentId}</p>
        <p class={styles.comment_text}>{comment.commentText}</p>
      {/* </div> */}
      <button class={styles.delete_button}>
        <i class="fas fa-times"></i>
      </button>
    </ul>
    </>
  )
}

export default Comment
