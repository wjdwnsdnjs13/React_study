import React from 'react'

const style = {
  height: "50px",
  backgroundColor: "lightgray"
};

const Child2 = () => {
  console.log("Child2 랜더링")
  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  )
}

export default Child2
