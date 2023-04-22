import React, { useState } from 'react'
import Counter from './Counter';


const Main0413 = () => {
    const [names, setNames] = useState(["트럼프", "바이든", "진짜 멍청인가"]);
    const [inp, setInp] = useState();
    // 초기에 값을 바로 값을 주지 않고 콜백 함수를 사용
    // const [names, setNames] = useState(() =>{
    //     return 리턴값이_있는_함수();
    // })

    const inpInput = document.getElementById("inpInput");
    const inputChange = (e) => {
        setInp(e.target.value);
        console.log(e.target.value);
    }
    const upLoad = () => {
        setNames([...names, inp])
        inpInput.value = "";
        inpInput.focus();
    };
    const namesList = (
        <>
            {names.map((name, i) => (
                // 만약 () => {} 를 사용 시에는 return으로 해야됨.
                // return (<p>{i}. {name}</p>)
                <p key={name}>{i + 1}. {name}</p>
            ))}
        </>
    )

    return (
        <div>
            <input id="inpInput" type="text" onChange={inputChange} />
            <button onClick={upLoad}>업로드!</button><button onClick={ () => setNames([])}>전체 삭제</button><br />
            {namesList}

            <br/><br/><br/><br/><br/><br/>
            <Counter/>
        </div>
    )
}

export default Main0413
