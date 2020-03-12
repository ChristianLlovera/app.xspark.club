import React from 'react'

if (process.env.WEBPACK) { require('./_style.scss') }


const Input = props => {

    const { title, data, type } = props

    return (
        <div className="input">
            <div className="title">
                <span>{title}</span>
            </div>
            <div className="data">{data}</div>
        </div>
    )
}

export default Input