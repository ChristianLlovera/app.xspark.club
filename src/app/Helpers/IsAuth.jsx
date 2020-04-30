import { getAuth } from '../Auth'

const IsAuth = async () => {

    const usr = await getAuth()
    if (usr && usr.uid && !usr.isAnonymous) { return true }

    return false

}

export default IsAuth

