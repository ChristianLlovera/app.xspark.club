import dataBase from '../DataBase'

const GetProfileList = async () => {
    const db = dataBase()
    const list = await db.setCollection('profiles')
        .orderBy({ field: 'info.name', type: 'asc' })
        .list()
    return list.payload
}

export default GetProfileList