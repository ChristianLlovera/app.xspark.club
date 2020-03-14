import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'


const EditProfile = props => {

    const history = useHistory();
    const [RankA, setRankA] = useState(2)
    const [RankB, setRankB] = useState(3)
    const [RankC, setRankC] = useState(7)


    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile")} />}
                title="Editar datos"
            />

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Ranking" data={RankA}
                        plusAction={() => setRankA(RankA + 1)}
                        lessAction={() => setRankA(RankA - 1)} />
                </CardBlock>
            </CardGrid>

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Ranking" data={RankB}
                        plusAction={() => setRankB(RankB + 1)}
                        lessAction={() => setRankB(RankB - 1)} />
                </CardBlock>
            </CardGrid>

            <CardGrid two>
                <CardBlock>
                    <Input type="ranking-edit" title="Ranking" data={RankC}
                        plusAction={() => setRankC(RankC + 1)}
                        lessAction={() => setRankC(RankC - 1)} />
                </CardBlock>
            </CardGrid>


        </Card >

    )
}

export default EditProfile