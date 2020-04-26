import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { Input } from '../../Layout/Input'
import { handlerGetProfileEdit, handlerSaveProfile } from '../../Handlers/handlerProfile'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'
import IconButton from '../../Layout/IconButton'

import {
    InputDate,
    InputRanking,
    InputListCoach,
    InputListDirector,
    InputNumber,
    InputText
} from './partials'

const ProfileEdit = () => {//pagina de edicion de perfiles

    const empty = {
        info: {},
        physical: {},
        technical: {},
        attender: {},
        insurance: {},
        observation: {}
    }

    const { id } = useParams()
    const history = useHistory()
    const [data, setData] = useState(empty)
    const [changes, setChanges] = useState('')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const { physical, technical } = data

    const handlerChange = () => {
        changes == '' ? setChanges('active') : null
    }

    const handlerSave = () => {

        if (changes == 'active') {
            setChanges('')
            setSaving(true)
            handlerSaveProfile(id, setSaving)
        }

    }

    useEffect(() => {
        handlerGetProfileEdit([id, setData, setLoading])
    }, [])

    return (

        <Card loader={loading}>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/profile/show/${id}`)} />}
                buttonRight={<IconButton type={changes} process={saving} radio={50} icon="save" onClick={() => handlerSave()} />}
                title="Editar datos"
            />{/* header */}


            <CardGrid>{/* titulo */}
                <CardBlock title="información" />
            </CardGrid>
            <CardGrid type='two'>
                <CardBlock>
                    <InputText type="info" input="name" profile={data} onChange={() => handlerChange()} />
                    <InputDate type="info" input="birthdate" profile={data} onChange={() => handlerChange()} />
                    <InputText type="info" input="academy" profile={data} onChange={() => handlerChange()} />
                    <InputListDirector type="info" input="director" profile={data} onChange={() => handlerChange()} />
                </CardBlock >
                <CardBlock>
                    <InputText type="info" input="lastname" profile={data} onChange={() => handlerChange()} />
                    <InputText type="info" input="document" profile={data} onChange={() => handlerChange()} />
                    <InputNumber type="info" input="number" profile={data} onChange={() => handlerChange()} />
                    <InputListCoach type="info" input="coach" profile={data} onChange={() => handlerChange()} />
                </CardBlock >
            </CardGrid >


            <CardGrid>
                <CardBlock>
                    <Input type="text-area"
                        name='observation'
                        title='observación'
                        placeholder='escribe una observación'
                        onChange={handlerChange}
                        data={data['observation']} />
                </CardBlock>
            </CardGrid>



            <CardGrid>{/* titulo */}
                <CardBlock title="Físico"></CardBlock>
            </CardGrid>
            {
                Object.keys(physical).map((element, key) => //bucle de inputs
                    <InputRanking key={key} type="physical" input={element} profile={data} onChange={() => handlerChange()} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="Técnico"></CardBlock>
            </CardGrid>
            {
                Object.keys(technical).map((element, key) =>//bucle de inpues
                    <InputRanking key={key} type="technical" input={element} profile={data} onChange={() => handlerChange()} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="seguro" />
            </CardGrid>
            <CardGrid type='two'>{/* titulo */}
                <CardBlock>
                    <InputText type="insurance" input='company' profile={data} onChange={() => handlerChange()} />
                </CardBlock>
                <CardBlock>
                    <InputNumber type="insurance" input='number' profile={data} onChange={() => handlerChange()} />
                </CardBlock>
            </CardGrid>


            <CardGrid>{/* titulo */}
                <CardBlock title="acudiente" />
            </CardGrid>
            <CardGrid type='two'>{/* titulo */}
                <CardBlock>
                    <InputText type="attender" input="name" profile={data} onChange={() => handlerChange()} />
                    <InputNumber type="attender" input="phone" profile={data} onChange={() => handlerChange()} />
                </CardBlock>
                <CardBlock>
                    <InputNumber type="attender" input="document" profile={data} onChange={() => handlerChange()} />
                    <InputNumber type="attender" input="emergency" profile={data} onChange={() => handlerChange()} />
                </CardBlock>
            </CardGrid>

        </Card >

    )
}

export default ProfileEdit