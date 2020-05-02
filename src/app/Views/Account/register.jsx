import React, { useState, useEffect } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors } from '../../Layout/Card'
import { useHistory } from "react-router-dom"
import { Input } from '../../Layout/Input'
import TextButton from '../../Layout/TextButton'
import IconButton from '../../Layout/IconButton'
import HandlerRegister from '../../Handlers/HandlersAccount/HandlerRegister'
import useStore from '../../Hooks/useStore'
import Recaptcha from '../../Facades/Auth/Recaptcha'



const Register = props => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ email: '' })
    const [err, setErr] = useState()
    const history = useHistory()
    const { setIsLogin } = useStore()
    const dep = { setErr, setLoading, setIsLogin, history, setData }

    useEffect(() => {
        Recaptcha('recaptcha-container')
    }, [])

    return (
        <Card loader={loading}>
            <CardTitleHeader title="Registrate" type="list"
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/`)} />}
            />

            <CardGrid type='center'>
                <CardBlock>
                    <br />
                    <br />
                    <Input type='text' data={data.email} title='Correo Electrónico' name='email' placeholder='Ingresa tu Correo Electrónico' />
                    <Input type='password' title='Contraseña' name='password' placeholder='Escribe tu Contraseña' />
                    <Input type='password' onEnter={() => HandlerRegister(dep)} title='Confirmar Contraseña' name='password_confirmation' placeholder='Confirma tu contraseña' />
                    <div id='recaptcha-container'></div>
                </CardBlock>
            </CardGrid>
            <br />
            <CardErrors data={err} />

            <CardGrid type='center'>
                <CardBlock>
                    <TextButton name='Guardar' onClick={() => HandlerRegister(dep)} />
                </CardBlock>
            </CardGrid>

        </Card >
    )
}

export default Register