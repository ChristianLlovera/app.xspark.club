import dataBase from '../DataBase'
import { getAuth } from '../Auth'

const IsAdmin = async () => {

    const db = dataBase()
    const usr = await getAuth()
    if (usr && usr.uid) {
        const res = await db.setCollection('roles').get(usr.uid)
        if (res.payload.exists && res.payload.type == 'admin') {
            return true
        }
    }
    return false
}

export default IsAdmin

