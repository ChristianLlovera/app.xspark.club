import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'


const model = {
    velocidad: 5,
    regate: 3,
    pase: 2
}

const EditProfile = props => {

    const history = useHistory();
    const [data, setData] = useState([model])
    const [dataState] = data

    const plus = (name) => {
        const value = dataState[name]
        dataState[name] = value + 1
        setData([dataState])
    }

    const less = (name) => {
        const value = dataState[name]
        dataState[name] = value - 1
        setData([dataState])
    }

    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile")} />}
                title="Editar datos"
            />

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Velocidad" data={dataState.velocidad}
                        plusAction={() => plus('velocidad')}
                        lessAction={() => less('velocidad')} />
                </CardBlock>
            </CardGrid>

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Regate" data={dataState.regate}
                        plusAction={() => plus('regate')}
                        lessAction={() => less('regate')} />
                </CardBlock>
            </CardGrid>

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Pase" data={dataState.pase}
                        plusAction={() => plus('pase')}
                        lessAction={() => less('pase')} />
                </CardBlock>
            </CardGrid>


        </Card >

    )
}

export default EditProfile