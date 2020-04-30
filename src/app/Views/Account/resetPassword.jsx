import React, { useState } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors, CardSuccess } from '../../Layout/Card'
import { useHistory } from "react-router-dom"
import { Input } from '../../Layout/Input'
import TextButton from '../../Layout/TextButton'
import IconButton from '../../Layout/IconButton'
import { handlerResetPassword } from '../../Handlers/handlersAccount'


const ResetPassword = props => {

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()
    const [success, setSuccess] = useState()
    const history = useHistory()
    const dep = { setErr, setSuccess, setLoading }

    return (
        <Card loader={loading}>
            <CardTitleHeader title="Cambio de Contraseña" type="list"
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/`)} />}
            />

            <div className="account-message"> Coloca tu correo Electrónico y te enviaremos un enlace para que restablescas tu contraseña</div>

            <CardGrid type='center'>
                <CardBlock>
                    <Input type='text' title='Correo Electrónico' name='email' placeholder='Escribe Correo Electrónico' />
                </CardBlock>
            </CardGrid>

            <br />

            <CardErrors data={err} />
            <CardSuccess data={success} />

            <CardGrid type='center'>
                <CardBlock>
                    <TextButton name='Enviar' onClick={() => handlerResetPassword(dep)} />
                </CardBlock>
            </CardGrid>

        </Card >
    )
}

export default ResetPassword