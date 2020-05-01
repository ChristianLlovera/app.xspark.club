import { getAuth } from '../Auth'
import GetRole from '../Facades/DataBase/Users/GetRole'


const IsAdmin = async () => {

    const usr = await getAuth()
    if (usr && usr.uid) {
        const rol = await GetRole(usr.uid)
        if (rol && rol == 'admin') { return true }
    }

    return false
}

export default IsAdmin

