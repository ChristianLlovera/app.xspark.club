import React, { useState } from 'react'
import { useStore } from '../../Store/useStore'
import { useHistory, useParams } from "react-router-dom"
import { Input } from '../../Layout/Input'
import { handlerSaveProfile } from '../../Handlers/handlerProfile'
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

    const [changes, setChanges] = useState('')
    const { getProfile, setProfile } = useStore()
    const history = useHistory()//para direccionar con react router history.push("/destino")
    const { id } = useParams()
    const profile = getProfile(id)
    const { physical, technical } = profile

    const handlerChange = () => {
        changes == '' ? setChanges('active') : null
    }

    const handlerSave = () => {
        setChanges('')
        handlerSaveProfile(id, setProfile, profile)
    }

    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/profile/show/${id}`)} />}
                buttonRight={<IconButton type={changes} radio={50} icon="save" onClick={() => handlerSave()} />}
                title="Editar datos"
            />{/* header */}


            <CardGrid>{/* titulo */}
                <CardBlock title="información" />
            </CardGrid>
            <CardGrid two>
                <CardBlock>
                    <InputText type="info" input="name" profile={profile} onChange={() => handlerChange()} />
                    <InputDate type="info" input="birthdate" profile={profile} onChange={() => handlerChange()} />
                    <InputText type="info" input="academy" profile={profile} onChange={() => handlerChange()} />
                    <InputListDirector type="info" input="director" profile={profile} onChange={() => handlerChange()} />
                </CardBlock >
                <CardBlock>
                    <InputText type="info" input="lastname" profile={profile} onChange={() => handlerChange()} />
                    <InputText type="info" input="document" profile={profile} onChange={() => handlerChange()} />
                    <InputNumber type="info" input="number" profile={profile} onChange={() => handlerChange()} />
                    <InputListCoach type="info" input="coach" profile={profile} onChange={() => handlerChange()} />
                </CardBlock >
            </CardGrid >


            <CardGrid>
                <CardBlock>
                    <Input type="text-area"
                        name='observation'
                        title='observación'
                        placeholder='escribe una observación'
                        onChange={handlerChange}
                        data={profile['observation']} />
                </CardBlock>
            </CardGrid>



            <CardGrid>{/* titulo */}
                <CardBlock title="Físico"></CardBlock>
            </CardGrid>
            {
                Object.keys(physical).map((element, key) => //bucle de inputs
                    <InputRanking key={key} type="physical" input={element} profile={profile} onChange={() => handlerChange()} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="Técnico"></CardBlock>
            </CardGrid>
            {
                Object.keys(technical).map((element, key) =>//bucle de inpues
                    <InputRanking key={key} type="technical" input={element} profile={profile} onChange={() => handlerChange()} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="seguro" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="insurance" input='company' profile={profile} onChange={() => handlerChange()} />
                </CardBlock>
                <CardBlock>
                    <InputNumber type="insurance" input='number' profile={profile} onChange={() => handlerChange()} />
                </CardBlock>
            </CardGrid>


            <CardGrid>{/* titulo */}
                <CardBlock title="acudiente" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="attender" input="name" profile={profile} onChange={() => handlerChange()} />
                    <InputNumber type="attender" input="phone" profile={profile} onChange={() => handlerChange()} />
                </CardBlock>
                <CardBlock>
                    <InputNumber type="attender" input="document" profile={profile} onChange={() => handlerChange()} />
                    <InputNumber type="attender" input="emergency" profile={profile} onChange={() => handlerChange()} />
                </CardBlock>
            </CardGrid>

        </Card >

    )
}

export default ProfileEdit