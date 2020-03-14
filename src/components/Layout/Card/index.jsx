import React from 'react'
import Input from '../Input'

if (process.env.WEBPACK) { require('./_style.scss') }


export const Card = props => {

    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export const CardGrid = props => {

    const { two } = props

    return (
        <div className={two ? 'card-grid cg-two' : 'card-grid'}>
            {props.children}
        </div>
    )
}

export const CardBlock = props => {

    const { title } = props

    return (
        <span>
            {title && <div className="title">{title}</div>}
            {props.children}
        </span>
    )
}

export const CardTitleHeader = props => {
    const { buttonLeft, buttonRight, title } = props

    return (
        <header>
            {buttonLeft &&
                <div className="card-button left">
                    {buttonLeft}
                </div>
            }

            {buttonRight &&
                <div className="card-button right">
                    {buttonRight}
                </div>
            }

            <div className="info">
                {title && <h1>{title}</h1>}
            </div>
        </header>
    )
}

export const CardProfileHeader = props => {

    const { buttonLeft, buttonRight, name, lastName, doc, birthdate, category, ranking, img } = props

    return (
        <header type="profile">

            {buttonLeft &&
                <div className="card-button left">
                    {buttonLeft}
                </div>
            }

            {buttonRight &&
                <div className="card-button right">
                    {buttonRight}
                </div>
            }


            <div className="info">
                {name && <h1>{name}</h1>}
                {lastName && <h2>{lastName}</h2>}
                {doc && <span>DOC - {doc}</span>}
                {birthdate && <span>{birthdate} - 8 años</span>}
                {category && <span className="orange">- {category} -</span>}
                {img && <div className="img"></div>}
                {ranking && <Input type="ranking-read" data={ranking} title="puntuación" />}
            </div>
        </header>
    )
}
