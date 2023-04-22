import React, { useEffect, useState } from 'react'

const Main0414 = () => {
    const [color, setColor] = useState('gold');
    const [cnt, setCnt] = useState(0);
    const changeColor = (color) => {
        setColor(color);
    }
    const increase = () => {
        setCnt(cnt + 1);
        var x = document.getElementsByTagName("h2");
        x[0].innerHTML = color;
    }
    useEffect(() => {
        console.log(cnt + " : " + color);
        var x = document.getElementById("p1");
        x.innerHTML = "카운트 : " + cnt
    })
    return (
        <div>
            <button onClick={() => {
            changeColor('$red');
            }}>RED</button>
            <button onClick={() => {
            changeColor('$green');
            }}>GREEN</button>
            <button onClick={() => {
            changeColor('$blue');
            }}>BLUE</button>
            <br/>
            <h2>안녕</h2><hr/>
            <button onClick={() => {increase()}}>카운트 증가</button>
    </div>
    )
}

export default Main0414
