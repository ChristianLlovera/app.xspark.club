import React from 'react'
import Ranking from '../../Layout/Ranking'

if (process.env.WEBPACK) { require('./_style.scss') }

const Profile = props => {

    return (

        <div className="profile">
            <header>
                <div className="info">
                    <div className="img"></div>
                    <h1>Juan Vicente</h1>
                    <h2>Rojas Martin</h2>
                    <p>-FÚTBOL ACADEMY-</p>
                </div>
                <div className="ranking-list">
                    <Ranking rank={7} title="conducción" />
                    <Ranking rank={5} title="regate" />
                    <Ranking rank={3} title="tiro" />
                    <Ranking rank={6} title="pase" />
                    <Ranking rank={8} title="control" />
                </div>
            </header>


        </div>

    )
}

export default Profile