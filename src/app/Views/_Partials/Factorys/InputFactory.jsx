import React from 'react'
import Input from '../../../Layout/Input'
import Trans from '../../../Helpers/Translate'

const directors = [
    { value: 'director1', name: 'director1' },
    { value: 'director2', name: 'director2' },
    { value: 'director3', name: 'director3' },
    { value: 'director4', name: 'director4' }
]

const coachs = [
    { value: 'entrenador1', name: 'entrenador1' },
    { value: 'entrenador2', name: 'entrenador2' },
    { value: 'entrenador3', name: 'entrenador3' },
    { value: 'entrenador4', name: 'entrenador4' }
]

const InputFactory = props => {

    const { type, prefix, input, value, description, setChanges, changes } = props
    let options

    const handlerChange = () => {
        if (setChanges && changes == '') {
            setChanges('active')
        }
    }

    if (type == 'list' && input == 'directors') {
        options = directors
    }

    if (type == 'list' && input == 'coach') {
        options = coachs
    }

    const name = `${prefix ? prefix + '-' : ''}${input}`

    return (
        <Input type={type}
            onChange={() => handlerChange()}
            title={Trans(input)}
            name={name}
            placeholder={description}
            data={value ? value : ''}
            options={directors}
        />
    )
}

export default InputFactory