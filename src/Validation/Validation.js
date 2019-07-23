import React from 'react'

const Validation = (props) => {
    let output = null
    if (props.length < 5) {
        output = (
            <p>Text Too Short</p>
        )
    }
    if (props.length > 10) {
        output = (
            <p>Text Too Long</p>
        )
    }

    return (
        <div>
            {output}
        </div>
    )
}

export default Validation