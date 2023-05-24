import React, { useEffect, useState } from 'react';
import Timer from './component/Timer';


function Clock() {
    const [timer, setTimer] = useState(false);
    
    return (
        <div className="App" style={{
            border: '1px black solid',
            width: '300px',
            height: "100px",
            borderRadius: '25px',
            backgroundColor: 'cyan'
        }}>
            {timer && <Timer />}
            <button onClick={() => {
                setTimer(!timer);
            }}>
                Toggle Timer
            </button>
        </div>
    );
}
export default Clock;