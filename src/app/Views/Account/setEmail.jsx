import React, { useState } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors } from '../../Layout/Card'
import { useHistory } from "react-router-dom"
import { Input } from '../../Layout/Input'
import TextButton from '../../Layout/TextButton'
import IconButton from '../../Layout/IconButton'
import { HandlerSetEmail } from '../../Handlers/HandlersAccount/HandlerSetEmail'


const SetEmail = props => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ email: '' })
    const [err, setErr] = useState()
    const history = useHistory()
    const dep = { setErr, setLoading, history, setData }

    return (
        <Card loader={loading}>
            <CardTitleHeader title="Cambio de Email" type="list"
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/account/set/info`)} />}
            />

            <CardGrid type='center'>
                <CardBlock>
                    <br />
                    <br />
                    <Input type='text' data={data.email} title='Correo Electrónico' name='email' placeholder='Escribe tu nuevo Correo Electrónico' />
                    <Input type='password' onEnter={() => HandlerSetEmail(dep)} title='Contraseña Actual' name='password' placeholder='Escribe tu Contraseña Actual' />
                </CardBlock>
            </CardGrid>
            <br />
            <CardErrors data={err} />

            <CardGrid type='center'>
                <CardBlock>
                    <br />
                    <TextButton name='Guardar' onClick={() => HandlerSetEmail(dep)} />
                </CardBlock>
            </CardGrid>
        </Card >
    )
}

export default SetEmail