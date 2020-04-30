import dataBase from '../DataBase'

const IsProfile = async id => {

    const db = dataBase()

    const profile = await db.setCollection('profiles').get(id)
    if (profile.payload.exists) { return true }
    return false

}

export default IsProfile