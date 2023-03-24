import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  return (
    <div>
      <Comment name={'세종대왕'} comment={'안녕?'}/>
      <Comment name={'바이든'} comment={'hi'}/>
      <Comment name={'강호동'} comment={'리액트 공부하나?'}/>
    </div>
  )
}

export default CommentList
