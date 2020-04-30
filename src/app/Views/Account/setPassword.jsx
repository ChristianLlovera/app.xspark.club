import React, { useState } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors } from '../../Layout/Card'
import { useHistory } from "react-router-dom"
import { Input } from '../../Layout/Input'
import TextButton from '../../Layout/TextButton'
import IconButton from '../../Layout/IconButton'
import { handlerSetPassword } from '../../Handlers/handlersAccount'


const SetPassword = props => {

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()
    const history = useHistory()
    const dep = { setErr, setLoading, history }

    return (
        <Card loader={loading}>
            <CardTitleHeader title="Cambiar Contraseña" type="list"
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/account/set/info`)} />}
            />

            <CardGrid type='center'>
                <CardBlock>
                    <br />
                    <br />
                    <Input type='password' title='Contraseña Actual' name='old-password' placeholder='Escribe tu Contraseña Actual' />
                    <Input type='password' title='Nueva Contraseña' name='new-password' placeholder='Escribe tu Nueva Contraseña' />
                    <Input type='password' title='Confirmar Contraseña' name='confirm-password' placeholder='Confirma tu nueva Contraseña' />
                </CardBlock>
            </CardGrid>
            <br />
            <CardErrors data={err} />

            <CardGrid type='center'>
                <CardBlock>
                    <br />
                    <TextButton name='Guardar' onClick={() => handlerSetPassword(dep)} />
                </CardBlock>
            </CardGrid>

        </Card >
    )
}

export default SetPassword