import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'

const model = {//modelo de datos
    info: {
        name: 'Juan Vicente',
        lastname: 'Rojas Martin',
        birthdate: '14/12/2011',
        document: '102030405',
        academy: 'FÚTBOL ACADEMY',
        number: 10,
        director: 'Nombre del director',
        coach: 'Nombre del entrenador',
        ranking: 7
    },
    physical: {
        speed: 5,
        agility: 3,
        strength: 2,
        resistance: 7,
        coordination: 9
    },
    technical: {
        driving: 4,
        dodge: 3,
        shot: 8,
        pass: 2,
        control: 4
    },
    observation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    insurance: {
        company: 'Seguros No Name',
        number: '23343223'
    },
    attender: {
        name: 'Juan Rojas',
        document: '12343345',
        mail: 'juancrojasmartin@hotmail.com',
        phone: '62703312',
        emergency: '62703312'
    }
}

const InputRanking = props => {//todos los inputs de ranking para un bucle
    const { input, type, dataState, setData } = props

    const plus = () => {
        const value = dataState[type][input]
        dataState[type][input] = value + 1
        setData([dataState])
    }

    const less = () => {//acción de bajar cantidad
        const value = dataState[type][input]//se le pasa al objeto los metodos con bariables object['method']
        dataState[type][input] = value - 1
        setData([dataState])
    }

    return (
        <CardGrid two>
            <CardBlock>
                <Input type="ranking-edit" title={input} data={dataState[type][input]}
                    plusAction={() => plus(input)}
                    lessAction={() => less(input)} />
            </CardBlock>
        </CardGrid>
    )
}

const InputText = props => {

    const { input, type, dataState, setData } = props

    const handlerkey = e => {
        dataState[type][input] = e.target.value
        setData([dataState])
    }

    return (
        <Input type="text"
            title={input}
            placeholder='Escribe Un Nombre'
            data={dataState[type][input]}
            onChange={e => handlerkey(e)} />
    )
}


const EditProfile = props => {//pagina de edicion de perfiles

    const history = useHistory();//para direccionar con react router history.push("/destino")
    const [data, setData] = useState([model])
    const [dataState] = data
    const { physical, technical, insurance, attender } = dataState
    const args = { dataState, setData }


    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile")} />}
                title="Editar datos"
            />{/* header */}


            <CardGrid>{/* titulo */}
                <CardBlock title="información" />
            </CardGrid>
            <CardGrid two>
                <CardBlock>
                    <InputText type="info" input="name"  {...args} />
                    <InputText type="info" input="birthdate"  {...args} />
                    <InputText type="info" input="academy"  {...args} />
                    <InputText type="info" input="coach"  {...args} />
                </CardBlock >
                <CardBlock>
                    <InputText type="info" input="lastname"  {...args} />
                    <InputText type="info" input="document"  {...args} />
                    <InputText type="info" input="number"  {...args} />
                    <InputText type="info" input="director"  {...args} />
                </CardBlock >
            </CardGrid >


            <CardGrid>
                <CardBlock>
                    <Input type="read" title='observación' data={dataState['observation']} />
                </CardBlock>
            </CardGrid>


            <InputRanking input="ranking" type="info" {...args} />


            <CardGrid>{/* titulo */}
                <CardBlock title="Físico"></CardBlock>
            </CardGrid>
            {
                Object.keys(physical).map((element, key) => //bucle de inputs
                    <InputRanking key={key} type="physical" input={element} {...args} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="Técnico"></CardBlock>
            </CardGrid>
            {
                Object.keys(technical).map((element, key) =>//bucle de inpues
                    <InputRanking key={key} type="technical" input={element} {...args} />
                )
            }


            <CardGrid>{/* titulo */}
                <CardBlock title="seguro" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="insurance" input='company' {...args} />
                </CardBlock>
                <CardBlock>
                    <InputText type="insurance" input='number'  {...args} />
                </CardBlock>
            </CardGrid>


            <CardGrid>{/* titulo */}
                <CardBlock title="acudiente" />
            </CardGrid>
            <CardGrid two>{/* titulo */}
                <CardBlock>
                    <InputText type="attender" input="name"  {...args} />
                    <InputText type="attender" input="phone"  {...args} />
                </CardBlock>
                <CardBlock>
                    <InputText type="attender" input="document"  {...args} />
                    <InputText type="attender" input="emergency"  {...args} />
                </CardBlock>
            </CardGrid>

        </Card >

    )
}

export default EditProfile