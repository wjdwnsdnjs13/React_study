import React, { useEffect, useState } from 'react'
import ColorMessage from './component/ColorMessage'

const Main0406 = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num % 2 == 0) {
      document.title = '짝수번 클릭!';
    }
    else {
      document.title = '홀수번 클릭!';
    }
  })
  const xx = () => {
    alert('버튼을 클릭했어요.');
    setNum(num + 1);
  }
  return (
    <div>
      <ColorMessage color="red" message="잘 지내셩?" />
      <ColorMessage color="skyblue" message="잘 지낸다..." />
      <button onClick={xx}>버튼</button>
      <p>{num}</p>
    </div>
  )
}

export default Main0406
