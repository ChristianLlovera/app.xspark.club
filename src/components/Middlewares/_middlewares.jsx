import db from '../DataBase'

export const isProfile = params => new Promise(resolve => {

    const { id } = params

    db.profiles.get(id).then(res => {
        !res.payload.exists ? resolve('/profile/list') : resolve(false)
    })

})



export const middlewareProvider = {
    'is-profile': params => isProfile(params)
}
