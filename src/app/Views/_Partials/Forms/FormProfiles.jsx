import React from 'react'
import { CardGrid, CardBlock } from '../../../Layout/Card'

import InputFactory from '../Factorys/InputFactory'

const FormProfiles = props => {

    const { profile } = props

    const def = { info: {}, attender: {}, insurance: {} }
    def.physical = { speed: 0, agility: 0, strength: 0, resistance: 0, coordination: 0 }
    def.technical = { driving: 0, dodge: 0, shot: 0, pass: 0, control: 0 }

    const data = profile ? profile : def

    const physical = Object.keys(data.physical).map((element, key) =>
        <InputFactory {...props}
            key={key}
            type='ranking-edit'
            value={data.physical[element]}
            prefix="physical"
            input={element} />
    )

    const technical = Object.keys(data.technical).map((element, key) =>
        <InputFactory {...props}
            key={key}
            type='ranking-edit'
            value={data.technical[element]}
            prefix="technical"
            input={element}
        />
    )

    const info = { ...data.info }
    const observation = data.observation
    const attender = { ...data.attender }
    const insurance = { ...data.insurance }

    return (
        <>
            <CardGrid>
                <CardBlock title="información" />
            </CardGrid>
            <CardGrid type='two'>
                <CardBlock>
                    <InputFactory type='text' value={info.name} {...props} prefix="info" input="name" description='Escribe un Nombre' />
                    <InputFactory type='date' value={info.birthdate} {...props} prefix="info" input="birthdate" />
                    <InputFactory type='list' value={info.academy} {...props} prefix="info" input="academy" description='Selecciona una Opción' />
                    <InputFactory type="list" value={info.director} {...props} prefix="info" input="director" description='Selecciona una Opción' />
                </CardBlock>
                <CardBlock>
                    <InputFactory type='text' value={info.lastname} {...props} prefix="info" input="lastname" description='Escribe un Apellido' />
                    <InputFactory type='text' value={info.document} {...props} prefix="info" input="document" description='Escribe un Documento' />
                    <InputFactory type='number' value={info.number} {...props} prefix="info" input="number" description='escribe un Número' />
                    <InputFactory type="list" value={info.coach} {...props} prefix="info" input="coach" description='Selecciona una Opción' />
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock>
                    <InputFactory type='text-area' value={observation} {...props} input='observation' description='Escribe una observación' />
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Físico" />
            </CardGrid>
            <CardGrid type='two'>
                <CardBlock>
                    {physical}
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Técnico" />
            </CardGrid>
            <CardGrid type='two'>
                <CardBlock>
                    {technical}
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="seguro" />
            </CardGrid>
            <CardGrid type='two'>
                <CardBlock>
                    <InputFactory type='text' value={insurance.company} {...props} prefix="insurance" input='company' description='Escribe una Compañia' />
                </CardBlock>
                <CardBlock>
                    <InputFactory type='number' value={insurance.number} {...props} prefix="insurance" input='number' description='Escribe un Número' />
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="acudiente" />
            </CardGrid>
            <CardGrid type='two'>
                <CardBlock>
                    <InputFactory type='text' value={attender.name}  {...props} prefix="attender" input="name" description='Escribe un Nombre' />
                    <InputFactory type='number' value={attender.phone} {...props} prefix="attender" input="phone" description='Escribe un Teléfono' />
                </CardBlock>
                <CardBlock>
                    <InputFactory type='number' value={attender.document} {...props} prefix="attender" input="document" description='Escribe un Documento' />
                    <InputFactory type='number' value={attender.emergency} {...props} prefix="attender" input="emergency" description='Escribe un Teléfono de Emergencia' />
                </CardBlock>
            </CardGrid>
        </>
    )

}

export default FormProfiles