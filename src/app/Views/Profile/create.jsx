import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { handlerAddProfile } from '../../Handlers/HandlerProfile'
import { Card, CardTitleHeader } from '../../Layout/Card'
import IconButton from '../../Layout/IconButton'

import FormProfiles from '../_Partials/Forms/FormProfiles'

const ProfileCreate = props => {

    const history = useHistory()
    const [changes, setChanges] = useState('')
    const [create, setCreate] = useState(false)

    const attrs = { changes, setChanges, setCreate, history }

    return (

        <Card>
            <CardTitleHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push(`/profile/list`)} />}
                buttonRight={<IconButton type={changes} process={create} radio={50} icon="save" onClick={() => handlerAddProfile({ ...attrs })} />}
                title="Crear Perfil"
            />

            <FormProfiles {...attrs} />

        </Card >

    )
}



export default ProfileCreate