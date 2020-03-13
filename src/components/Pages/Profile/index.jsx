import React from 'react'
import { useHistory } from "react-router-dom";
import Ranking from '../../Layout/Ranking'
import Input from '../../Layout/Input'
import IconButton from '../../Layout/IconButton'

if (process.env.WEBPACK) { require('./_style.scss') }

const Profile = props => {

    const history = useHistory();

    return (

        <div className="profile">
            <header>
                <div className="button-left">
                    <IconButton radio={50} icon="back" onClick={() => history.push("/")} />
                </div>
                <div className="button-right">
                    <IconButton radio={50} icon="edit" onClick={() => history.push("/")} />
                </div>
                <div className="info">
                    <h1>Juan Vicente</h1>
                    <h2>Rojas Martin</h2>
                    <span>DOC - 15678223445</span>
                    <span>14/12/2011 - 8 años</span>
                    <span className="orange">-FÚTBOL ACADEMY-</span>
                    <div className="img"></div>
                    <Ranking rank={7} title="puntuación" />
                </div>
            </header>

            <div className="block-list two">
                <span>
                    <Input title="Director Deportivo" data="Nombre Director" type="block" />
                </span>
                <span>
                    <Input title="Entrenador" data="Nombre Entrenador" type="block" />
                </span>
            </div>

            <div className="block-list two">
                <span>
                    <div className="title">físico</div>
                    <Ranking rank={7} title="velocidad" />
                    <Ranking rank={5} title="agilidad" />
                    <Ranking rank={4} title="fuerza" />
                    <Ranking rank={6} title="resistencia" />
                    <Ranking rank={9} title="coordinación" />
                </span>
                <span>
                    <div className="title">técnico</div>
                    <Ranking rank={7} title="conducción" />
                    <Ranking rank={5} title="regate" />
                    <Ranking rank={3} title="tiro" />
                    <Ranking rank={2} title="pase" />
                    <Ranking rank={8} title="control" />
                </span>
            </div>

            <div className="block-list">
                <span>
                    <div className="title">Observaciones</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem corrupti quisquam veniam excepturi velit, culpa perferendis adipisci nobis dolorum animi dicta laborum necessitatibus. Architecto harum cupiditate quasi totam sapiente!</p>
                </span>
            </div>

            <div className="block-list two">
                <span>
                    <div className="title">acudiente</div>
                    <Input title="Nombre" data="Juan Rojas" type="block" />
                    <Input title="Doc" data="23432234" type="block" />
                    <Input title="Mail" data="juancrojasmartin@hotmil.com" type="block" />
                    <Input title="Télefono" data="6270 3312" type="block" />
                    <Input title="Télefono Emergencia" data="6270 3312" type="block" />
                </span>
                <span>
                    <div className="title">seguro</div>
                    <Input title="Compañia" data="Seguros No Name" type="block" />
                    <Input title="Número" data="049938432" type="block" />
                </span>
            </div>

        </div>

    )
}

export default Profile