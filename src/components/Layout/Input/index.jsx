import React from 'react'
import IconButton from '../IconButton'

if (process.env.WEBPACK) { require('./_style.scss') }


const Read = props => {

    const { title, data } = props
    return (
        <div className="input">
            <div className="title">
                <span>{title}</span>
            </div>
            <div className="data">{data}</div>
        </div>
    )

}

const Ranking = props => {

    const { data, title, type, plus, less } = props
    const items = []

    for (let i = 0; i < 10; i++) {
        items.push(<div key={i} className={data >= (i + 1) ? "bar active" : "bar"} />)
    }

    return (
        <div className="ranking">
            {type == "edit" &&
                <span className="rank-button less-button">
                    <IconButton type="border" radio={30} icon="less" onClick={() => data > 0 ? less() : null} />
                </span>
            }

            {type == "edit" &&
                <span className="rank-button plus-button">
                    <IconButton type="border" radio={30} icon="plus" onClick={() => data < 10 ? plus() : null} />
                </span>
            }

            <div className="title">
                <span>{title}</span>
                <span>{data}/10</span>
            </div>
            <div className="items">{items}</div>
        </div>
    )
}



const Input = props => {

    const { title, data, type, plusAction, lessAction } = props

    return (

        <>
            {type == "read" && <Read title={title} data={data} />}
            {type == "ranking-read" && <Ranking type="read" title={title} data={data} />}
            {type == "ranking-edit" && <Ranking type="edit" title={title} data={data} plus={plusAction} less={lessAction} />}
        </>

    )
}

export default Input