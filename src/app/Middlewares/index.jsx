import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import { middlewareProvider } from './_middlewares'
import { Card } from '../Layout/Card'


const handlerActions = async obj => {

    const { params, setComponent, props } = obj
    const { actions } = props

    if (actions) {

        for (const action of actions) {

            const trigger = middlewareProvider[action]

            if (trigger) {

                const prom = () => new Promise((resolve, reject) => {
                    window.reject = () => reject('reject in middleware')
                    const obj = { params, resolve }
                    trigger(obj)
                })

                const redirect = await prom()

                if (redirect) {
                    setComponent(<Redirect to={redirect} />)
                    return false
                }

            } else {
                setComponent(props.children)
                console.error(`middleware "${action}" undenfined`)
            }

        }

        setComponent(props.children)

    } else { setComponent(props.children) }

}


const Middleware = props => {

    const [component, setComponent] = useState(<Card loader={true} />)
    const params = useParams()
    useEffect(() => {

        setComponent(<Card loader={true} />)
        window.reject ? window.reject() : null
        handlerActions({ params, setComponent, props })

    }, [props.children])

    return (<>{component}</>)

}

export default Middleware 