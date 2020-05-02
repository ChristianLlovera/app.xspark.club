import React, { useState, useEffect } from 'react'
import Icons from '../Icons'
import useStore from '../../Hooks/useStore'
import IconButton from '../IconButton'
import currentUserIsAuth from '../../Helpers/IsAuth'
import currentUserIsAdmin from '../../Helpers/IsAdmin'
import { useHistory } from 'react-router-dom'
import HandlerLogout from '../../Handlers/HandlersAccount/HandlerLogout'


if (process.env.WEBPACK) { require('./_style.scss') }

const Header = props => {

    const { setMenu, getIsLogin, setIsLogin, getIsAdmin, setIsAdmin } = useStore()

    const history = useHistory()
    const isLogin = getIsLogin()
    const isAdmin = getIsAdmin()

    const handlerShowButtons = async () => {
        const currentUser = await currentUserIsAuth()
        currentUser ? setIsLogin(true) : null
        const currentTypeAdmin = await currentUserIsAdmin()
        currentTypeAdmin ? setIsAdmin(true) : null
    }

    useEffect(() => {
        handlerShowButtons()
    }, [isLogin])

    return (
        <div className="header">

            <div className="logo-content">
                {isAdmin &&
                    <div className="menu-button" onClick={() => setMenu()}>
                        <Icons type='menu' />
                    </div>
                }
                <div className="logo" data-menu={isAdmin}></div>
            </div>

            {isLogin &&
                <div className="action-content">


                    <IconButton radio={50} icon="profile" onClick={() => history.push('/account/set/info')} />
                    <IconButton radio={50} icon="exit" onClick={() => HandlerLogout({ history, setIsLogin, setIsAdmin })} />

                </div>}
        </div>
    )
}

export default Header