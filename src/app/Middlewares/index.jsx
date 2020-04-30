import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import { middlewareProvider } from './_middlewares'
import { Card } from '../Layout/Card'


const handlerActions = async obj => {

    const { actions, params, setComponent, props } = obj

    if (actions) {

        for (const action of actions) {

            const trigger = middlewareProvider[action]

            if (trigger) {

                const action = () => new Promise((resolve, reject) => {
                    window.reject = () => reject('reject in middleware')
                    const obj = { params, resolve }
                    trigger(obj)
                })

                const redirect = await action()
                if (redirect) { setComponent(<Redirect to={redirect} />) }
                else { setComponent(props.children) }

            } else {
                setComponent(props.children)
                console.error(`middleware "${action}" undenfined`)
            }

        }

    } else { setComponent(props.children) }

}


const Middleware = props => {

    const { actions } = props
    const [component, setComponent] = useState()
    const params = useParams()

    useEffect(() => {

        setComponent(<Card loader={true} />)
        window.reject ? window.reject() : null
        handlerActions({ actions, params, setComponent, props })

    }, [props.children])

    return (<>{component}</>)

}

export default Middleware 