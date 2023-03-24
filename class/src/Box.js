import React from 'react';

const Box = (props) => {
    return(
        <div className='box'><br/>
            얘는 화살표 함수를 활용한 컴포넌트<br/>
            Hello...XXX<br/>
            <h1>이 친구 시험에 나온대 컴포넌트로 분리해서 만들어라</h1>
            {props.name}
        </div>
    )
}

export default Box;