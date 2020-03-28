import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardRowProfile } from '../../Layout/Card'
import { handlerListProfile, handlerDelProfile } from '../../Handlers/handlerProfile'

const Row = props => {
    const { data, item } = props
    const [deleting, setDeleting] = useState(false)
    const history = useHistory()

    return (
        <CardRowProfile
            img={`${item}.jpg`}
            onClick={() => history.push(`/profile/show/${data.id}`)}
            title={`${data.info.name} ${data.info.lastname}`}
            secondary={`- ${data.info.academy} -`}
            buttonRight={<IconButton process={deleting} radio={50} icon="delete" onClick={() => handlerDelProfile([data.id, setDeleting])} />}
        />
    )
}


const ProfileList = props => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {

        const spanshot = handlerListProfile([setData, setLoading])
        return () => spanshot.unregister()

    }, [])

    return (
        <Card loader={loading}>
            <CardTitleHeader
                buttonRight={<IconButton radio={50} icon="plus" onClick={() => history.push('/profile/create')} />}
                title="Fichas"
                type="list"
            />{/* header */}

            {data.map((element, key) => <Row key={key} item={key} data={element} />)}

        </Card>
    )
}


export default ProfileList