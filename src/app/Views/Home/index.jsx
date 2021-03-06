import React, { useEffect, useState } from 'react'
import Login from '../../Views/Account/login'
import { Card } from '../../Layout/Card'
import GetAuth from '../../Facades/Auth/GetAuth'


if (process.env.WEBPACK) { require('./_style.scss') }

const Message = props => {
    return (<div className="message"></div>)
}

const Home = props => {

    const [view, setView] = useState(<Card loader={true} />)

    const handlerIsLogin = async () => {
        const usr = await GetAuth()
        !usr ? setView(<Login />) : setView(<Message />)
    }

    useEffect(() => {
        handlerIsLogin()
    }, [])

    return (view)
}

export default Home