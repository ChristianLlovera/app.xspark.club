import React from 'react'

if (process.env.WEBPACK) { require('./_style.scss') }

const Bar = props => {

    const { rank, bar } = props
    let style

    rank >= (bar + 1) ? style = `bar active` : style = "bar"

    return (
        <div className={style}></div>
    )

}


const Ranking = props => {

    const { rank, title } = props
    const items = []

    for (let i = 0; i < 10; i++) {
        items.push(<Bar rank={rank} key={i} bar={i} />)

    }

    return (
        <div className="ranking">
            <div className="title">{title}</div>
            <div className="items">{items}</div>
        </div>
    )
}

export default Ranking