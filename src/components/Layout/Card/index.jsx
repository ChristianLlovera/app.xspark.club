import React from 'react'
import moment from 'moment'
import Input from '../Input'

if (process.env.WEBPACK) { require('./_style.scss') }


export const Card = props => {

    const { loader } = props

    return (
        <div className="card fadeIn animated" data-loader={loader}>
            {!loader && props.children}
            {loader && <div className="loader animated flash infinite slow" />}
        </div>
    )
}


export const CardGrid = props => {

    const { two } = props

    return (
        <div className={two ? 'card-grid cg-two fadeIn animated' : 'card-grid fadeIn animated'}>
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

export const CardRowProfile = props => {

    const { title, secondary, img, onClick } = props

    const handlerClick = () => {
        onClick ? onClick() : null
    }

    const style = { 'backgroundImage': `url(/assets/img/profiles/${img})` }

    return (
        <div className="row-profile fadeIn animated" onClick={() => handlerClick()}>
            <div className="img" style={style}></div>
            <div className="description">
                <span>{title}</span>
                <span type='secundary'>{secondary}</span>
            </div>
        </div>
    )
}

export const CardTitleHeader = props => {
    const { buttonLeft, buttonRight, title, type } = props

    return (
        <header type={type} className="fadeIn animated">
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

    const {
        buttonLeft,
        buttonRight,
        name,
        lastName,
        doc,
        birthdate,
        category,
        number,
        ranking,
        img } = props

    const style = { 'backgroundImage': `url(/assets/img/profiles/${img})` }

    return (
        <header type="profile" className="fadeIn animated">

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
                {birthdate && <span>{birthdate} - {moment().diff(moment(birthdate, 'DD/MM/YYYY'), "years")} años</span>}
                {category && <span className="orange">- {category} -</span>}
                {img && <div className="img" style={style}></div>}
                {number && <div className="number"> <span>{number}</span> </div>}
                <Input type="ranking-read" data={ranking} title="puntuación" />
            </div>
        </header>
    )
}
