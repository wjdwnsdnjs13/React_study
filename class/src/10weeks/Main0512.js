import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Main0512 = () => {
    const [cnt, setCnt] = useState(0);
    const cntRef = useRef(0);
    const [renderCnt, setRenderCnt] = useState(1);
    const [btnHoverFlag, setBtnHoverFlag] = useState(false);

    useEffect(() => {
        cntRef.current = cntRef.current + 1;
        console.log("useEffect rendering! ", cntRef.current);
    }, [])

    // 무한루프하니까 귀찮잖아. 
    let cntVar = 0;
    const incVar = () => {
        cntVar += 1
        console.log("cntVar(일반 변수) : ", cntVar)
    }
    const inc = () => {
        setCnt(cnt + 1)
        console.log("state : ", cnt, " Ref : ", cntRef);
        document.getElementById('inp').value = cnt + 1
    }
    const incRef = () => {
        cntRef.current = cntRef.current + 1;
        console.log("Ref : ", cntRef.current);
    }
    const hoverBtn = () => {
        // document.getElementById("refBtn").style.background = "yellow"
        setBtnHoverFlag(true);
    }
    const mouseOut = () => {
        // document.getElementById("refBtn").style.background = "none"
        setBtnHoverFlag(false);
    }
    return (
        <div>
            <p> 카운트 횟수 : {cnt}</p>
            <p style={{ color: "blue", fontWeight: "bold" }}>
                Ref : {cntRef.current}
            </p>
            <button onClick={inc}>state</button>
            <button id={btnHoverFlag?"btnHover":""} onClick={incRef}
                onMouseOver={() => hoverBtn()}
                onMouseOut={() => mouseOut()}
            >Ref</button>
            <hr />
            <button onClick={incVar}>var</button>
            <p>일반 변수(cntVar) : {cntVar}</p>
            <hr/>
            <input id="inp"></input><button onClick={() => alert(`하이 ${document.getElementById('inp').value} ${cnt}`)}>버어어튼</button>
        </div>
    )
}

export default Main0512
