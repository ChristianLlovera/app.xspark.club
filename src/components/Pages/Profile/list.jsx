import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useStore } from '../../Store/useStore'
import IconButton from '../../Layout/IconButton'
import { Card, CardTitleHeader, CardRowProfile } from '../../Layout/Card'

const ProfileList = props => {

    const history = useHistory()

    return (
        <Card>
            <CardTitleHeader
                buttonRight={<IconButton radio={50} icon="plus" />}
                title="Lista de Fichas"
                type="list"
            />{/* header */}
            <CardRowProfile
                onClick={() => history.push("/profile-show")}
                title="Juan Vicente Rojas Martin"
                secondary="-Fútbol Academy-" />
        </Card>
    )
}


export default ProfileList