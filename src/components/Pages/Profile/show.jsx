import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardProfileHeader, CardGrid, CardBlock } from '../../Layout/Card'
import trans from '../../Helpers/Translate'
import average from '../../Utils/average'
import nl2br from 'react-nl2br'
import { handlerGetProfile } from '../../Handlers/handlerProfile'

const ProfileShow = props => {

    const empty = {
        info: {},
        physical: {},
        technical: {},
        attender: {},
        insurance: {},
        observation: {}
    }

    const { id } = useParams()
    const history = useHistory()
    const [data, setData] = useState(empty)
    const [loading, setLoading] = useState(true)

    const {
        info,
        physical,
        technical,
        attender,
        insurance,
        observation } = data

    useEffect(() => {
        const snapshot = handlerGetProfile([id, setData, setLoading])
        return () => snapshot.unregister()
    }, [])

    return (

        <Card loader={loading}>
            <CardProfileHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/profile/list")} />}
                buttonRight={<IconButton radio={50} icon="edit" onClick={() => history.push(`/profile/edit/${id}`)} />}
                name={info.name}
                lastName={info.lastname}
                birthdate={info.birthdate}
                doc={info.document}
                category={info.academy}
                number={info.number}
                img={`profile.svg`}
                ranking={average({ physical, technical })}
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
                    {Object.keys(physical).map((element, key) =>
                        <Input key={key} type="ranking-read" data={physical[element]} title={trans(element)} />)
                    }
                </CardBlock>
                <CardBlock title="TÉCNICO">
                    {Object.keys(technical).map((element, key) =>
                        <Input key={key} type="ranking-read" data={technical[element]} title={trans(element)} />)
                    }
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Observaciones">
                    <p>{nl2br(observation)}</p>
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Seguro" />
            </CardGrid>

            <CardGrid two>
                <CardBlock >
                    <Input type="read" data={insurance.company} title="company" />
                </CardBlock>
                <CardBlock >
                    <Input type="read" data={insurance.number} title="number" />
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Acudiente" />
            </CardGrid>

            <CardGrid two>
                <CardBlock>
                    <Input type="read" data={attender.name} title="name" />
                    <Input type="read" data={attender.phone} title="phone" />
                    <Input type="read" data={attender.mail} title="mail" />
                </CardBlock>
                <CardBlock>
                    <Input type="read" data={attender.document} title="document" />
                    <Input type="read" data={attender.emergency} title="emergency" />
                </CardBlock>
            </CardGrid>

        </Card >

    )
}

export default ProfileShow