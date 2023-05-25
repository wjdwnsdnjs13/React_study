import React, { useState } from 'react'
import Child1 from './Child1'
import Child4 from './Child4'

const Main0525 = () => {
    console.log("메인 랜더링")
    const [num, setNum] = useState(0)

    const onClickButton = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <button onClick={onClickButton}>버튼</button>
            <p>num</p>
            <Child1 />
            <Child4 />
        </div>
    )
}

export default Main0525
