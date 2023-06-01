import React from 'react'

const ColorMessage = (props) => {
    const colorMessageStyle = {
        color: props.color,
        fontSize: "20px"
    }
    return (
        <div>
            <p style={colorMessageStyle}>{props.message}</p>
        </div>
    )
}

export default ColorMessage
