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

    const { type } = props

    return (
        <div data-type={type} className={'card-grid fadeIn animated'}>
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

export const CardErrors = props => {
    const { data } = props

    return (
        <>
            {data &&
                <div className="errors">
                    <ul>
                        {Object.keys(data).map((element, key) => <li key={key}>{data[element][0]}</li>)}
                    </ul>
                </div>
            }
        </>
    )
}

export const CardSuccess = props => {
    const { data } = props

    return (
        <>
            {data &&
                <div className="success">
                    {data}
                </div>
            }
        </>
    )
}

export const CardRowProfile = props => {

    const { title, secondary, img, onClick, buttonRight } = props

    const handlerClick = () => {
        onClick ? onClick() : null
    }

    const style = { 'backgroundImage': `url(/assets/img/profiles/${img})` }

    return (
        <div className="row-profile fadeIn animated" >
            <div className="info">
                <div className="img" style={style}></div>
                <div className="description" onClick={() => handlerClick()}>
                    <span className="tres-puntos">{title}</span>
                    <span className="tres-puntos" type='secundary'>{secondary}</span>
                </div>
            </div>
            <div className="action">{buttonRight}</div>
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
