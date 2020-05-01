import dataBase from '../DataBase'

const DelProfileId = async id => {
    const db = dataBase()
    await db.setCollection('profiles').delete(id)
    return true
}

export default DelProfileId