import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { Input } from '../../Layout/Input'
import { handlerGetProfile, handlerSaveProfile } from '../../Handlers/HandlerProfile'
import { Card, CardTitleHeader, CardGrid, CardBlock } from '../../Layout/Card'
import IconButton from '../../Layout/IconButton'

import FormProfiles from '../_Partials/Forms/FormProfiles'

const ProfileEdit = () => {

    const { id } = useParams()
    const history = useHistory()
    const [profile, setProfile] = useState()
    const [changes, setChanges] = useState('')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const attrs = { id, changes, setChanges, profile, setProfile, setSaving, setLoading, history }

    useEffect(() => {
        handlerGetProfile({ ...attrs })
    }, [])

    return (

        <Card loader={loading}>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/profile/show/${id}`)} />}
                buttonRight={<IconButton type={changes} process={saving} radio={50} icon="save" onClick={() => handlerSaveProfile({ ...attrs })} />}
                title="Editar datos"
            />

            <FormProfiles {...attrs} />

        </Card >

    )
}

export default ProfileEdit