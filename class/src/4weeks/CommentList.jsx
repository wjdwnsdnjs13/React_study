import React from 'react';
import Comment from './Comment';
const comments = [
  {
    name: 'kang',
    comment: 'hi',
  },
  {
    name: 'you',
    comment: 'jsp',
  },
  {
    name: 'sea',
    comment: 'wow',
  },
]

const CommentList = (props) => {
  return (
    <div>
      {comments.map(comment => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  )
}

export default CommentList
