import React from 'react'
import Icons from '../Icons'

if (process.env.WEBPACK) { require('./_style.scss') }

const IconButton = props => {

    const { radio, icon, onClick } = props

    const style = {
        width: `${radio}px`,
        height: `${radio}px`
    }

    return (
        <div style={style} className={`icon-button`} onClick={() => onClick()}>
            <Icons type={icon} />
        </div>
    )
}

export default IconButton