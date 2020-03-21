import React from 'react'
import { Redirect } from 'react-router-dom'
import { isProfile } from './_middlewares'

const middlewareProvider = {
    'is-profile': redirect => isProfile(redirect)
}

const Middleware = props => {

    const { actions } = props
    const redirect = { url: '' }

    if (actions) {
        actions.map((val) => {
            if (middlewareProvider[val]) {
                const trigger = middlewareProvider[val]
                redirect.url == '' ? trigger(redirect) : null
            }
        })
    }

    return (<>{redirect.url == '' ? props.children : <Redirect to={redirect.url} />}</>)

}

export default Middleware 