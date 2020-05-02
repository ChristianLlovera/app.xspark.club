import curretUserIsAdmin from '../Helpers/IsAdmin'
import curretUserIsAuth from '../Helpers/IsAuth'
import idIsproflle from '../Helpers/IsProfile'

export const isProfile = async props => {
    const { params, resolve } = props
    const { id } = params
    const profile = await idIsproflle(id)
    profile ? resolve(false) : resolve('/profile/list')

}


export const isAdmin = async props => {

    const { params, resolve } = props

    const usrIsAdmin = await curretUserIsAdmin()

    if (usrIsAdmin) { resolve(false) }
    else { resolve('/') }

}


export const isAuth = async props => {

    const { params, resolve } = props

    const usrIsAuth = await curretUserIsAuth()

    if (usrIsAuth) { resolve(false) }
    else { resolve('/account/login') }


}


export const isNotAuth = async props => {

    const { params, resolve } = props

    const usrIsAuth = await curretUserIsAuth()

    if (!usrIsAuth) { resolve(false) }
    else { resolve('/') }

}



export const middlewareProvider = {
    'is-profile': props => isProfile(props),
    'is-admin': props => isAdmin(props),
    'is-not-auth': props => isNotAuth(props),
    'is-auth': props => isAuth(props)
}

