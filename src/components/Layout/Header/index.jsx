import React, { useState, useEffect } from 'react'
import { getAuth } from '../../Auth'
import Icons from '../Icons'
import useStore from '../../Store/useStore'
import IconButton from '../IconButton'
import { useHistory } from 'react-router-dom'
import { handlerLogout } from '../../Handlers/handlersLogin'


if (process.env.WEBPACK) { require('./_style.scss') }

const Header = props => {

    const { setMenu, getIsLogin, setIsLogin } = useStore()
    const history = useHistory()
    const isLogin = getIsLogin()

    useEffect(() => {
        getAuth()
            .then(res => {
                if (res && res.uid) { setIsLogin(true) }
            })
    }, [])

    return (
        <div className="header">
            {isLogin &&
                <>
                    <div className="logo-content">
                        <div className="menu-button" onClick={() => setMenu()}>
                            <Icons type='menu' />
                        </div>
                        <div className="logo"></div>
                    </div>
                    <div className="action-content">
                        <IconButton radio={50} icon="profile" onClick={() => history.push('/account/set/info')} />
                        <IconButton radio={50} icon="exit" onClick={() => handlerLogout({ history, setIsLogin })} />
                    </div>
                </>
            }
        </div>
    )
}

export default Header