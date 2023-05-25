import React from 'react'

const style = {
  height: "50px",
  backgroundColor: "lightgray"
};

const Child3 = () => {
  console.log("Child3 랜더링")
  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  )
}

export default Child3
