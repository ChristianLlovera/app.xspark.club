import React from 'react'
import Icons from '../Icons'

if (process.env.WEBPACK) { require('./_style.scss') }

const IconButton = props => {

    const { radio, icon, onClick, type } = props

    const handlerClick = () => {
        onClick ? onClick() : null
    }

    const style = {
        width: `${radio}px`,
        height: `${radio}px`
    }


    return (
        <div type={type} style={style} className="icon-button" onClick={() => handlerClick()}>
            <Icons type={icon} />
        </div>
    )
}

export default IconButton