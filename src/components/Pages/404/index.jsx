import React from 'react'
if (process.env.WEBPACK) { require('./_style.scss') }

const NoFount = () => {
    return (
        <div className="error">
            <div className="notFound">
            </div>
        </div>
    )
}

export default NoFount