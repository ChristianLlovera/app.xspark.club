import dataBase from '../DataBase'
import { getAuth } from '../Auth'


export const isProfile = async props => {

    const { params, resolve } = props

    const db = dataBase()
    const { id } = params

    const res = await db.setCollection('profiles').get(id)
    !res.payload.exists ? resolve('/profile/list') : resolve(false)

}


export const isAdmin = async props => {

    const { params, resolve } = props

    const db = dataBase()
    const usr = await getAuth()
    const res = await db.setCollection('roles').get(usr.uid)
    if (res.payload.exists && res.payload.type == 'admin') {
        resolve(false)
    } else { resolve('/') }

}


export const isAuth = async props => {

    const { params, resolve } = props

    try {
        const usr = await getAuth()
        if (usr && usr.uid && !usr.isAnonymous) { resolve(false) }
        else { resolve('/login') }
    } catch{ resolve('/login') }

}


export const isNotAuth = async props => {

    const { params, resolve } = props

    const usr = await getAuth()
    if (!usr || !usr.uid || usr.isAnonymous) { resolve(false) }
    else { resolve('/') }

}



export const middlewareProvider = {
    'is-profile': props => isProfile(props),
    'is-admin': props => isAdmin(props),
    'is-not-auth': props => isNotAuth(props),
    'is-auth': props => isAuth(props)
}

