import React from 'react'
import xxx from '../logo.svg'

const Comment = (props) => {
    const styles={
        wrapper:{
            margin : 8,
            padding : 8,
            display : 'flex',
            flexDirection : 'row',
            border : '2px solid yellow',
            borderRadius : 16,
            backgroundColor : 'red',
        },
        imageContainer:{},
        image:{
            width : 50,
            height : 50,
            borderRadius : 50,
            border : '1px solid black',
        },
        contentContainer:{
            margin : 8,
            display : 'flex',
            flexDirection : 'column',
            backgroundColor : "pink",
        },
        nameText:{
            color : 'blue',
            fontSize:19,
            fontWeight : 'bold',
        },
        commentText:{
            color : 'black',
            fontSize : 19,
        }
    }
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={xxx} style={styles.image} alt="그림없어!" />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>

            </div>
        </div>
    )
}
export default Comment
