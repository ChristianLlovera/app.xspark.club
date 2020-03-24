import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardRowProfile } from '../../Layout/Card'
import { handlerListProfile } from '../../Handlers/handlerProfile'


const ProfileList = props => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => { handlerListProfile(setData, setLoading) }, [])

    return (
        <Card loader={loading}>
            <CardTitleHeader
                buttonRight={<IconButton radio={50} icon="plus" onClick={() => history.push('/profile/create')} />}
                title="Fichas"
                type="list"
            />{/* header */}

            {data.map((element, key) =>
                <CardRowProfile
                    key={key}
                    img={`${key}.jpg`}
                    onClick={() => history.push(`/profile/show/${element.id}`)}
                    title={`${element.info.name} ${element.info.lastname}`}
                    secondary={`- ${element.info.academy} -`} />)}

        </Card>
    )
}


export default ProfileList