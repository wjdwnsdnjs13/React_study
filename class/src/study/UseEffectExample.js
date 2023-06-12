import React, { useState, useEffect } from "react";

// const increase=()=>{
//    setCnt1(cnt1+1);  
//    var x=document.getElementsByTagName("h2");
//    x[0].innerHTML=color;
// } // 박스 위 h2 태그 자리에 색을 글로 표시
// useEffect(() => {
//    console.log(cnt1 + " : " + cnt2 + " : " + color);
//    var x =document.getElementById("p1")
//    x.innerHTML="카운트1 : " +cnt1 
//             + "<br /> 카운트2 : " +cnt2;
//   }); //바꾸면 카운터1,2 버튼 아래 추가로 표시됨

function useEffectExample() {
    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0)
    const [color, setColor] = useState('yellow');
    const changeColor = (color) => {
        setColor(color);
    };
    const increase = () => {
        setCnt1(cnt1 + 1);
    }
    useEffect(() => {
        console.log(cnt1 + " :  " + cnt2 + " :  " + color);
        console.log(cnt1 + " : " + cnt2 + " : " + color);
        var x = document.getElementById("p1")
        x.innerHTML = "카운트1 : " + cnt1 + "<br /> 카운트2 : " + cnt2;
    });
    useEffect(() => {
        console.log("첫 번째 렌더링 발생!");
    }, []);

    return (
        <div className="App">
            <h2>useEffect 실습</h2>
            <div
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: color,
                    border: "1px solid red",
                }}
            ></div>
            <div>
                <button onClick={() => { changeColor("#f00"); }}>RED</button>
                <button onClick={() => { changeColor("#0f0"); }}>GREEN</button>
                <button onClick={() => { changeColor("#00f"); }}>BLUE</button>
                <button onClick={() => { changeColor("pink"); }}>pink</button>
                <hr />
                <button onClick={increase}>카운트1</button>
                <button onClick={() => setCnt2(cnt2 + 1)}>카운트2</button>
            </div>
            <hr />
            <p id='p1'>...</p>
        </div>
    );
}
export default useEffectExample