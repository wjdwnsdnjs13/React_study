import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // 랜더링 될 때마다 돌아가는 친구입니다.
        if(count%2 == 0) {
            document.title = `총 ${count}번 클릭`;
            document.body.style.backgroundColor = "cyan";
        }
        else {
            document.title = `You clicked ${count} times.`;
            document.body.style.backgroundColor = "lightyellow";
        }
    })

    return (
        <div>
            <p>{count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭!</button>
        </div>
    )
}

export default Counter
