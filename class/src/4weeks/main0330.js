import React, { useState } from 'react'
import CommentList from './CommentList'
import BoxClass from './component/BoxClass'
import Box1 from './Box1'
import Link from "react-router-dom";

const main0330 = () => {
    const [cnt, setCnt] = useState(0);
    const ff = () => {
        setCnt(cnt + 1);
        document.title = '클릭 횟수 = ' + cnt;
    }
    return (
        <div>
            <CommentList />
            <div>클릭횟수:{cnt}</div>
            <hr />
            <button onClick={ff}>클릭!</button>
            <hr />
            <Box1 num={cnt} />
            <hr></hr>
            <BoxClass name='홍길동' />
            <hr/>
            {/* <button onClick={this.inc}>클릭!</button> */}
        </div >
    )
}

export default main0330
