import React from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'
import { Card, CardProfileHeader, CardGrid, CardBlock } from '../../Layout/Card'

const Profile = props => {

    const history = useHistory();

    return (

        <Card>
            <CardProfileHeader
                buttonLeft={<IconButton radio={50} icon="back" onClick={() => history.push("/")} />}
                buttonRight={<IconButton radio={50} icon="edit" onClick={() => history.push("/edit-profile")} />}
                name="Juan Vicente"
                lastName="Rojas Martin"
                birthdate="14/12/2011"
                doc="15678223445"
                category="FÚTBOL ACADEMY"
                img="url"
                ranking={7}
            />

            <CardGrid two>
                <CardBlock>
                    <Input title="Director Deportivo" data="Nombre Director" type="read" />
                </CardBlock>
                <CardBlock>
                    <Input title="Entrenador" data="Nombre Entrenador" type="read" />
                </CardBlock>
            </CardGrid>


            <CardGrid two>
                <CardBlock title="FÍSICO">
                    <Input type="ranking-read" data={7} title="velocidad" />
                    <Input type="ranking-read" data={5} title="agilidad" />
                    <Input type="ranking-read" data={4} title="fuerza" />
                    <Input type="ranking-read" data={6} title="resistencia" />
                    <Input type="ranking-read" data={9} title="coordinación" />
                </CardBlock>
                <CardBlock title="TÉCNICO">
                    <Input type="ranking-read" data={7} title="conducción" />
                    <Input type="ranking-read" data={5} title="regate" />
                    <Input type="ranking-read" data={3} title="tiro" />
                    <Input type="ranking-read" data={2} title="pase" />
                    <Input type="ranking-read" data={8} title="control" />
                </CardBlock>
            </CardGrid>

            <CardGrid>
                <CardBlock title="Observaciones">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem corrupti quisquam veniam excepturi velit, culpa perferendis adipisci nobis dolorum animi dicta laborum necessitatibus. Architecto harum cupiditate quasi totam sapiente!</p>
                </CardBlock>
            </CardGrid>

            <CardGrid two>
                <CardBlock title="Acudiente">
                    <Input title="Nombre" data="Juan Rojas" type="read" />
                    <Input title="Doc" data="23432234" type="read" />
                    <Input title="Mail" data="juancrojasmartin@hotmil.com" type="read" />
                    <Input title="Télefono" data="6270 3312" type="read" />
                    <Input title="Télefono Emergencia" data="6270 3312" type="read" />
                </CardBlock>
                <CardBlock title="Seguro">
                    <Input title="Compañia" data="Seguros No Name" type="read" />
                    <Input title="Número" data="049938432" type="read" />
                </CardBlock>
            </CardGrid>


        </Card >

    )
}

export default Profile