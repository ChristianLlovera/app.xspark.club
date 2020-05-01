import dataBase from '../DataBase'

const CreateProfile = async data => {
    const db = dataBase()
    const profile = await db.setCollection('profiles').create(data)
    return profile.id
}

export default CreateProfile