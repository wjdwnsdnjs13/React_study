import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const [date, setDate] = useState(() => new Date())
    const [n, setN] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
            console.log("동작 중")
        }, 1000)
        return () => {
            console.log("동작 중지")
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            현재시간 : {date.toLocaleTimeString()}
        </div>
    )
}
export default Timer;
