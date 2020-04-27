import React, { useState } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors } from '../../Layout/Card'
import { useHistory } from "react-router-dom"
import { Input } from '../../Layout/Input'
import TextButton from '../../Layout/TextButton'
import IconButton from '../../Layout/IconButton'
import { handlerRegister } from '../../Handlers/handlersAccount'
import useStore from '../../Store/useStore'



const Register = props => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ email: '' })
    const [err, setErr] = useState()
    const history = useHistory()
    const { setIsLogin } = useStore()
    const dep = { setErr, setLoading, setIsLogin, history, setData }

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
                    <Input type='password' onEnter={() => handlerRegister(dep)} title='Confirmar Contraseña' name='password_confirmation' placeholder='Confirma tu contraseña' />
                </CardBlock>
            </CardGrid>
            <br />
            <CardErrors data={err} />

            <CardGrid type='center'>
                <CardBlock>
                    <br />
                    <TextButton name='Guardar' onClick={() => handlerRegister(dep)} />
                </CardBlock>
            </CardGrid>

        </Card >
    )
}

export default Register