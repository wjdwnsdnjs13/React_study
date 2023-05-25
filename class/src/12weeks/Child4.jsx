import React from 'react'

const style = {
  height: "200px",
  backgroundColor: "wheat",
  padding: "8px"
};

const Child4 = () => {
  console.log("Child4 랜더링")
  return (
    <div style={style}>
      <p>Child4</p>
    </div>
  )
}

export default Child4
