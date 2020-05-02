import React, { useState, useEffect } from 'react'
import { Card, CardGrid, CardBlock, CardTitleHeader, CardErrors } from '../../Layout/Card'
import { Input } from '../../Layout/Input'
import { useHistory } from "react-router-dom"
import TextButton from '../../Layout/TextButton'
import HandlerGetData from '../../Handlers/HandlersAccount/HandlerGetData'
import HandlerSetData from '../../Handlers/HandlersAccount/HandlerSetData'
import IconButton from '../../Layout/IconButton'

if (process.env.WEBPACK) { require('./_style.scss') }

const Account = props => {

    const [data, setData] = useState({})
    const [changes, setChanges] = useState('')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [err, setErr] = useState()
    const history = useHistory()
    const dep = { setErr, setData, setLoading, setSaving, setChanges }

    const handlerChange = () => {
        changes == '' ? setChanges('active') : null
    }

    useEffect(() => {
        HandlerGetData(dep)
    }, [])

    return (
        <Card loader={loading}>
            <CardTitleHeader title="Perfil" type="list"
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/`)} />}
                buttonRight={<IconButton type={changes} process={saving} radio={50} icon="save" onClick={() => HandlerSetData(dep)} />}
            />
            {!data.name && !data.lastname && !data.phone && !data.document && !data.emergency &&
                < div className="account-message"> <strong>Completa tus datos de usuario,</strong>  tus datos de usuario son sumamente importantes para la correcta gestión de tu cuenta.</div>
            }

            <br />

            <CardGrid type='center'>
                <CardBlock>
                    <Input type='text' onChange={() => handlerChange()} data={data.name} title='Nombre' name='name' placeholder='Escribe tu Nombre' />
                    <Input type='text' onChange={() => handlerChange()} data={data.lastname} title='Apellido' name='lastname' placeholder='Escribe tu Apellido' />
                    <Input type='text' onChange={() => handlerChange()} data={data.document} title='Nro de Documento' name='document' placeholder='Número de tu documento de identidad' />
                    <Input type='text' onChange={() => handlerChange()} data={data.phone} title='Teléfono' name='phone' placeholder='Escribe tu teléfono de contacto' />
                    <Input type='text' onChange={() => handlerChange()} data={data.emergency} title='Teléfono de Emergencia' name='emergency' placeholder='Escribe un teléfono de emergencia' />
                </CardBlock>
            </CardGrid>

            <CardErrors data={err} />

            <CardGrid type='center'>
                <CardBlock>
                    <TextButton name='Guardar' onClick={() => HandlerSetData(dep)} />
                </CardBlock>
            </CardGrid>

            <CardGrid type='center'>
                <CardBlock>
                    <div className="setAccoutn">
                        <a onClick={() => history.push('/account/set/email')}>Cambiar tu Correo Electrónico</a>
                        <a onClick={() => history.push('/account/set/password')}>Cambiar tu Contraseña</a>
                    </div>
                </CardBlock>
            </CardGrid>

        </Card >
    )
}

export default Account