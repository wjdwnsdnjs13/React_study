import React, { useEffect, useState } from 'react'
import CommentList from './CommentList'

const Main0324 = () => {
  let cnt = 99;
  let [cnt2, setCnt2] = useState(0);
  const increase = () =>{
    cnt += 1;
    setCnt2(cnt2 + 1);
    console.log(cnt, cnt2)
  }
  useEffect(() => {
    document.getElementById("hi").innerText = cnt2;
  })
  return (
    <div>
      <CommentList />
      <hr/>
      <button onClick={increase} id="hi">click!</button>
      {cnt}, {cnt2}
      
    </div>
  )
}

export default Main0324
