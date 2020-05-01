import dataBase from '../DataBase'

const SetProfileId = async (id, data) => {
    const db = dataBase()
    await db.setCollection('profiles').update(id, data)
    return true
}

export default SetProfileId