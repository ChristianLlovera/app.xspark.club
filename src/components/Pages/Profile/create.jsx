import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Input } from '../../Layout/Input'
import { handlerAddProfile } from '../../Handlers/handlerProfile'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'


import {
    InputDate,
    InputRanking,
    InputListCoach,
    InputListDirector,
    InputNumber,
    InputText
} from './partials'


const ProfileCreate = props => {//pagina de edicion de perfiles

    const [changes, setChanges] = useState('')
    const [create, setCreate] = useState(false)
    const history = useHistory()//para direccionar con react router history.push("/destino")
    const physical = ["speed", "agility", "strength", "resistance", "coordination"]
    const technical = ["driving", "dodge", "shot", "pass", "control"]


    const handlerChange = () => {
        changes == '' ? setChanges('active') : null
    }

    const handlerCreate = () => {
        if (changes == 'active') {
            setChanges('')
            setCreate(true)
            handlerAddProfile(history)
        }
    }

    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/profile/list`)} />}
                buttonRight={<IconButton type={changes} process={create} radio={50} icon="save" onClick={() => handlerCreate()} />}
                title="Crear Perfil"
            />{/* header */}


            <CardGrid>{/* titulo */}
                <CardBlock title="información" />
            </CardGrid>
            <CardGrid two>
                <CardBlock>
                    <InputText type="info" input="name" onChange={() => handlerChange()} />
                    <InputDate type="info" input="birthdate" onChange={() => handlerChange()} />
                    <InputText type="info" input="academy" onChange={() => handlerChange()} />
                    <InputListDirector type="info" input="director" onChange={() => handlerChange()} />
                </CardBlock >
                <CardBlock>
                    <InputText type="info" input="lastname" onChange={() => handlerChange()} />
                    <InputText type="info" input="document" onChange={() => handlerChange()} />
                    <InputNumber type="info" input="number" onChange={() => handlerChange()} />
                    <InputListCoach type="info" input="coach" onChange={() => handlerChange()} />
                </CardBlock >
            </CardGrid >


            <CardGrid>
                <CardBlock>
                    <Input type="text-area"
                        name='observation'
                        title='observación'
                        placeholder='Escribe una observación'
                        onChange={handlerChange} />
                </CardBlock>
            </CardGrid>



            <CardGrid>{/* titulo */}
                <CardBlock title="Físico"></CardBlock>
            </CardGrid>
            {
                physical.map((element, key) => //bucle de inputs
                    <InputRanking key={key} type="physical" input={element} onChange={() => handlerChange()} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="Técnico"></CardBlock>
            </CardGrid>
            {
                technical.map((element, key) =>//bucle de inpues
                    <InputRanking key={key} type="technical" input={element} onChange={() => handlerChange()} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="seguro" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="insurance" input='company' onChange={() => handlerChange()} />
                </CardBlock>
                <CardBlock>
                    <InputNumber type="insurance" input='number' onChange={() => handlerChange()} />
                </CardBlock>
            </CardGrid>


            <CardGrid>{/* titulo */}
                <CardBlock title="acudiente" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="attender" input="name" onChange={() => handlerChange()} />
                    <InputNumber type="attender" input="phone" onChange={() => handlerChange()} />
                </CardBlock>
                <CardBlock>
                    <InputNumber type="attender" input="document" onChange={() => handlerChange()} />
                    <InputNumber type="attender" input="emergency" onChange={() => handlerChange()} />
                </CardBlock>
            </CardGrid>

        </Card >

    )
}



export default ProfileCreate