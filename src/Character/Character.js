import React from 'react'

const Character = (props) => {
    return (
        <div className="Character" onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    )
}

export default Character