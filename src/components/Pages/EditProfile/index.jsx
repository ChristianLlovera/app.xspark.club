import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'


const model = {
    info: {
        name: 'Juan Vicente',
        lastName: 'Rojas Martin',
        birthdate: '14/12/2011',
        document: '102030405',
        academy: 'FÚTBOL ACADEMY',
        ranking: 7
    },
    fisico: {
        velocidad: 5,
        agilidad: 3,
        fuerza: 2,
        resistencia: 7,
        coordinacion: 9
    },
    tecnico: {
        conduccion: 4,
        regate: 3,
        tiro: 8,
        pase: 2,
        control: 4
    }
}

const RankingEdit = props => {
    const { input, type, title, dataState, setData } = props
    let titleSet

    const plus = () => {
        const value = dataState[type][input]
        dataState[type][input] = value + 1
        setData([dataState])
    }

    const less = () => {
        const value = dataState[type][input]
        dataState[type][input] = value - 1
        setData([dataState])
    }

    switch (title) {
        case "coordinacion":
            titleSet = "coordinación"
            break;
        case "conduccion":
            titleSet = "conducción"
            break;
        default:
            titleSet = title
    }

    return (
        <CardGrid two>
            <CardBlock>
                <Input type="ranking-edit" title={titleSet} data={dataState[type][input]}
                    plusAction={() => plus(input)}
                    lessAction={() => less(input)} />
            </CardBlock>
        </CardGrid>
    )
}

const EditProfile = props => {

    const history = useHistory();
    const [data, setData] = useState([model])
    const [dataState] = data

    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile")} />}
                title="Editar datos"
            />

            <CardGrid>
                <CardBlock title="información"></CardBlock>
            </CardGrid>
            <RankingEdit input="ranking" type="info" title="puntuación" dataState={dataState} setData={setData} />

            <CardGrid>
                <CardBlock title="Físico"></CardBlock>
            </CardGrid>
            {
                Object.keys(dataState.fisico).map((element, value) =>
                    <RankingEdit key={element} input={element} type="fisico" title={element} dataState={dataState} setData={setData} />
                )
            }

            <CardGrid>
                <CardBlock title="Técnico"></CardBlock>
            </CardGrid>
            {
                Object.keys(dataState.tecnico).map((element, value) =>
                    <RankingEdit key={element} input={element} type="tecnico" title={element} dataState={dataState} setData={setData} />
                )
            }

        </Card >

    )
}

export default EditProfile