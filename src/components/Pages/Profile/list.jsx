import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useStore } from '../../Store/useStore'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardRowProfile } from '../../Layout/Card'
import { handlerAddProfile } from '../../Handlers/handlerProfile'

const ProfileList = props => {

    const history = useHistory()
    const { listProfile, addProfile } = useStore()
    const list = listProfile()

    return (
        <Card>
            <CardTitleHeader
                buttonRight={<IconButton radio={50} icon="plus" onClick={() => history.push('/profile/create')} />}
                title="Fichas"
                type="list"
            />{/* header */}

            {list.map((element, key) => <CardRowProfile key={key}
                img={`${key}.jpg`}
                onClick={() => history.push(`/profile/show/${key}`)}
                title={`${element.info.name} ${element.info.lastname}`}
                secondary={`- ${element.info.academy} -`} />)}

        </Card>
    )
}


export default ProfileList