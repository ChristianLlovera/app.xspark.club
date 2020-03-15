import React from 'react'
import tras from '../../Utils/translate'
import { useHistory } from "react-router-dom"
import { useStore } from '../../Store/useStore'
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardProfileHeader, CardGrid, CardBlock } from '../../Layout/Card'
import trans from '../../Utils/translate'

const Profile = props => {

    const history = useHistory();
    const { getPlayer } = useStore()

    const { info, physical, technical, attender, insurance, observation } = getPlayer()

    return (

        <Card>
            <CardProfileHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/")} />}
                buttonRight={<IconButton radio={50} icon="edit" onClick={() => history.push("/edit-profile")} />}
                name={info.name}
                lastName={info.lastname}
                birthdate={info.birthdate}
                doc={info.document}
                category={info.academy}
                img="url"
                ranking={info.ranking}
            />

            <CardGrid two>
                <CardBlock>
                    <Input title="Director Deportivo" data={info.director} type="read" />
                </CardBlock>
                <CardBlock>
                    <Input title="Entrenador" data={info.coach} type="read" />
                </CardBlock>
            </CardGrid>

            <CardGrid two>
                <CardBlock title="FÍSICO">
                    {Object.keys(physical).map((element, key) => <Input key={key} type="ranking-read" data={physical[element]} title={trans(element)} />)}
                </CardBlock>
                <CardBlock title="TÉCNICO">
                    {Object.keys(technical).map((element, key) => <Input key={key} type="ranking-read" data={technical[element]} title={trans(element)} />)}
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Observaciones">
                    <p>{observation}</p>
                </CardBlock>
            </CardGrid>


            <CardGrid two>
                <CardBlock title="Acudiente">
                    {Object.keys(attender).map((element, key) => <Input key={key} type="read" data={attender[element]} title={trans(element)} />)}
                </CardBlock>
                <CardBlock title="Seguro">
                    {Object.keys(insurance).map((element, key) => <Input key={key} type="read" data={insurance[element]} title={trans(element)} />)}
                </CardBlock>
            </CardGrid>


        </Card >

    )
}

export default Profile