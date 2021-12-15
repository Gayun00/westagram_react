import React, { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import styles from './Comment.module.css'

function Comment({comment}) {

  const [commentState, setCommentState] = useState({
    commentId: comment.commentId,
    commentText: comment.commentText
  });

  useEffect(() => {
    setCommentState(comment)
    console.log(commentState)
  }, []);

  return (
    <ul class={styles.comment}>
      <span class={styles.container}>
        <p class={styles.id}>{comment.commentId}</p>
        <span class={styles.text}>{comment.commentText}</span>
      </span>
      <button class={styles.delete}>
        <TiDelete/>
      </button>
    </ul>
  )
}

export default Comment
