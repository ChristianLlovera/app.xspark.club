import dataBase from '../DataBase'

const GetProfileId = async id => {
    const db = dataBase()
    const profile = await db.setCollection('profiles').get(id)
    return profile.payload
}

export default GetProfileId