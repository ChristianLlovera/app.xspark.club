import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../Icons'
import useStore from '../../Store/useStore'

if (process.env.WEBPACK) { require('./_style.scss') }

const Button = props => {

    const { setMenu } = useStore()
    const { text, to, icon } = props


    return (
        <Link to={to} className="button" onClick={() => setMenu()}>
            <Icons type={icon} />
            <span>{text}</span>
        </Link>
    )
}

const Menu = props => {

    const { getMenu, setMenu, getStore } = useStore()
    const Menu = getMenu()


    return (
        <>
            <div className={Menu ? 'menu menu-open' : 'menu'}>
                <header>
                    <div className="menu-button" onClick={() => setMenu()}>
                        <Icons type='menu' />
                    </div>
                    <div className="logo"></div>
                </header>
                <div className="body scroll">
                    <Button icon='plus' text='fichas' to="/profile/list" />
                    <Button icon='plus' text='entrenadores' to="/" />
                    <Button icon='plus' text='login' to="/login" />
                </div>
            </div>

            <div className={Menu ? 'bg-menu bg-menu-open' : 'bg-menu'} onClick={() => setMenu()} />
        </>
    )
}

export default Menu