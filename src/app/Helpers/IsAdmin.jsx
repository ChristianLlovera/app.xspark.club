import GetAuth from '../Facades/Auth/GetAuth'
import GetUser from '../Facades/DataBase/Users/GetUser'

const IsAdmin = async () => {

    const auth = await GetAuth()
    if (auth && auth.uid) {
        const user = await GetUser(auth.uid)
        if (user && user.role == 'admin') { return true }
    }

    return false
}

export default IsAdmin

