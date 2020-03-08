import React from 'react'

if (process.env.WEBPACK) { require('./_style.scss') }

const Home = props => {

    return (
        <div className="consturction">
            <div className="message"></div>
        </div>
    )
}

export default Home