import React, { useState } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors } from '../../Layout/Card'
import { Input } from '../../Layout/Input'
import TextButton from '../../Layout/TextButton'
import HandlerLogin from '../../Handlers/HandlersAccount/HandlerLogin'
import { useHistory } from 'react-router-dom'
import useStore from '../../Hooks/useStore'

if (process.env.WEBPACK) { require('./_style.scss') }

const Auth = props => {

    const history = useHistory()
    const { setIsLogin } = useStore()
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({})
    const [err, setErr] = useState()
    const dep = { setLoading, setIsLogin, setData, setErr, history }


    return (
        <Card loader={loading}>
            <CardTitleHeader title="Xspark App" type="list" />

            <div className="account-message"> Coloca tu usuario y contraseña para Iniciar Sesión.</div>


            <CardGrid type='center'>
                <CardBlock>
                    <Input type='text' data={data.email} title='Correo Electrónico' name='email' placeholder='Escribe tu Correo Electrónico' />
                    <Input type='password' title='Contraseña' name='password' onEnter={() => HandlerLogin(dep)} placeholder='Escribe tu Contraseña' />
                </CardBlock>
            </CardGrid>
            <br />
            <CardErrors data={err} />

            <CardGrid type='center'>
                <CardBlock>
                    <TextButton name='Login' onClick={() => HandlerLogin(dep)} />
                </CardBlock>
            </CardGrid>

            <div className="account-message">  ¿Aún no estás registrado? <a onClick={() => history.push('/account/register')}> Pulsa aquí para Registrarte</a>
                <div className="setAccoutn">
                    <a onClick={() => history.push('/account/reset/password')}>¿Olvidaste tu Contraseña?</a>
                </div>
            </div>
        </Card>
    )
}

export default Auth
