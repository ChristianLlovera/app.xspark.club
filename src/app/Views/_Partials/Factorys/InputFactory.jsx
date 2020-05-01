import React from 'react'
import Input from '../../../Layout/Input'
import Trans from '../../../Helpers/Translate'

const options = {}
options.director = [
    { value: 'director1', name: 'director1' },
    { value: 'director2', name: 'director2' },
    { value: 'director3', name: 'director3' },
    { value: 'director4', name: 'director4' }
]

options.coach = [
    { value: 'entrenador1', name: 'entrenador1' },
    { value: 'entrenador2', name: 'entrenador2' },
    { value: 'entrenador3', name: 'entrenador3' },
    { value: 'entrenador4', name: 'entrenador4' }
]

options.academy = [
    { value: 'BASEBALL', name: 'BASEBALL ACADEMY' },
    { value: 'FUTBOL', name: 'FÚTBOL ACADEMY' },
    { value: 'KARATE', name: 'KARATE ACADEMY' }
]


const InputFactory = props => {

    const { type, prefix, input, value, description, setChanges, changes, onChange } = props

    const handlerChange = e => {
        typeof onChange == 'function' ? onChange(e) : null
        if (setChanges && changes == '') {
            setChanges('active')
        }
    }

    const name = `${prefix ? prefix + '-' : ''}${input}`

    return (
        <Input type={type}
            onChange={e => handlerChange(e)}
            title={Trans(input)}
            name={name}
            placeholder={description}
            data={value ? value : ''}
            options={type == 'list' ? options[input] : null}
        />
    )
}

export default InputFactory