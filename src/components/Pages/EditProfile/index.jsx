import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'


const EditProfile = props => {

    const history = useHistory();
    const [Rank, setRank] = useState(2)


    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile")} />}
                title="Editar datos"
            />

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Ranking" data={Rank}
                        plusAction={() => setRank(Rank + 1)}
                        lessAction={() => setRank(Rank - 1)} />
                </CardBlock>
            </CardGrid>
        </Card >

    )
}

export default EditProfile