import React, { useEffect } from 'react'
import Icons from '../Icons'
import useStore from '../../Store/useStore'

if (process.env.WEBPACK) { require('./_style.scss') }

const Button = props => {

    const { setMenu } = useStore()
    const { text, action, icon } = props
    const handerAction = () => {
        action()
        setMenu()

    }

    return (
        <div className="button" onClick={() => handerAction()}>
            <Icons type={icon} />
            <span>{text}</span>
        </div>
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
                    <Button icon='plus' text='none' action={() => { }} />
                    <Button icon='plus' text='none' action={() => { }} />
                    <Button icon='plus' text='none' action={() => { }} />
                    <Button icon='plus' text='none' action={() => { }} />
                    <Button icon='plus' text='none' action={() => { }} />
                    <Button icon='plus' text='none' action={() => { }} />
                    <Button icon='plus' text='none' action={() => { }} />
                </div>
            </div>

            <div className={Menu ? 'bg-menu bg-menu-open' : 'bg-menu'} onClick={() => setMenu()} />
        </>
    )
}

export default Menu