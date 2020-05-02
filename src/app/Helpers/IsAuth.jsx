import GetAuth from '../Facades/Auth/GetAuth'

const IsAuth = async () => {

    const auth = await GetAuth()
    if (auth && auth.uid && !auth.isAnonymous) { return true }

    return false

}

export default IsAuth

