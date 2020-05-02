import GetProfile from '../Facades/DataBase/Profiles/GetProfile'

const IsProfile = async id => {

    const profile = await GetProfile(id)
    if (!profile) { return false }
    return true

}

export default IsProfile