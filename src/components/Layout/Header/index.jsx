import React from 'react'
import Icons from '../Icons'

if (process.env.WEBPACK) { require('./_style.scss') }

const Header = props => {

    return (
        <div className="header">
            <div className="logo-content">
                <div className="menu-button">
                    <Icons type='menu' />
                </div>
                <div className="logo"></div>
            </div>
        </div>
    )
}

export default Header