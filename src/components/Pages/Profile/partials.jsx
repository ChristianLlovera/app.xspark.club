import React from 'react'
import { Input } from '../../Layout/Input'
import { CardGrid, CardBlock } from '../../Layout/Card'

export const InputRanking = props => {//todos los inputs de ranking para un bucle
    const { input, type, profile, onChange } = props
    const data = profile ? profile[type][input] : 0

    return (
        <CardGrid two>
            <CardBlock>
                <Input type="ranking-edit" onChange={onChange} name={`${type}-${input}`} title={input} data={data} />
            </CardBlock>
        </CardGrid>
    )
}

export const InputText = props => {

    const { input, type, profile, onChange } = props
    const data = profile ? profile[type][input] : ''

    return (
        <Input type="text"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            placeholder='Escribe Un Nombre'
            data={data} />
    )
}

export const InputDate = props => {

    const { input, type, profile, onChange } = props
    const data = profile ? profile[type][input] : ''

    return (
        <Input type="date"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            data={data} />
    )
}

export const InputNumber = props => {

    const { input, type, profile, onChange } = props
    const data = profile ? profile[type][input] : ''

    return (
        <Input type="number"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            data={data}
            placeholder="Inserta un Número" />
    )
}

export const InputListCoach = props => {

    const { input, type, profile, onChange } = props
    const data = profile ? profile[type][input] : ''

    const coachs = [
        { value: 'entrenador1', name: 'entrenador1' },
        { value: 'entrenador2', name: 'entrenador2' },
        { value: 'entrenador3', name: 'entrenador3' },
        { value: 'entrenador4', name: 'entrenador4' }
    ]

    return (
        <Input type="list"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            placeholder='Selecciona una Opción'
            data={data}
            options={coachs} />
    )
}

export const InputListDirector = props => {

    const { input, type, profile, onChange } = props
    const data = profile ? profile[type][input] : ''

    const directors = [
        { value: 'director1', name: 'director1' },
        { value: 'director2', name: 'director2' },
        { value: 'director3', name: 'director3' },
        { value: 'director4', name: 'director4' }
    ]

    return (
        <Input type="list"
            onChange={onChange}
            title={input}
            name={`${type}-${input}`}
            placeholder='Selecciona una Opción'
            data={data}
            options={directors} />
    )
}
