import React from 'react'

if (process.env.WEBPACK) { require('./_style.scss') }

const Icons = props => {

    const { type } = props

    return (
        <i className={`icon_type-${type}`} />
    )
}

export default Icons