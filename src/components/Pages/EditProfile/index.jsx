import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useStore } from '../../Store/useStore'
import { Input, inputValue } from '../../Layout/Input'
import { handlerSaveProfile } from '../../Handlers/handlerProfile'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'


const InputRanking = props => {//todos los inputs de ranking para un bucle
    const { input, type, profile, onChange } = props

    return (
        <CardGrid two>
            <CardBlock>
                <Input type="ranking-edit" onChange={onChange} name={`${type}-${input}`} title={input} data={profile[type][input]} />
            </CardBlock>
        </CardGrid>
    )
}

const InputText = props => {

    const { input, type, profile, onChange } = props

    return (
        <Input type="text"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            placeholder='Escribe Un Nombre'
            data={profile[type][input]} />
    )
}

const InputDate = props => {

    const { input, type, profile, onChange } = props

    return (
        <Input type="date"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            data={profile[type][input]} />
    )
}


const EditProfile = () => {//pagina de edicion de perfiles

    const [changes, setChanges] = useState('')
    const { getPlayer, setPlayer } = useStore()
    const profile = getPlayer()
    const { physical, technical } = profile
    const history = useHistory();//para direccionar con react router history.push("/destino")

    const handlerChange = () => {
        changes == '' ? setChanges('active') : null
    }

    const handlerSave = () => {
        setChanges('')
        handlerSaveProfile(setPlayer, profile)
    }

    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile")} />}
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
                    <InputText type="info" input="director" profile={profile} onChange={() => handlerChange()} />
                </CardBlock >
                <CardBlock>
                    <InputText type="info" input="lastname" profile={profile} onChange={() => handlerChange()} />
                    <InputText type="info" input="document" profile={profile} onChange={() => handlerChange()} />
                    <InputText type="info" input="number" profile={profile} onChange={() => handlerChange()} />
                    <InputText type="info" input="coach" profile={profile} onChange={() => handlerChange()} />
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


            <InputRanking type="info" input="ranking" profile={profile} onChange={() => handlerChange()} />


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
                    <InputText type="insurance" input='company' profile={profile} />
                </CardBlock>
                <CardBlock>
                    <InputText type="insurance" input='number' profile={profile} />
                </CardBlock>
            </CardGrid>


            <CardGrid>{/* titulo */}
                <CardBlock title="acudiente" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="attender" input="name" profile={profile} />
                    <InputText type="attender" input="phone" profile={profile} />
                </CardBlock>
                <CardBlock>
                    <InputText type="attender" input="document" profile={profile} />
                    <InputText type="attender" input="emergency" profile={profile} />
                </CardBlock>
            </CardGrid>

        </Card >

    )
}

export default EditProfile